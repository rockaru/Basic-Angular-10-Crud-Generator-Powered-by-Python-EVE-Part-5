import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { DataService } from './data.service'
import { SocketService } from './socket.service'
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(
    private dialog: MatDialog,
    private httpClient: HttpClient,
    private dataService: DataService,
    private socketService: SocketService
  ) { }

  loadFormGroup(form, item?) {
    const group = {}

    if (item) {
      for (let element of form) {
        group[element.name] = new FormControl(item[element.name])
      }
    } else {

      for (let element of form) {
        group[element.name] = new FormControl('')
      }
    }
    const formGroup = new FormGroup(group)
    return formGroup
  }

  getForm(resource) {

    return this.httpClient.get(`api/form/${resource}`).pipe()

  }

  setStructure(resource, scope, data) {
    const items = []
    for (let item in data) {
      switch (scope) {
        case 'create':
          if (data[item].create) {
            items[item] = data[item];
            if (data[item].type == "objectid") {
              data[item].options = this.loadOptions(resource, item, data[item].data_relation.resource)

            }
          }
          break;
        case 'read':
          if (data[item].read) {
            items[item] = data[item];
          }
          break;
        case 'update':
          if (data[item].update) {
            items[item] = data[item];
            if (data[item].type == "objectid") {
              data[item].options = this.loadOptions(resource, item, data[item].data_relation.resource)
            }
          }
          break;
      }
    }
    const form = []
    for (let item in items) {
      form.push({
        name: item,
        value: items[item]
      })

    }
    localStorage.setItem(`form-${resource}-${scope}`, JSON.stringify(form))
    return form;
  }

  loadOptions(resource, field, data) {
    const items = []
    this.dataService.getAll(data).subscribe(data => {

      data = data["_items"]
      for (let item in data) {

        items.push({
          "_name": data[item].name,
          "_id": data[item]._id
        })

      }
      localStorage.setItem(`options-for-form-${resource}-${field}`, JSON.stringify(items))
      console.log(items)
    })
    return items
  }

  openRead(resource, component) {
    const scope = "read"
    let form = JSON.parse(localStorage.getItem(`form-${resource}-${scope}`))
    if (!form) {
      this.getForm(resource).subscribe(form => {
        form = this.setStructure(resource, scope, form)
        const embedded = {}
        for (let item in form) {
          if (form[item].value.type == 'objectid') {
            embedded[form[item].name] = 1
          }
        }
        const res = `${resource}?embedded=${JSON.stringify(embedded)}`
        this.dataService.getAll(res).subscribe((data) => {

          this.loadRead(form, data, resource, component)
        })
      })
    } else {
      const embedded = {}
      for (let item in form) {
        if (form[item].value.type == 'objectid') {
          embedded[form[item].name] = 1
        }
      }
      const res = `${resource}?embedded=${JSON.stringify(embedded)}`
      this.dataService.getAll(res).subscribe((data) => {
        this.loadRead(form, data, resource, component)
      })
    }


  }

  loadRead(form, data, resource, component) {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.data = {
      items: data["_items"],
      resource: resource,
      form: form,
    }
    const dialogRef = this.dialog.open(component, dialogConfig)
    dialogRef.afterClosed().subscribe(
      data => {
        console.log(data)
      }
    )
  }

  openCreate(resource, component) {
    const scope = "create"
    let form = JSON.parse(localStorage.getItem(`form-${resource}-${scope}`))
    const options = []
    const keys = Object.keys(localStorage)
    for (let i of keys) {
      if (i.indexOf(`options-for-form-${resource}`) == 0) {
        const name = i.slice(`options-for-form-${resource}-`.length, i.length)
        options[name] = JSON.parse(localStorage.getItem(i))
        console.log(name)
      }

    }
    if (!form) {
      this.getForm(resource).subscribe(form => {
        form = this.setStructure(resource, scope, form)
        this.loadCreate(form, options, resource, scope, component)
      })
    } else {
      this.loadCreate(form, options, resource, scope, component)
    }

  }

  loadCreate(form, options, resource, scope, component) {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.data = {
      resource: resource,
      form: form,
      options: options,
      scope: scope
    }
    const dialogRef = this.dialog.open(component, dialogConfig)
    dialogRef.afterClosed().subscribe(
      data => {
        if (data) {
          console.log(data)
          this.dataService.add(resource, data)
        }
      }
    )
  }

  openUpdate(resource, item, component) {
    const scope = "update"
    let form = JSON.parse(localStorage.getItem(`form-${resource}-${scope}`))
    if (!form) {
      form = this.getForm(resource).subscribe(form => {
        form = this.setStructure(resource, scope, form)
        this.loadUpdate(form, item, resource, component)
      })
    } else {
      this.loadUpdate(form, item, resource, component)
    }
  }

  loadUpdate(form, item, resource, component) {
    let dialogRef
    const dialogConfig = new MatDialogConfig()
    dialogConfig.data = {
      item: item,
      resource: resource,
      form: form,
    }

    dialogRef = this.dialog.open(component, dialogConfig)

    dialogRef.afterClosed().subscribe(
      data => {
        if (data) {
          this.dataService.update(resource, item._id, data)

        }


      }
    )

  }

  openDelete(resource, item, component) {
    const scope = "read"
    let form = JSON.parse(localStorage.getItem(`form-${resource}-${scope}`))
    if (!form) {
      form = this.getForm(resource).subscribe(form => {
        form = this.setStructure(resource, scope, form)
        this.loadDelete(form, item, resource, component)
      })
    } else {
      this.loadDelete(form, item, resource, component)
    }
  }

  loadDelete(form, item, resource, component) {

    const dialogConfig = new MatDialogConfig()

    dialogConfig.data = {
      item: item,
      resource: resource,
      form: form,
    }

    const dialogRef = this.dialog.open(component, dialogConfig)

    dialogRef.afterClosed().subscribe(
      data => {
        if (data) {
          this.dataService.delete(resource, item._id)
        }
      }
    )

  }

  openDetails(resource, item, component) {

    const scope = "read"
    let form = JSON.parse(localStorage.getItem(`form-${resource}-${scope}`))

    if (!form) {

      form = this.getForm(resource).subscribe(form => {

        form = this.setStructure(resource, scope, form)
        this.loadDetails(form, item, resource, component)

      })

    } else {

      this.loadDetails(form, item, resource, component)

    }

  }

  loadDetails(form, item, resource, component) {

    const dialogConfig = new MatDialogConfig()

    dialogConfig.data = {
      item: item,
      resource: resource,
      form: form,
    }

    const dialogRef = this.dialog.open(component, dialogConfig)

  }

}

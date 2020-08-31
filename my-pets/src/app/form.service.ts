import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { DataService } from './data.service'
import { SocketService } from './socket.service'
import {SpinnerService} from './spinner.service'
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(
    private dialog: MatDialog,
    private httpClient: HttpClient,
    private dataService: DataService,
    private socketService: SocketService,
    private spinnerService:SpinnerService,
    private formBuilder: FormBuilder
  ) { }

  loadFormGroup(form, item?) {
    const group = {}

    

      for (let element of form) {
        switch (element.value.input) {
          case "list":
            group[element.name] = new FormControl('[]')
            break

          case "multi":
            group[element.name] = this.formBuilder.array([this.loadFormGroup(element.value.child)])
            break

          case "dict":
            group[element.name] = this.formBuilder.group([this.loadFormGroup(element.value.child)])
            break

            case "combo":
            group[element.name] = new FormControl('')
              group[element.value.child] = this.formBuilder.group([])
              break
            
          default:
            group[element.name] = new FormControl('')
            break
          
        }
      
      
    }
    return this.formBuilder.group(group)

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
            
      
            if (data[item].input == "combo") {
              data[item].child="test"
            }
            
            if (data[item].input == 'multi') {
              data[item].child = this.loadChildFormItems(resource, data[item].schema.schema, scope)
            }
            if (data[item].input == 'dict') {
              data[item].child = this.loadChildFormItems(resource, data[item].schema, scope)
            }
          }
          break;
        case 'read':
          if (data[item].read) {
            items[item] = data[item];
            if (data[item].input == "select") {
              //data[item].options = this.loadOptions(resource, item, data[item].data_relation.resource)

            }
            
            if (data[item].input == 'multi') {
              data[item].child = this.loadChildFormItems(resource, data[item].schema.schema, scope)
            }
            if (data[item].input == 'dict') {
              data[item].child = this.loadChildFormItems(resource, data[item].schema, scope)
            }
          }
          break;
        case 'update':
          if (data[item].update) {
            items[item] = data[item];
            if (data[item].input == "select") {
              //data[item].options = this.loadOptions(resource, item, data[item].data_relation.resource)

            }
            
            if (data[item].input == 'multi') {
              data[item].child = this.loadChildFormItems(resource, data[item].schema.schema, scope)
            }
            if (data[item].input == 'dict') {
              data[item].child = this.loadChildFormItems(resource, data[item].schema, scope)
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

  loadChildFormItems(resource, items, scope) {
    const form = []

    for (let item in items) {
      switch (scope) {
        case 'create':
          if (items[item].create) {
           
            if (items[item].input == 'multi') {
              items[item].child = this.loadChildFormItems(resource, items[item].schema.schema, scope)
            }
            if (items[item].input == 'dict') {
              items[item].child = this.loadChildFormItems(resource, items[item].schema, scope)
            }
          }
          break
          case 'update':
          if (items[item].update) {
           
            if (items[item].input == 'multi') {
              items[item].child = this.loadChildFormItems(resource, items[item].schema.schema, scope)
            }
            if (items[item].input == 'dict') {
              items[item].child = this.loadChildFormItems(resource, items[item].schema, scope)
            }
          }
          break
          case 'read':
          if (items[item].read) {
           
            if (items[item].input == 'multi') {
              items[item].child = this.loadChildFormItems(resource, items[item].schema.schema, scope)
            }
            if (items[item].input == 'dict') {
              items[item].child = this.loadChildFormItems(resource, items[item].schema, scope)
            }
          }
          break
      }
    }
    for (let item in items) {
      form.push({
        name: item,
        value: items[item]
      })

    }
    return form
  }

  loadOptions(resource, field, data) {
    const items = []
    this.dataService.getAll(data).subscribe(data => {

      data = data["_items"]
      for (let item in data) {

        items.push({
          "name": data[item].name,
          "_id": data[item]._id
        })

      }
      localStorage.setItem(`options-for-form-${resource}-${field}`, JSON.stringify(items))
      console.log(items)
    })
    return items
  }

  openRead(resource, component) {
    this.spinnerService.changeState(true)
let x
    const scope = "read"
    let form = JSON.parse(localStorage.getItem(`form-${resource}-${scope}`))
    if (!form) {
      this.getForm(resource).subscribe(form => {
        form = this.setStructure(resource, scope, form)
        
        x =  this.loadRead(form,  resource, component)
        
      })
    } else {
      
        x = this.loadRead(form, resource, component)
        
    }
    x.afterOpened().subscribe(data=>{
      this.spinnerService.changeState(false)
    })
    return x

  }

  loadRead(form,  resource, component) {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.data = {
      resource: resource,
      form: form,
    }
    return this.dialog.open(component, dialogConfig)
    
  }

  openCreate(resource, component) {
    this.spinnerService.changeState(true)
    let x
    const scope = "create"
    let form = JSON.parse(localStorage.getItem(`form-${resource}-${scope}`))
    
    if (!form) {
      this.getForm(resource).subscribe(form => {
        form = this.setStructure(resource, scope, form)
        x= this.loadCreate(form, resource,  component)
      })
    } else {
      x= this.loadCreate(form, resource, component)
      
    }
    x.afterOpened().subscribe(data=>{
      this.spinnerService.changeState(false)
    })
    return x
  }

  loadCreate(form, resource,  component) {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.data = {
      resource: resource,
      form: form,
    }
    return this.dialog.open(component, dialogConfig)
     
  }

  openUpdate(resource, item, component) {
    this.spinnerService.changeState(true)
    let x
    const scope = "update"
    let form = JSON.parse(localStorage.getItem(`form-${resource}-${scope}`))
    if (!form) {
      form = this.getForm(resource).subscribe(form => {
        form = this.setStructure(resource, scope, form)
      x= this.loadUpdate(form, item, resource, component)
      })
    } else {
      x= this.loadUpdate(form, item, resource, component)
    }
    x.afterOpened().subscribe(data=>{
      this.spinnerService.changeState(false)
    })
    return x
  }

  loadUpdate(form, item, resource, component) {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.data = {
      item: item,
      resource: resource,
      form: form,
    }

    return this.dialog.open(component, dialogConfig)

    

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

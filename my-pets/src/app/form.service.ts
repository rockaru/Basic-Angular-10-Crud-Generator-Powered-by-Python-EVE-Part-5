import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { FormControl, FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  pages = []
  constructor(
    private dialog: MatDialog,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder
  ) { }

  init() {
    if (localStorage.length == 0) {
      this.httpClient.get(`api/form`).pipe().subscribe(x => {
        for (let item in x) {
          this.loadForm(item, "read")
          this.loadForm(item, "create")
          this.loadForm(item, "update")
        }
      })
    }
  }

  loadItems() {
    const items = []
    this.httpClient.get(`api/form`).pipe().subscribe(x => {
      for (let item in x) {
        items.push(item)
      }
    })

    return items
  }

  loadFormGroup(form, item?) {
    const group = {}
    for (let key of form) {
      const validators = []
      if (key.meta.required) {
        validators.push(Validators.required)
      }
      if (key.meta.minlength) {
        validators.push(Validators.minLength(key.meta.minlength))
      }
      if (key.meta.maxlength) {
        validators.push(Validators.maxLength(key.meta.maxlength))
      }
      switch (key.meta.input) {
        case 'date':
          if (key.meta.fill_default) {
            let d = new Date(),
              month = '' + (d.getMonth() + 1),
              day = '' + d.getDate(),
              year = d.getFullYear();

            if (month.length < 2)
              month = '0' + month;
            if (day.length < 2)
              day = '0' + day;
            const date = [year, month, day].join('-')
            group[key.name] = new FormControl(date, validators)

          } else {
            group[key.name] = new FormControl('', validators)
          }
          break

        case 'time':
          if (key.meta.fill_default) {
            let d = new Date(),
              hour = '' + (d.getHours().toLocaleString()),
              minute = '' + d.getMinutes().toLocaleString();


            if (hour.length < 2)
              hour = '0' + hour;
            if (minute.length < 2)
              minute = '0' + minute;
            const date = [hour, minute].join(':')
            group[key.name] = new FormControl(date, validators)

          } else {
            group[key.name] = new FormControl('', validators)
          }
          break
        case "list":
          if (key.meta.fill_default) {
            group[key.name] = new FormControl(key.meta.default, validators)

          } else {
            group[key.name] = new FormControl([], validators)
          }
          break
        case "multi":
          group[key.name] = this.formBuilder.array([this.loadFormGroup(key.meta.child)])
          break
        case "dict":
          group[key.name] = this.loadFormGroup(key.meta.child)
          break
        case "combo":
          group[key.name] = new FormControl('', validators)
          group[key.meta.combo_name] = this.formBuilder.group([])
          break
        default:
          if (key.meta.fill_default) {
            group[key.name] = new FormControl(key.meta.default, validators)

          } else {
            group[key.name] = new FormControl('', validators)
          }
          break
      }

    }
    return this.formBuilder.group(group)
  }

  setStructure(resource, scope, data) {
    const items = []
    for (let item in data) {
      if (data[item].form_page) {
        this.pages.push(data[item].form_page)
      }
      if (item != "meta") {
        if (item != "_id") {
          if (data[item].display) {
            switch (scope) {
              case 'create':
                if (data[item].display["create"]) {
                  items[item] = data[item];
                  switch (data[item].input) {
                    case "multi":
                      data[item].child = this.setStructure(resource, scope, data[item].schema.schema)
                      break
                    case "dict":
                      data[item].child = this.setStructure(resource, scope, data[item].schema)
                      break

                  }

                }
                break;
              case 'read':
                if (data[item].display["read"]) {
                  items[item] = data[item];

                  switch (data[item].input) {
                    case "multi":
                      data[item].child = this.setStructure(resource, scope, data[item].schema.schema)
                      break
                    case "dict":
                      data[item].child = this.setStructure(resource, scope, data[item].schema)
                      break
                  }
                }
                break;
              case 'update':
                if (data[item].display["update"]) {
                  items[item] = data[item];
                  switch (data[item].input) {
                    case "multi":
                      data[item].child = this.setStructure(resource, scope, data[item].schema.schema)
                      break
                    case "dict":
                      data[item].child = this.setStructure(resource, scope, data[item].schema)
                      break
                  }
                }
                break;
              case 'delete':
                if (data[item].display["delete"]) {
                  items[item] = data[item];
                  switch (data[item].input) {
                    case "multi":
                      data[item].child = this.setStructure(resource, scope, data[item].schema.schema)
                      break
                    case "dict":
                      data[item].child = this.setStructure(resource, scope, data[item].schema)
                      break
                  }
                }
                break;
              case 'details':
                if (data[item].display["details"]) {
                  items[item] = data[item];

                  switch (data[item].input) {
                    case "multi":
                      data[item].child = this.setStructure(resource, scope, data[item].schema.schema)
                      break
                    case "dict":
                      data[item].child = this.setStructure(resource, scope, data[item].schema)
                      break
                  }
                }
                break;
            }
          } else {
            items[item] = data[item];
            switch (data[item].input) {
              case "multi":
                data[item].child = this.setStructure(resource, scope, data[item].schema.schema)
                break
              case "dict":
                data[item].child = this.setStructure(resource, scope, data[item].schema)
                break

            }
          }
        }
      }
    }
    const form = []
    for (let item in items) {
      form.push({
        name: item,
        meta: items[item]
      })
    }

    return form;
  }

  loadForm(resource, scope) {
    let data = localStorage.getItem(`form-${resource}-${scope}`)
    if (!data) {
      this.httpClient.get(`api/form/${resource}`).pipe().subscribe(x => {
        let form = this.setStructure(resource, scope, x)
        localStorage.setItem(`form-${resource}-${scope}`, JSON.stringify(form))
        localStorage.setItem(`form-${resource}-meta`, JSON.stringify(x['meta']))
        return form
      })
    } else {
      return JSON.parse(localStorage.getItem(`form-${resource}-${scope}`))
    }
  }

  loadMeta(resource) {
    let data = localStorage.getItem(`form-${resource}-meta`)
    if (!data) {
      this.loadForm(resource, 'create')
    } else {
      return JSON.parse(localStorage.getItem(`form-${resource}-meta`))

    }
  }

  openRead(resource, component, detailsRoute?, routeParam?) {
    const scope = "read"
    let form = this.loadForm(resource, scope)
    const dialogConfig = new MatDialogConfig()
    dialogConfig.hasBackdrop = false
    dialogConfig.closeOnNavigation = false
    dialogConfig.data = {
      resource: resource,
      form: form,
      detailsRoute: detailsRoute,
      routeParam: routeParam
    }
    return this.dialog.open(component, dialogConfig)
  }

  openCreate(resource, component) {
    const scope = "create"
    let form = this.loadForm(resource, scope)
    const dialogConfig = new MatDialogConfig()
    dialogConfig.hasBackdrop = false
    dialogConfig.closeOnNavigation = false
    dialogConfig.width = '60vw'
    dialogConfig.data = {
      resource: resource,
      form: form,
    }
    return this.dialog.open(component, dialogConfig)
  }

  openUpdate(resource, item, component) {

    const scope = "update"
    let form = this.loadForm(resource, scope)
    const dialogConfig = new MatDialogConfig()
    dialogConfig.hasBackdrop = false
    dialogConfig.closeOnNavigation = false
    dialogConfig.data = {
      item: item,
      resource: resource,
      form: form,
    }
    return this.dialog.open(component, dialogConfig)
  }

  openDelete(resource, item, component) {
    const scope = "read"
    let form = this.loadForm(resource, scope)
    const dialogConfig = new MatDialogConfig()
    dialogConfig.hasBackdrop = false
    dialogConfig.closeOnNavigation = false
    dialogConfig.data = {
      item: item,
      resource: resource,
      form: form,
    }
    return this.dialog.open(component, dialogConfig)
  }

  openDetails(resource, item, component) {
    const scope = "read"
    let form = this.loadForm(resource, scope)
    const dialogConfig = new MatDialogConfig()
    dialogConfig.hasBackdrop = false
    dialogConfig.closeOnNavigation = false
    dialogConfig.data = {
      item: item,
      resource: resource,
      form: form,
    }
    return this.dialog.open(component, dialogConfig)
  }

  openPreview(resource, formGroup, title, item, component) {
    const scope = "create"
    let form = this.loadForm(resource, scope)
    const dialogConfig = new MatDialogConfig()
    dialogConfig.hasBackdrop = false
    dialogConfig.closeOnNavigation = false
    dialogConfig.data = {
      item: item,
      formGroup: formGroup,
      resource: resource,
      form: form,
      title: title
    }
    return this.dialog.open(component, dialogConfig)
  }
}

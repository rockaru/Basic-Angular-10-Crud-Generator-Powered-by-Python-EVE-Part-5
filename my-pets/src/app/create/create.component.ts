import { Component, OnInit, Input } from '@angular/core';
import { FormService } from '../form.service'
import { FormGroup, FormArray } from '@angular/forms';
import { DataService } from '../data.service'
import { PreviewDialogComponent } from './../preview/preview-dialog.component'

@Component({
  selector: 'mea-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],

})
export class CreateComponent implements OnInit {
  @Input() resource: string
  form: any = []
  meaFg: FormGroup = new FormGroup({})
  scope = 'create'
  page = 1
  meta: any
  dialog = false
  showTitles = true
  constructor(
    private dataService: DataService,
    private formService: FormService,
  ) {}

  ngOnInit() {

    this.form = this.formService.loadForm(this.resource, this.scope)
    this.meta = this.formService.loadMeta(this.resource)
    this.meaFg = this.formService.loadFormGroup(this.form)
    this.init(this.form)

  }

  init(form) {


    for (let key of form) {
      if (key.meta.input == "multi") {
        this.init(key.meta.child)
      } else if (key.meta.input == "dict") {
        this.init(key.meta.child)
      } else {
        key.meta.options = []
        key.meta.selected = []
      }
    }
  }

  

  next() {
    if (this.page < this.meta.pages) {
      this.page++
    }
  }

  back() {
    if (this.page > 1) {
      this.page--
    }
  }

  goToPage(page) {
    this.page = page

  }

  preSave() {
    switch (this.meta.save_type) {
      case 'intercept':
        break
      case 'preview':
        break
      case 'signature':
        const settings = {}
        for (let key of this.form) {
          
          settings[key.name] = this.meaFg.get(key.name).value
        }
        console.log(settings)

        this.formService.openPreview(this.resource, this.meaFg,this.meta.title, settings, PreviewDialogComponent).afterClosed().subscribe(data => {
          this.meaFg=data
          this.save()
        })

        break
      case 'save':
        this.save()
        break
    }
  }

  save() {
    const formData = new FormData()
    const settings = {}
    console.log(this.meaFg)
    for (let key of this.form) {
      
      settings[key.name] = this.meaFg.get(key.name).value

    }
    this.dataService.setData(this.resource, settings)

    for (let key of this.form) {
      if (this.meaFg.get(key.name).touched) {

        formData.append(key.name, this.meaFg.get(key.name).value)
        if (key.meta.input == 'selectmulti') {
          formData.delete(key.name)
        }

      }
    }

    this.dataService.add(this.resource, settings).subscribe(data => {
      localStorage.removeItem(`data-${this.resource}`)
    })
  }

}

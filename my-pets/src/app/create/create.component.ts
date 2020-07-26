import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'

import { FormService } from '../form.service'
import { FormGroup } from '@angular/forms';
import { DataService } from '../data.service'

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],

})
export class CreateComponent implements OnInit {

  test = [{ "name": "unu", "_id": 1 }, { "name": "doi", "_id": 2 }];
  testD = []
  resource: string
  form: any = []
  options: any = []
  selected: any = {}
  myFormGroup: FormGroup = new FormGroup({})
  selectedFiles: any
  selectedImages: any
  constructor(
    private dataService: DataService,
    private formService: FormService,
    private dialogRef: MatDialogRef<CreateComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.form = data.form
    for (let key of this.form) {
      if (key.value.input == 'selectmulti') {
        this.selected[key.name] = []
      }
    }
    this.options = data.options
    this.resource = data.resource
    this.myFormGroup = this.formService.loadFormGroup(this.form)

  }

  ngOnInit() {

  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  uploadImage(event, form) {
    const file = (event.target as HTMLInputElement).files[0];
    this.myFormGroup.get(form).patchValue(file)
    this.myFormGroup.get(form).updateValueAndValidity()
    this.selectedImages = event.target.files;
  }

  uploadFile(event, form) {
    const file = (event.target as HTMLInputElement).files[0];
    this.myFormGroup.get(form).patchValue(file)
    this.myFormGroup.get(form).updateValueAndValidity()
    this.selectedFiles = event.target.files;
  }

  save() {
    const formData = new FormData()
    for (let key of this.form) {
      formData.append(key.name, this.myFormGroup.get(key.name).value)
      if (key.value.input == 'selectmulti') {
        formData.delete(key.name)
      }
    }
    console.log("formdata", formData)
    this.dataService.add(this.resource, formData).subscribe(data => {
      console.log(data)
      for (let key of this.form) {
          if (key.value.input == 'selectmulti') {
            const selected = this.selectedItems(key.name, this.selected[key.name])
            console.log(selected)
            this.dataService.update(this.resource, data["_id"], selected).subscribe(data=>this.dialogRef.close())
          }
        }
      
    }
    )

    
  }

  selectedItems(field, obj) {

    let i = 0;
    let data ={}
    const items: any = []

    for (let item of obj) {
      items[i] = {
        "name": item._id
      }
      i++
    }
  data[field]= items

    return data

  }

}

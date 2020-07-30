import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormService } from '../form.service'
import { FormGroup } from '@angular/forms';
import { DataService } from '../data.service'
import { MatChipInputEvent } from '@angular/material/chips';
import { keyframes } from '@angular/animations';
import { Observable } from 'rxjs';
@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],

})
export class CreateComponent implements OnInit {

  resource: string
  form: any = []
  options: any = []
  selected: any = {}
  list: any = []
  items: any = []
  myFormGroup: FormGroup = new FormGroup({})
  selectedFiles: any
  selectedImages: any
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  removable = true;
  constructor(
    private dataService: DataService,
    private formService: FormService,
    private dialogRef: MatDialogRef<CreateComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {

    this.form = data.form
    this.loadOptions()
    
    for (let key of this.form) {

      if (key.value.input == 'selectmulti') {
        this.selected[key.name] = []
      }
      if (key.value.input == 'list') {
        this.selected[key.name] = []
      }
    }
    this.resource = data.resource
    this.myFormGroup = this.formService.loadFormGroup(this.form)

  }

  ngOnInit() {
    
  }

  async loadOptions() {
    for (let key of this.form) {
      if (key.value.input == 'selectmulti') {
        await this.dataService.getAll(key.value.schema.data_relation.resource).subscribe(data => {
          this.options[key.name] = data["_items"]
        })
      }
      if (key.value.input == 'select') {
        console.log(key.value)

        await this.dataService.getAll(key.value.data_relation.resource).subscribe(data => {
          this.options[key.name] = data["_items"]
          
        })
      }
    }
  }

  test(event){
    console.log(event)
  }

  add(form, event: MatChipInputEvent) {
    const input = event.input;
    const element = event.value;
    // Add our fruit
    if ((element || '').trim()) {
      this.selected[form.name].push(element)
      this.myFormGroup.get(form.name).patchValue(this.selected[form.name])
      this.myFormGroup.get(form.name).updateValueAndValidity()
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }


  }

  remove(form, value) {
    const index = this.form.indexOf(value);
    this.options[form.name].splice(index, 1)
    this.myFormGroup.get(form.name).patchValue(this.options[form.name])
    this.myFormGroup.get(form.name).updateValueAndValidity()
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
    console.log(this.myFormGroup)

    for (let key of this.form) {

      if (key.value.input == 'date' || key.value.input == 'datetime') {
        this.myFormGroup.get(key.name).setValue(new Date(this.myFormGroup.get(key.name).value).toUTCString())
      }

    }


    for (let key of this.form) {
      console.log(this.myFormGroup.get(key.name).value)
      formData.append(key.name, this.myFormGroup.get(key.name).value)
      if (key.value.input == 'selectmulti') {
        formData.delete(key.name)
      }
      if (key.value.input == 'list') {
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
          this.dataService.update(this.resource, data["_id"], selected).subscribe(data => console.log(data))
        }
        if (key.value.input == 'list') {
          let x ={}
          x[key.name] = this.selected[key.name]
          console.log(x)

          this.dataService.update(this.resource, data["_id"], x).subscribe(data => console.log(data))
        }
      }
      this.dialogRef.close("close");
    }
    )


  }

  selectedItems(field, obj) {

    let i = 0;
    let data = {}
    const items: any = []
console.log(obj)
    for (let item of obj) {
      console.log(item)
      items[i] = item._id
      i++
    }
    data[field] = items

    return data

  }

}

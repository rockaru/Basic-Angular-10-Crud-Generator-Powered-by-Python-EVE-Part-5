import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormService } from '../form.service'
import { FormGroup, FormArray } from '@angular/forms';
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
  
  
  childForm:FormArray
  constructor(
    private dataService: DataService,
    private formService: FormService,
    private dialogRef: MatDialogRef<CreateComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {

    this.form = data.form
     this.myFormGroup = this.formService.loadFormGroup(this.form)
    
    this.init(this.form)
    this.resource = data.resource

  }

  
  

  ngOnInit() {
    
  }

  init(form){
    for(let key of form){
      if(key.value.input=="multi"){
        this.init(key.value.child)
      }else{
        key.value.options=[]
        key.value.selected=[]
      }
    }
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

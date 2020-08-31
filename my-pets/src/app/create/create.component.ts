import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormService } from '../form.service'
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { DataService } from '../data.service'
import { MatChipInputEvent } from '@angular/material/chips';
import { keyframes } from '@angular/animations';
import { Observable } from 'rxjs';
import { SpinnerService } from '../spinner.service';
@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],

})
export class CreateComponent implements OnInit {

  resource: string
  form: any = []
  myFormGroup: FormGroup = new FormGroup({})
  
  constructor(
    private dataService: DataService,
    private formService: FormService,
    private dialogRef: MatDialogRef<CreateComponent>,
    private spinnerService: SpinnerService,

    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.spinnerService.changeState(true)

    this.form = data.form
    this.myFormGroup = this.formService.loadFormGroup(this.form)

    this.init(this.form)
    this.resource = data.resource

  }




  ngOnInit() {

  }

  init(form) {
    for (let key of form) {
      if (key.value.input == "multi") {
        this.init(key.value.child)
      } else if (key.value.input == "dict") {
        this.init(key.value.child)
      } else {
        key.value.options = []
        key.value.selected = []
      }
    }
  }


  save() {
    const formData = new FormData()

    for (let key of this.form) {

      if (key.value.input == 'date' || key.value.input == 'datetime') {
        this.myFormGroup.get(key.name).setValue(new Date(this.myFormGroup.get(key.name).value).toUTCString())
      }

    }


    for (let key of this.form) {
      if (this.myFormGroup.get(key.name).touched) {


        formData.append(key.name, this.myFormGroup.get(key.name).value)
        if (key.value.input == 'selectmulti') {
          formData.delete(key.name)
        }
        if (key.value.input == 'list') {
          formData.delete(key.name)
        }
        if (key.value.input == 'multi') {
          
          this.cleanObject(this.myFormGroup.get(key.name), key)
         
          formData.delete(key.name)
        }

      }
    }


    this.dataService.add(this.resource, formData).subscribe(data => {
      console.log(data)
      for (let key of this.form) {
        if (key.value.input == 'selectmulti') {
          if (this.myFormGroup.get(key.name).touched) {
          this.saveListType(data["_id"], key)
          }
        }
        if (key.value.input == 'list') {
          if (this.myFormGroup.get(key.name).touched) {
          this.saveListType(data["_id"], key)
          }
        }
        if (key.value.input == 'multi') {
          if (this.myFormGroup.get(key.name).touched) {
          this.saveListType(data["_id"], key)
          }
        }
      }
      localStorage.removeItem(`data-${this.resource}`)
      this.dialogRef.close("close");
    })
  }

  cleanObject(obj, key) {
    let data = obj as FormArray
    for (let i of data.controls) {
      
      for (let item of key.value.child) {
        if (item.value.input == 'multi') {
          this.cleanObject(i.get(item.name), item)
          if(Object.keys(i.get(item.name).value[0]).length === 0){
            delete i.value[item.name]
          }
        } else {
          if (i.get(item.name).untouched) {
            delete i.value[item.name]
          }
        }
      }
    }
  }

  saveListType(id, key) {
    let x = {}
    x[key.name] = this.myFormGroup.get(key.name).value
    console.log("se salveaza",x)
    this.dataService.update(this.resource, id, x).subscribe(data => console.log(data))
  }


}

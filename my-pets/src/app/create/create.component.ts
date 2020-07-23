import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'

import { FormService } from '../form.service'
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  
})
export class CreateComponent implements OnInit {

  resource:string
  form:any=[]
  options:any=[]
  myFormGroup: FormGroup = new FormGroup({})

  constructor(
    private formService: FormService,
    private dialogRef: MatDialogRef<CreateComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.form =data.form
    this.options=data.options
    this.resource=data.resource
    this.myFormGroup = this.formService.loadFormGroup(this.form)

   }

  ngOnInit() {
    
  }

  uploadFile(event,form) {
    const file = (event.target as HTMLInputElement).files[0];
    this.myFormGroup.get(form).patchValue(file)
    this.myFormGroup.get(form).updateValueAndValidity()
  }

  save(){
    const formData = new FormData()
    for(let key of this.form){
      formData.append(key.name,this.myFormGroup.get(key.name).value)
    }
    this.dialogRef.close(formData);
  }
  

}

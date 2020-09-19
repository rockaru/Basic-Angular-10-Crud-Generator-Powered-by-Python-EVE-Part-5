import { Component, Inject } from '@angular/core';
import {CreateComponent} from './create.component'
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../data.service'
import { FormService } from '../form.service'

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateDialogComponent extends CreateComponent{
  

  constructor(
    private dataS: DataService,
    private formS: FormService,
    @Inject(MAT_DIALOG_DATA) data
  ){
    super(dataS,formS)
   this.resource = data.resource
   this.dialog = true
  }

}

import { Component, OnInit, Input, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { DataService } from '../../data.service'
import { FormService } from '../../form.service'

@Component({
  selector: 'mea-input-multi',
  templateUrl: './mea-input-multi.component.html',
  styleUrls: ['./mea-input-multi.component.scss']
})
export class MeaInputMultiComponent implements OnInit {

  @Input('form-group') myFormGroup: FormGroup
  @Input() key
  @Input() selected
  @Input() parent
  @Input() index
  controls:any

  childForm:FormArray
  
  constructor(private dataService: DataService,
    private formService: FormService,) { 

    }

  ngOnInit(): void {
    
  }

  async addChildForm(fg,key){
    
    console.log(fg)
    console.log(key.name)
    this.childForm = fg.get(key.name) as FormArray;
    let i = this.childForm.length
    console.log(i)
    console.log(key.value.child)
    this.childForm.push(this.formService.loadFormGroup(key.value.child));
    
  }

}

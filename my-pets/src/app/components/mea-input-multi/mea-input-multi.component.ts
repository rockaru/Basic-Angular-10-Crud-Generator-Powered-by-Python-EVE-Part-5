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
  @Input() showPre =true
  @Input() showAfter = true
  @Input() showLabel =true
  @Input() showHint = true
  @Input() showIcon = true
  @Input('form-group') myFormGroup: FormGroup
  @Input() key
  @Input() selected
  @Input() parent
  @Input() index
  bgColor='antiquewhite'
  controls:any

  childForm:FormArray
  
  constructor(private dataService: DataService,
    private formService: FormService,) { 

    }

  ngOnInit(): void {
    if(this.key.meta.background_color){
      this.bgColor=this.key.meta.background_color
    }
  }

  checkValid(){
    let x =''
    for(let control in this.myFormGroup.get(this.key.name)['controls']){    
 console.log("control",control)     
      
      for(let key of this.key.meta.child){
console.log(key)
       if (x==''){
         x = `this.myFormGroup.get('${this.parent}')["controls"][${control}].get('${key.name}').status=="VALID"`
       }else{
        x = x + ` && this.myFormGroup.get('${this.parent}')["controls"][${control}].get('${key.name}').status=="VALID"`
       }
      }
    if(eval(x)){
      console.log(this.myFormGroup.get(this.parent).status)
    }
  }
}

  async addChildForm(fg,key){
    
    console.log(fg)
    console.log(key.name)
    this.childForm = fg.get(key.name) as FormArray;
    let i = this.childForm.length
    console.log(i)
    console.log(key.meta.child)
    this.childForm.push(this.formService.loadFormGroup(key.meta.child));
    
  }

  removeChildForm(fg,key,i){
    this.childForm = fg.get(key.name) as FormArray;
    this.childForm.removeAt(i)
  }

}

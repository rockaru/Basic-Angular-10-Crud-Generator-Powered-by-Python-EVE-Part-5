import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { ENTER, COMMA } from '@angular/cdk/keycodes';

@Component({
  selector: 'mea-input-list',
  templateUrl: './mea-input-list.component.html',
  styleUrls: ['./mea-input-list.component.scss']
})
export class MeaInputListComponent implements OnInit {

  @Input('form-group') meaFg: FormGroup
  @Input() key
  @Input() parent

  @Input() showPre =true
@Input() showAfter = true
@Input() showLabel =true
@Input() showHint = true
@Input() showIcon = true
  

  removable = true;
  addOnBlur = true
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  validators:any
  
  constructor() { 
  }

  ngOnInit(): void {
    if(!this.key.meta.selected[this.parent+this.key.name]){
      if(this.meaFg.get(this.key.name).value){
        this.key.meta.selected[this.parent+this.key.name]=this.meaFg.get(this.key.name).value

      }else{
    this.key.meta.selected[this.parent+this.key.name]=[]
    }
  }
    if(this.key.meta.required){
    this.meaFg.get(this.key.name).setErrors({required:true})
    }
    console.log(this.meaFg.get(this.key.name).status)
    this.meaFg.get(this.key.name).valueChanges.subscribe(data=>{
      this.checkValid()
    console.log(this.meaFg.get(this.key.name).status)

    })
  }

  checkValid(){
    console.log(this.meaFg.get(this.key.name).value)
    if(this.meaFg.get(this.key.name).value.length >= 1){
    this.meaFg.get(this.key.name).clearValidators()
    }else{
      
      if(this.key.meta.required){
        this.meaFg.get(this.key.name).setErrors({required:true})
      }
    
    }
  }

  hasErrors(){
    return (this.meaFg.get(this.key.name).invalid && (this.meaFg.get(this.key.name).dirty || this.meaFg.get(this.key.name).touched))
  }

  isRequired(){
    return (this.meaFg.get(this.key.name).errors.required)
  }

  isMinLength(){
    return (this.meaFg.get(this.key.name).errors.minlength)
  }
  isMaxLength(){
    return (this.meaFg.get(this.key.name).errors.maxlength)
  }

  add(form, event: MatChipInputEvent) {
    const input = event.input;
    const element = event.value;
    // Add our fruit
    if ((element || '').trim()) {
      this.key.meta.selected[this.parent+this.key.name].push(element)
      this.meaFg.get(form.name).patchValue(this.key.meta.selected[this.parent+this.key.name])
      this.meaFg.get(form.name).updateValueAndValidity()
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }


  }

  remove(key, value) {
    const index = key.meta.selected[this.parent+this.key.name].indexOf(value);
    this.key.meta.selected[this.parent+this.key.name].splice(index, 1)
    this.meaFg.get(key.name).patchValue(this.key.meta.selected[this.parent+this.key.name])
    this.meaFg.get(key.name).updateValueAndValidity()
  }
}

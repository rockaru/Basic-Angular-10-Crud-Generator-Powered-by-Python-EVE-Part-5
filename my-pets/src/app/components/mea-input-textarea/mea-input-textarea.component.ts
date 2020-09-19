import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'mea-input-textarea',
  templateUrl: './mea-input-textarea.component.html',
  styleUrls: ['./mea-input-textarea.component.scss']
})
export class MeaInputTextareaComponent implements OnInit {
  @Input() showPre =true
  @Input() showAfter = true
  @Input() showLabel =true
  @Input() showHint = true
  @Input() showIcon = true
  
  constructor() { }
  
  @Input('form-group') myFormGroup: FormGroup
  @Input() key:any

  ngOnInit(): void {
  }
  hasErrors(){
    return (this.myFormGroup.get(this.key.name).invalid && (this.myFormGroup.get(this.key.name).dirty || this.myFormGroup.get(this.key.name).touched))
  }

  isRequired(){
    return (this.myFormGroup.get(this.key.name).errors.required)
  }

  isMinLength(){
    return (this.myFormGroup.get(this.key.name).errors.minlength)
  }
}

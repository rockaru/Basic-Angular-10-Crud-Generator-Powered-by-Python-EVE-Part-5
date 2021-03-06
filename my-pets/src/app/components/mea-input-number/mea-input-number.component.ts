import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'mea-input-number',
  templateUrl: './mea-input-number.component.html',
  styleUrls: ['./mea-input-number.component.scss']
})
export class MeaInputNumberComponent implements OnInit {

  @Input('form-group') meaFg: FormGroup
  @Input() key:any
 
  @Input() showPre =true
  @Input() showAfter = true
  @Input() showLabel =true
  @Input() showHint = true
  @Input() showIcon = true
  constructor() { }
 
  ngOnInit(): void {
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

}

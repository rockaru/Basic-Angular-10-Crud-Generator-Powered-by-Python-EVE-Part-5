import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'mea-input-image',
  templateUrl: './mea-input-image.component.html',
  styleUrls: ['./mea-input-image.component.scss']
})
export class MeaInputImageComponent implements OnInit {

  @Input('form-group') meaFg: FormGroup
  @Input() key:any
 
  @Input() showPre =true
  @Input() showAfter = true
  @Input() showLabel =true
  @Input() showHint = true
  @Input() showIcon = true
  selectedFiles: any

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

  uploadFile(event, form) {
    const file = (event.target as HTMLInputElement).files[0];
    this.meaFg.get(form).patchValue(file)
    this.meaFg.get(form).updateValueAndValidity()
    this.selectedFiles = event.target.files;
  }
}

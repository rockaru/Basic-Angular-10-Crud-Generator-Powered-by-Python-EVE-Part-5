import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'mea-input-textarea',
  templateUrl: './mea-input-textarea.component.html',
  styleUrls: ['./mea-input-textarea.component.scss']
})
export class MeaInputTextareaComponent implements OnInit {

  constructor() { }
  
  @Input('form-group') myFormGroup: FormGroup
  @Input() key:any

  ngOnInit(): void {
  }

}

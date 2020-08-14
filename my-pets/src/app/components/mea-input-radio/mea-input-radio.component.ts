import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'mea-input-radio',
  templateUrl: './mea-input-radio.component.html',
  styleUrls: ['./mea-input-radio.component.scss']
})
export class MeaInputRadioComponent implements OnInit {
  @Input('form-group') myFormGroup: FormGroup
  @Input() key:any
  @Input() options:any
  constructor() { 
    
  }
  
  ngOnInit(): void {
  }

}

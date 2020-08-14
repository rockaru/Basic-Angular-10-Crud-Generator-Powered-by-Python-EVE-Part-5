import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'mea-input-number',
  templateUrl: './mea-input-number.component.html',
  styleUrls: ['./mea-input-number.component.scss']
})
export class MeaInputNumberComponent implements OnInit {

  constructor() { }

  
  @Input('form-group') myFormGroup: FormGroup
  @Input() key:any

  ngOnInit(): void {
  }

}

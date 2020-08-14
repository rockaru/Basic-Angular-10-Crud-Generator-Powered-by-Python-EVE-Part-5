import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'mea-input-checkbox',
  templateUrl: './mea-input-checkbox.component.html',
  styleUrls: ['./mea-input-checkbox.component.scss']
})
export class MeaInputCheckboxComponent implements OnInit {

  constructor() { }
  @Input('form-group') myFormGroup: FormGroup
  @Input() key:any
  ngOnInit(): void {
  }

}

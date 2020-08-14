import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'mea-input-date',
  templateUrl: './mea-input-date.component.html',
  styleUrls: ['./mea-input-date.component.scss']
})
export class MeaInputDateComponent implements OnInit {

  constructor() { }
  @Input('form-group') myFormGroup: FormGroup
  @Input() key:any
  ngOnInit(): void {
  }

}

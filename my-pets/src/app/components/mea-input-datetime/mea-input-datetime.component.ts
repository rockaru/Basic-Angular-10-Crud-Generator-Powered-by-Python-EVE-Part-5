import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'mea-input-datetime',
  templateUrl: './mea-input-datetime.component.html',
  styleUrls: ['./mea-input-datetime.component.scss']
})
export class MeaInputDatetimeComponent implements OnInit {

  constructor() { }
  @Input('form-group') myFormGroup: FormGroup
  @Input() key:any
  ngOnInit(): void {
  }

}

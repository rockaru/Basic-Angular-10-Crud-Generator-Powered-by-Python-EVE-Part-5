import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'mea-input-password',
  templateUrl: './mea-input-password.component.html',
  styleUrls: ['./mea-input-password.component.scss']
})
export class MeaInputPasswordComponent implements OnInit {

  constructor() { }
  @Input('form-group') myFormGroup: FormGroup
  @Input() key:any
  hide:boolean=true
  ngOnInit(): void {
  }

}

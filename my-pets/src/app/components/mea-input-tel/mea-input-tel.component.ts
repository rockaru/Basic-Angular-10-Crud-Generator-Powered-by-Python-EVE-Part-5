import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'mea-input-tel',
  templateUrl: './mea-input-tel.component.html',
  styleUrls: ['./mea-input-tel.component.scss']
})
export class MeaInputTelComponent implements OnInit {

  constructor() { }
  @Input('form-group') myFormGroup: FormGroup
  @Input() key:any
  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'mea-input-select',
  templateUrl: './mea-input-select.component.html',
  styleUrls: ['./mea-input-select.component.scss']
})
export class MeaInputSelectComponent implements OnInit {

  constructor() { }
  @Input('form-group') myFormGroup: FormGroup
  @Input() key:any
  @Input() options:any
  ngOnInit(): void {
  }

}

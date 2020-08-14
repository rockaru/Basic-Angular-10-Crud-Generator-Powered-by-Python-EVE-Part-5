import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'mea-input-text',
  templateUrl: './mea-input-text.component.html',
  styleUrls: ['./mea-input-text.component.scss']
})
export class MeaInputTextComponent implements OnInit {

  @Input('form-group') myFormGroup: FormGroup
  @Input('form-group-name') i: any
  @Input() key:any

  constructor() { }

  ngOnInit(): void {
  }

}

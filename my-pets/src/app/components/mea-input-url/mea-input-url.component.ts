import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'mea-input-url',
  templateUrl: './mea-input-url.component.html',
  styleUrls: ['./mea-input-url.component.scss']
})
export class MeaInputUrlComponent implements OnInit {

  constructor() { }
  @Input('form-group') myFormGroup: FormGroup
  @Input() key:any
  ngOnInit(): void {
  }

}

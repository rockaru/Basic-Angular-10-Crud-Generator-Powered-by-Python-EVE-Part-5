import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'mea-input-dict',
  templateUrl: './mea-input-dict.component.html',
  styleUrls: ['./mea-input-dict.component.scss']
})
export class MeaInputDictComponent implements OnInit {
  @Input('form-group') myFormGroup: FormGroup
  @Input() key
  @Input() parent
  constructor() { }

  ngOnInit(): void {
  }

 

}

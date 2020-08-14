import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'mea-input-email',
  templateUrl: './mea-input-email.component.html',
  styleUrls: ['./mea-input-email.component.scss']
})
export class MeaInputEmailComponent implements OnInit {

  constructor() { }
  @Input('form-group') myFormGroup: FormGroup
  @Input() key:any

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'mea-input-file',
  templateUrl: './mea-input-file.component.html',
  styleUrls: ['./mea-input-file.component.scss']
})
export class MeaInputFileComponent implements OnInit {

  constructor() { }
  @Input('form-group') myFormGroup: FormGroup
  @Input() key:any
  selectedFiles: any
  ngOnInit(): void {
  }
  uploadFile(event, form) {
    const file = (event.target as HTMLInputElement).files[0];
    this.myFormGroup.get(form).patchValue(file)
    this.myFormGroup.get(form).updateValueAndValidity()
    this.selectedFiles = event.target.files;
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'mea-input-image',
  templateUrl: './mea-input-image.component.html',
  styleUrls: ['./mea-input-image.component.scss']
})
export class MeaInputImageComponent implements OnInit {

  constructor() { }
  @Input('form-group') myFormGroup: FormGroup
  @Input() key:any
  selectedImages: any
  ngOnInit(): void {
  }
  uploadImage(event, form) {
    const file = (event.target as HTMLInputElement).files[0];
    this.myFormGroup.get(form).patchValue(file)
    this.myFormGroup.get(form).updateValueAndValidity()
    this.selectedImages = event.target.files;
  }

}

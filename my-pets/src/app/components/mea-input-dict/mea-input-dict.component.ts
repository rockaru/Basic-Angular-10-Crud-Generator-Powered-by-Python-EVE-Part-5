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
  @Input() selected
  @Input() options
  constructor() { }

  ngOnInit(): void {
  }

  add(form, event: MatChipInputEvent) {
    const input = event.input;
    const element = event.value;
    // Add our fruit
    if ((element || '').trim()) {
      this.key.value.selected.push(element)
      this.myFormGroup.get(form.name).patchValue(this.key.value.selected)
      this.myFormGroup.get(form.name).updateValueAndValidity()
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }


  }

  remove(key, value) {
    const index = key.indexOf(value);
    this.key.value.selected.splice(index, 1)
    this.myFormGroup.get(key.name).patchValue(this.key.value.selected)
    this.myFormGroup.get(key.name).updateValueAndValidity()
  }

}

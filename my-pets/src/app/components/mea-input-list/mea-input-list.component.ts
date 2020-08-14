import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { ENTER, COMMA } from '@angular/cdk/keycodes';

@Component({
  selector: 'mea-input-list',
  templateUrl: './mea-input-list.component.html',
  styleUrls: ['./mea-input-list.component.scss']
})
export class MeaInputListComponent implements OnInit {

  @Input('form-group') myFormGroup: FormGroup
  @Input() key
  @Input() selected
  removable = true;
  addOnBlur = true
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor() { }

  ngOnInit(): void {
  }

  add(form, event: MatChipInputEvent) {
    const input = event.input;
    const element = event.value;
    // Add our fruit
    if ((element || '').trim()) {
      this.selected.push(element)
      this.myFormGroup.get(form.name).patchValue(this.selected[form.name])
      this.myFormGroup.get(form.name).updateValueAndValidity()
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }


  }

  remove(form, value) {
    const index = form.indexOf(value);
    this.selected.splice(index, 1)
    this.myFormGroup.get(form.name).patchValue(this.selected[form.name])
    this.myFormGroup.get(form.name).updateValueAndValidity()
  }
}

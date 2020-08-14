import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'mea-input-dual-list',
  templateUrl: './mea-input-dual-list.component.html',
  styleUrls: ['./mea-input-dual-list.component.scss']
})
export class MeaInputDualListComponent implements OnInit {
  @Input('form-group') myFormGroup: FormGroup
  @Input() key
  @Input() selected
  @Input() options
  constructor() { }

  ngOnInit(): void {
  }

  test(event){
    console.log(event)
    this.myFormGroup.get(this.key.name).patchValue(this.selectedItems(this.selected))
    this.myFormGroup.get(this.key.name).updateValueAndValidity()
    
  }

  selectedItems(obj) {

    let i = 0;
    const items: any = []
    for (let item of obj) {
      console.log(item)
      items[i] = item._id
      i++
    }

    return items

  }

}

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { FormService } from 'src/app/form.service';
import { CreateComponent } from 'src/app/create/create.component';

@Component({
  selector: 'mea-input-dual-list',
  templateUrl: './mea-input-dual-list.component.html',
  styleUrls: ['./mea-input-dual-list.component.scss']
})
export class MeaInputDualListComponent implements OnInit {
  @Input('form-group') myFormGroup: FormGroup
  @Input() key
  @Input() index: number
  @Input() parent: number
  constructor(private dataService: DataService,
    private formService: FormService) {

  }

  ngOnInit(): void {
    this.loadOptions()

  }

  async loadOptions() {

    let items = JSON.parse(localStorage.getItem(`data-${this.key.value.schema.data_relation.resource}`))

    if (!items) {
      this.dataService.getAll(this.key.value.schema.data_relation.resource).subscribe(data => {
        localStorage.setItem(`data-${this.key.value.schema.data_relation.resource}`, JSON.stringify(data["_items"]))

        this.key.value.options[this.parent + this.key.name] = data["_items"]
      })
    } else {
      this.key.value.options[this.parent + this.key.name] = items
    }

    if (!this.key.value.selected[this.parent + this.key.name]) {


      this.key.value.selected[this.parent + this.key.name] = []
    } else {

      const c = this.key.value.options[this.parent + this.key.name]
      for (let i = 0; i < c.length; i++) {

        for (let j of this.key.value.selected[this.parent + this.key.name]) {
          if (typeof c[i] !== 'undefined') {
            if (c[i]._id == j._id) {
              this.key.value.options[this.parent + this.key.name].splice(i, 1)
              i--
            }
          }
        }
      }



    }

  }

  test(event) {
    console.log(event)
    this.myFormGroup.get(this.key.name).patchValue(this.selectedItems(this.key.value.selected[this.parent + this.key.name]))
    this.myFormGroup.get(this.key.name).updateValueAndValidity()
    this.myFormGroup.get(this.key.name).markAsTouched()

  }

  create(resource) {
    this.formService.openCreate(resource, CreateComponent).afterClosed().subscribe(data => {
      this.loadOptions()
    })

  }

  selectedItems(obj) {

    let i = 0;
    const items: any = []
    for (let item of obj) {
      items[i] = item._id
      i++
    }

    return items

  }

}

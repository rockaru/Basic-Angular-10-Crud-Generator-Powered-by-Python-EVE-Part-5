import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { FormService } from 'src/app/form.service';
import { CreateDialogComponent } from 'src/app/create/create-dialog.component';

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

    this.dataService.getAll(this.key.meta.schema.data_relation.resource).subscribe(data => {
        this.key.meta.options[this.parent + this.key.name] = data["_items"]
      })
    

    if (!this.key.meta.selected[this.parent + this.key.name]) {


      this.key.meta.selected[this.parent + this.key.name] = []
    } else {

      const c = this.key.meta.options[this.parent + this.key.name]
      for (let i = 0; i < c.length; i++) {

        for (let j of this.key.meta.selected[this.parent + this.key.name]) {
          if (typeof c[i] !== 'undefined') {
            if (c[i]._id == j._id) {
              this.key.meta.options[this.parent + this.key.name].splice(i, 1)
              i--
            }
          }
        }
      }



    }

  }

  test(event) {
    console.log(event)
    this.myFormGroup.get(this.key.name).patchValue(this.selectedItems(this.key.meta.selected[this.parent + this.key.name]))
    this.myFormGroup.get(this.key.name).updateValueAndValidity()
    this.myFormGroup.get(this.key.name).markAsTouched()

  }

  create(resource) {
    this.formService.openCreate(resource, CreateDialogComponent).afterClosed().subscribe(data => {
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

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { CreateComponent } from '../../create/create.component';
import { FormService } from 'src/app/form.service';

@Component({
  selector: 'mea-input-select',
  templateUrl: './mea-input-select.component.html',
  styleUrls: ['./mea-input-select.component.scss']
})
export class MeaInputSelectComponent implements OnInit {

  @Input('form-group') myFormGroup: FormGroup
  @Input() key: any
  @Input() index: any
  @Input() parent: number

  constructor(private dataService: DataService,
    private formService: FormService) { }

  ngOnInit(): void {
    this.loadOptions()
  }

  async loadOptions() {
    if (this.key.value.allowed) {
      this.key.value.options[this.parent + this.key.name] = this.key.value.allowed
    } else {
      let items = JSON.parse(localStorage.getItem(`data-${this.key.value.data_relation.resource}`))

      if (!items) {
        this.dataService.getAll(this.key.value.data_relation.resource).subscribe(data => {
          localStorage.setItem(`data-${this.key.value.data_relation.resource}`, JSON.stringify(data["_items"]))

          this.key.value.options[this.parent + this.key.name] = data["_items"]
        })
      } else {
        this.key.value.options[this.parent + this.key.name] = items
      }
    }
  }

  create(resource) {
    this.formService.openCreate(resource, CreateComponent).afterClosed().subscribe(data => {
      this.loadOptions()
    })

  }

}

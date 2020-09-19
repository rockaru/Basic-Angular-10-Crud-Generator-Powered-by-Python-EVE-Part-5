import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { CreateDialogComponent } from '../../create/create-dialog.component';
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
@Input()resources:any
  constructor(private dataService: DataService,
    private formService: FormService) { }

  ngOnInit(): void {
    this.loadOptions()
  }

  loadOptions() {
    if (this.key.meta.allowed) {
      this.key.meta.options[this.parent + this.key.name] = this.key.meta.allowed
    } else {
      
        this.dataService.getAll(this.key.meta.data_relation.resource).subscribe(data => {

          this.key.meta.options[this.parent + this.key.name] = data["_items"]
        })
      
    }
  }

  create(resource) {
    this.formService.openCreate(resource, CreateDialogComponent).afterClosed().subscribe(data => {
      this.loadOptions()
    })

  }

}

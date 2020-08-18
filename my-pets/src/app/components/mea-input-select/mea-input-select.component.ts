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
  @Input() key:any
  @Input() index:any

  constructor(private dataService:DataService,
    private formService:FormService) { }

  ngOnInit(): void {
    this.loadOptions()
  }

  async loadOptions(){
    await this.dataService.getAll(this.key.value.data_relation.resource).subscribe(data => {
      this.key.value.options[this.index] = data["_items"]
      
    })
  }

  create(resource) {
    this.formService.openCreate(resource, CreateComponent).afterClosed().subscribe(data=>{
      this.loadOptions()
    })

  }

}

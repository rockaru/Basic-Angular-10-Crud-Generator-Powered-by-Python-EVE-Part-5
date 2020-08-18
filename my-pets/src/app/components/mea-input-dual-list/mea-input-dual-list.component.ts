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
  @Input() index
  constructor(private dataService:DataService,
    private formService:FormService) { 
    
  }

  ngOnInit(): void {
    this.loadOptions()
      
  }

  async loadOptions(){
    
    
    await this.dataService.getAll(this.key.value.schema.data_relation.resource).subscribe(data => {
      this.key.value.options[this.index] = data["_items"]
      this.key.value.selected[this.index] = []
      
    })
  }

  test(event){
    console.log(event)
    this.myFormGroup.get(this.key.name).patchValue(this.selectedItems(this.key.value.selected))
    this.myFormGroup.get(this.key.name).updateValueAndValidity()
    
  }

  create(resource) {
    this.formService.openCreate(resource, CreateComponent).afterClosed().subscribe(data=>{
      this.loadOptions()
    })

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

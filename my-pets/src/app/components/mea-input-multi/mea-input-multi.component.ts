import { Component, OnInit, Input, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { DataService } from '../../data.service'
import { FormService } from '../../form.service'

@Component({
  selector: 'mea-input-multi',
  templateUrl: './mea-input-multi.component.html',
  styleUrls: ['./mea-input-multi.component.scss']
})
export class MeaInputMultiComponent implements OnInit {

  @Input('form-group') myFormGroup: FormGroup
  @Input() key
  @Input() selected
  @Input() options

  childForm:FormArray
  
  constructor(private dataService: DataService,
    private formService: FormService,) { }

  ngOnInit(): void {
  }

  async addChildForm(key){
    
    
    this.childForm = this.myFormGroup.get(key.name) as FormArray;
    let i = this.childForm.length
    console.log(i)
    console.log(key.value.options)
    this.childForm.push(this.formService.addChildForm(key.value.options));
    for(let item of key.value.options){
      if (item.value.input == 'selectmulti') {
        await this.dataService.getAll(item.value.schema.data_relation.resource).subscribe(data => {
          this.options[key.name+'-'+item.name+'-'+i] = data["_items"]
        this.selected[key.name+'-'+item.name+'-'+i] = []

        })

      }
      if(item.value.input == 'select'){
        await this.dataService.getAll(item.value.data_relation.resource).subscribe(data => {
          this.options[key.name+'-'+item.name+'-'+i] = data["_items"]
        this.selected[key.name+'-'+item.name+'-'+i] = []

        })


      }
    }
  }

}

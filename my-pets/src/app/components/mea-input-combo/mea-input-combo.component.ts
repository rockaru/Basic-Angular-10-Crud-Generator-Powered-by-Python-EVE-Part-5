import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { FormService } from 'src/app/form.service';
import { CreateComponent } from 'src/app/create/create.component';

@Component({
  selector: 'mea-input-combo',
  templateUrl: './mea-input-combo.component.html',
  styleUrls: ['./mea-input-combo.component.scss']
})
export class MeaInputComboComponent implements OnInit {

  @Input('form-group') myFormGroup: FormGroup
  @Input() key: any
  @Input() index: any
  @Input() parent: number
  childForm:any

  constructor(private dataService: DataService,
    private formService: FormService) { }

  ngOnInit(): void {
    this.loadOptions()
  }

  async loadOptions() {
    if (this.key.meta.colections) {
      this.key.meta.options[this.parent + this.key.name] = this.key.meta.colections
    } 
  }

  onSelected(event){
    const scope = "create"
    let testFg: FormGroup =new FormGroup({})
    this.childForm = this.formService.loadForm(event.value,scope)
    
    this.init(this.childForm)
    testFg=this.formService.loadFormGroup(this.childForm)
    this.myFormGroup.controls[this.key.meta.child] = (testFg)
  }

  init(form) {
    for (let key of form) {
      if (key.meta.input == "multi") {
        this.init(key.meta.child)
      } else if (key.meta.input == "dict") {
        this.init(key.meta.child)
      } else {
        key.meta.options = []
        key.meta.selected = []
      }
    }
  }

}
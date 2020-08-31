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
    console.log(this.myFormGroup)
    if (this.key.value.colections) {
      this.key.value.options[this.parent + this.key.name] = this.key.value.colections
    } 
  }

  onSelected(event){
    const scope = "create"
    let testFg: FormGroup =new FormGroup({})
    this.childForm = JSON.parse(localStorage.getItem(`form-${event.value}-${scope}`))
    
    if (!this.childForm) {
      this.formService.getForm(event.value).subscribe(form => {
        form = this.formService.setStructure(event.value, scope, form)
        this.childForm = form
      })
    } 
    this.init(this.childForm)
    console.log(this.childForm)
    testFg=this.formService.loadFormGroup(this.childForm)
    this.myFormGroup.controls[this.key.value.child] = (testFg)
    console.log("after",this.myFormGroup)
  }

  init(form) {
    for (let key of form) {
      if (key.value.input == "multi") {
        this.init(key.value.child)
      } else if (key.value.input == "dict") {
        this.init(key.value.child)
      } else {
        key.value.options = []
        key.value.selected = []
      }
    }
  }

}
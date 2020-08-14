import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService} from '../../form.service'
@Component({
  selector: 'mea-form',
  templateUrl: './mea-form.component.html',
  styleUrls: ['./mea-form.component.scss']
})
export class MeaFormComponent implements OnInit {
  myFormGroup: FormGroup = new FormGroup({})
  @Input() form:any
  @Input() selected:any
  @Input() options:any
  constructor(
    private formService:FormService
  ) { 

  }

  ngOnInit(): void {
    this.myFormGroup = this.formService.loadFormGroup(this.form)

  }

}

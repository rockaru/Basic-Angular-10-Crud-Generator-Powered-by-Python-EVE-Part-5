import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'
import { FormService } from '../form.service'
import { FormGroup } from '@angular/forms';
import { SocketService } from '../socket.service';
import { DataService } from '../data.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  info:string
  resource:string
  form:any=[]
  options: any = []
  selected: any = {}

  item:any=[]
  id:string
  myFormGroup: FormGroup = new FormGroup({})

  constructor(
    private socketService:SocketService,
    private dataService:DataService,
    private formService: FormService,
    private dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.resource = data.resource
    this.item = data.item
    this.form =data.form
    console.log(this.item)
    for (let key of this.form) {

      if (key.value.input == 'list') {
        this.selected[key.name] = this.item[key.name]
      }
    }
    this.loadOptions()
    this.myFormGroup = this.formService.loadFormGroup(this.form,this.item)
    socketService.joinSocket(this.item._id)
    

   }

  ngOnInit() {
    this.info=""
    this.socketService.webSocket.addEventListener("message",(ev)=>{
      this.info =`${this.item.name} este modificat in acest moment.`
      this.loadData()
    })
  }

  async loadOptions() {
    for (let key of this.form) {
      if (key.value.input == 'selectmulti') {
        await this.dataService.getAll(key.value.schema.data_relation.resource).subscribe(data => {
          this.selected[key.name] = this.item[key.name]
          this.options[key.name] = data["_items"].filter(x=>!this.item[key.name].includes(x))
        })
      }
      if (key.value.input == 'select') {
        console.log(key.value)

        await this.dataService.getAll(key.value.data_relation.resource).subscribe(data => {
          this.options[key.name] = data["_items"]
          
        })
      }
    }
  }

  loadData(){
    this.dataService.getOne(this.resource,this.item._id).subscribe(data=>{
      this.item=data
    })
  }

  loadSelected(obj){

  }

  uploadFile(event,form) {
    const file = (event.target as HTMLInputElement).files[0];
    this.myFormGroup.get(form).patchValue(file)
    this.myFormGroup.get(form).updateValueAndValidity()
  }

  save(){
    const formData = new FormData()
    for(let key of this.form){
      formData.append(key.name,this.myFormGroup.get(key.name).value)
    }
    this.dialogRef.close(formData);
  }

}

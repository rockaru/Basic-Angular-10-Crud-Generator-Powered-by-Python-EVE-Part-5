import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { FormService } from '../form.service'
import { FormGroup } from '@angular/forms';
import { SocketService } from '../socket.service';
import { DataService } from '../data.service';
import { MatChipInputEvent } from '@angular/material/chips';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  info: string
  resource: string
  form: any = []
  options: any = []
  selected: any = {}
  selectedFiles: any
  selectedImages: any
  item: any = []
  id: string
  myFormGroup: FormGroup = new FormGroup({})

  constructor(
    private socketService: SocketService,
    private dataService: DataService,
    private formService: FormService,
    private dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.resource = data.resource
    this.item = data.item
    this.form = data.form
    console.log(this.item)
    for (let key of this.form) {

      if (key.value.input == 'list') {
        this.selected[key.name] = this.item[key.name]
      }
    }
    this.loadOptions()
    this.myFormGroup = this.formService.loadFormGroup(this.form, this.item)
    socketService.joinSocket(this.item._id)


  }

  ngOnInit() {
    this.info = ""
    this.socketService.webSocket.addEventListener("message", (ev) => {
      this.info = `${this.item.name} este modificat in acest moment.`
      this.loadData()
    })
  }

  async loadOptions() {
    for (let key of this.form) {

      if (key.value.input == 'selectmulti') {


        await this.dataService.getAll(key.value.schema.data_relation.resource).subscribe(data => {
          this.selected[key.name] = this.item[key.name]
          console.log(this.selected[key.name])
          const c = data["_items"]
          console.log(c)
          this.options[key.name] = c
          for (let i = 0; i < c.length; i++) {
            
            for (let j of this.selected[key.name]) {
              if(typeof c[i] !== 'undefined'){
              if (c[i]._id == j._id) {
                this.options[key.name].splice(i, 1)
                i--
              }
            }
            }
          }
          console.log(this.options[key.name])
          //this.options[key.name] = c.filter(x => this.selected[key.name].includes(x))
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

  loadData() {
    this.dataService.getOne(this.resource, this.item._id).subscribe(data => {
      this.item = data
    })
  }

  add(form, event: MatChipInputEvent) {
    const input = event.input;
    const element = event.value;
    // Add our fruit
    if ((element || '').trim()) {
      this.selected[form.name].push(element)
      this.myFormGroup.get(form.name).patchValue(this.selected[form.name])
      this.myFormGroup.get(form.name).updateValueAndValidity()
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }


  }

  remove(form, value) {
    const index = this.form.indexOf(value);
    this.options[form.name].splice(index, 1)
    this.myFormGroup.get(form.name).patchValue(this.options[form.name])
    this.myFormGroup.get(form.name).updateValueAndValidity()
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  uploadImage(event, form) {
    const file = (event.target as HTMLInputElement).files[0];
    this.myFormGroup.get(form).patchValue(file)
    this.myFormGroup.get(form).updateValueAndValidity()
    this.selectedImages = event.target.files;
  }

  uploadFile(event, form) {
    const file = (event.target as HTMLInputElement).files[0];
    this.myFormGroup.get(form).patchValue(file)
    this.myFormGroup.get(form).updateValueAndValidity()
    this.selectedFiles = event.target.files;
  }

  save() {
    const formData = new FormData()
    console.log(this.myFormGroup)

    for (let key of this.form) {

      if (key.value.input == 'date' || key.value.input == 'datetime') {
        this.myFormGroup.get(key.name).setValue(new Date(this.myFormGroup.get(key.name).value).toUTCString())
      }

    }


    for (let key of this.form) {
      console.log(this.myFormGroup.get(key.name).value)
      if (this.myFormGroup.get(key.name).touched) {
        formData.append(key.name, this.myFormGroup.get(key.name).value)
      }
      if (key.value.input == 'selectmulti') {
        formData.delete(key.name)
      }
      if (key.value.input == 'list') {
        formData.delete(key.name)
      }
    }
    console.log("formdata", formData)
    this.dataService.update(this.resource, this.item._id, formData).subscribe(data => {
      console.log(data)
      for (let key of this.form) {
        if (key.value.input == 'selectmulti') {
          const selected = this.selectedItems(key.name, this.selected[key.name])
          console.log(selected)
          this.dataService.update(this.resource, data["_id"], selected).subscribe(data => console.log(data))
        }
        if (key.value.input == 'list') {
          let x = {}
          x[key.name] = this.selected[key.name]
          console.log(x)

          this.dataService.update(this.resource, data["_id"], x).subscribe(data => console.log(data))
        }
      }
      this.dialogRef.close("close");
    }
    )


  }

  selectedItems(field, obj) {

    let i = 0;
    let data = {}
    const items: any = []
    console.log(obj)
    for (let item of obj) {
      console.log(item)
      items[i] = item._id
      i++
    }
    data[field] = items

    return data

  }

}

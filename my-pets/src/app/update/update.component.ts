import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { FormService } from '../form.service'
import { FormGroup, FormArray } from '@angular/forms';
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
  item: any = []
  resource: string
  form: any = []
  myFormGroup: FormGroup = new FormGroup({})
  childForm: FormArray;

  constructor(
    private socketService: SocketService,
    private dataService: DataService,
    private formService: FormService,
    private dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.form = data.form
    this.item = data.item
console.log(this.item)
    this.myFormGroup = this.formService.loadFormGroup(this.form, this.item)

    this.init(this.form)
    this.resource = data.resource
    this.item = data.item
    socketService.joinSocket(this.item._id)
    this.loadInitialData(this.myFormGroup, this.form, this.item,"")

  }

  ngOnInit() {
    this.info = ""
    this.socketService.webSocket.addEventListener("message", (ev) => {
      this.info = `${this.item.name} este modificat in acest moment.`
      this.loadData()
    })
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

  loadInitialData(fg, form, item, parent?) {
    
    for (let key of form) {
      switch (key.value.input) {
        case 'multi':
          if (item[key.name]) {
            let i =1
            while (i<item[key.name].length) {
             
                this.addChildForm(fg, key,item,parent,i)
                i++

            } 
          
           
          }
          break
        case 'date':
          fg.get(key.name).setValue(this.formatDate(item[key.name]))
            fg.get(key.name).updateValueAndValidity
          console.log(this.formatDate(item[key.name]))
          break
          case 'datetime':
          fg.get(key.name).setValue(this.formatDateTime(item[key.name]))
            fg.get(key.name).updateValueAndValidity
          console.log(this.formatDateTime(item[key.name]))
          break
        case 'select':
          if (item[key.name]) {
           
            fg.get(key.name).setValue(item[key.name])
            fg.get(key.name).updateValueAndValidity
            
          }
          break
        case 'list':
          
            key.value.selected[parent + key.name] = item[key.name]

         

          break
        case 'selectmulti':
          
            key.value.selected[parent + key.name] = this.loadEmbeddedItems(item[key.name],key)
         

          break
        default:
          if (item[key.name]) {
            fg.get(key.name).setValue(item[key.name])
            fg.get(key.name).updateValueAndValidity
          }
          break
      }

    }
  }

  formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;
     

    return [year, month, day].join('-');
  }

  formatDateTime(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year =  d.getFullYear(),
hour = ''+ d.getHours(),
minutes =''+ d.getMinutes();
    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;
      if (hour.length < 2)
      hour = '0' + hour;
    if (minutes.length < 2)
      minutes = '0' + minutes;
    return `${year}-${month}-${day}T${hour}:${minutes}`
  }

  loadEmbeddedItems(items,key) {
    let em = []
    for (let item of items) {
      this.dataService.getOne(key.value.schema.data_relation.resource, item).subscribe(data => {
        em.push(data)
        
      })
    }
    return em
  }

  async addChildForm(fg, key,item,parent,i) {

    
    this.childForm = fg.get(key.name) as FormArray;
   
    if(i!=1){
    this.childForm.push(this.formService.loadFormGroup(key.value.child));
    }
    this.loadInitialData(this.childForm.controls[i-1],key.value.child,item[key.name][i-1],parent+key.name+(i-1))
  }

  loadData() {
    this.dataService.getOne(this.resource, this.item._id).subscribe(data => {
      this.item = data
    })
  }

  save() {
    const formData = new FormData()

    for (let key of this.form) {

      if (key.value.input == 'date' || key.value.input == 'datetime') {
        this.myFormGroup.get(key.name).setValue(new Date(this.myFormGroup.get(key.name).value).toUTCString())
      }

    }


    for (let key of this.form) {
      if (this.myFormGroup.get(key.name).touched) {


        formData.append(key.name, this.myFormGroup.get(key.name).value)
        if (key.value.input == 'selectmulti') {
          formData.delete(key.name)
        }
        if (key.value.input == 'list') {
          formData.delete(key.name)
        }
        if (key.value.input == 'multi') {

          this.cleanObject(this.myFormGroup.get(key.name), key)

          formData.delete(key.name)
        }
        console.log("formgroup:", key.name, this.myFormGroup.get(key.name).value)

      }
    }


    this.dataService.update(this.resource, this.item._id, formData).subscribe(data => {
      console.log(data)
      for (let key of this.form) {
        if (key.value.input == 'selectmulti') {
          if (this.myFormGroup.get(key.name).touched) {
            this.saveListType(data["_id"], key)
          }
        }
        if (key.value.input == 'list') {
          if (this.myFormGroup.get(key.name).touched) {
            this.saveListType(data["_id"], key)
          }
        }
        if (key.value.input == 'multi') {
          if (this.myFormGroup.get(key.name).touched) {
            this.saveListType(data["_id"], key)
          }
        }
      }
      this.dialogRef.close("close");
    }
    )


  }

  cleanObject(obj, key) {
    let data = obj as FormArray
    for (let i of data.controls) {
      console.log(i)

      for (let item of key.value.child) {
        if (item.value.input == 'multi') {
          this.cleanObject(i.get(item.name), item)
          console.log("test gol", i.get(item.name).value)
          if (Object.keys(i.get(item.name).value[0]).length === 0) {
            delete i.value[item.name]
          }
        } else {
          if (i.get(item.name).untouched) {
            delete i.value[item.name]
          }
        }
      }
    }
  }

  saveListType(id, key) {
    let x = {}
    x[key.name] = this.myFormGroup.get(key.name).value
    console.log("se salveaza", x)
    this.dataService.update(this.resource, id, x).subscribe(data => console.log(data))
  }

}

import { Component, OnInit, Inject, AfterViewInit } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { CreateComponent } from '../create/create.component'
import { UpdateComponent } from '../update/update.component'
import { DeleteComponent } from '../delete/delete.component'
import { DetailsComponent } from '../details/details.component'
import { FormService } from '../form.service'
import { DataService } from '../data.service'
import { SocketService } from '../socket.service'
import { SpinnerService } from '../spinner.service'
import { UrlResolver } from '@angular/compiler'
import { SafeUrl, DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements AfterViewInit, OnInit {
  resource: string
  form: any = []
  items: any = []

  constructor(
    private socketService: SocketService,
    private dataService: DataService,
    private formService: FormService,
    private spinnerService: SpinnerService,

    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.resource = data.resource
    this.form = data.form

    socketService.joinSocket(this.resource)

  }

  ngOnInit() {
    this.loadData()

    this.socketService.webSocket.addEventListener("message", (ev) => {
      this.loadData()
    })
  }

  ngAfterViewInit(){
    this.spinnerService.changeState(true)

  }

  async loadData() {
    
    let items = JSON.parse(localStorage.getItem(`data-${this.resource}`))

    if (!items) {

      this.dataService.getAll(this.resource).subscribe(data => {
        localStorage.setItem(`data-${this.resource}`, JSON.stringify(data["_items"]))

        this.items = data["_items"]

      })
    } else {
      this.items = items

    }
   
  }

  objectKeys(obj) {
    if (obj) {
      return obj.name
    }
  }

  

  create() {
    this.formService.openCreate(this.resource, CreateComponent)
  }

  details(item) {
    this.formService.openDetails(this.resource, item, DetailsComponent)
  }

  update(item) {
    this.formService.openUpdate(this.resource, item, UpdateComponent)

  }

  delete(item) {
    this.formService.openDelete(this.resource, item, DeleteComponent)
  }

}

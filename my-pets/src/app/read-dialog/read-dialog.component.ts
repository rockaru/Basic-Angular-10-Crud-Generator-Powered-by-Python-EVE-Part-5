import { Component, OnInit, Inject, AfterViewInit, Input } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { CreateComponent } from '../create/create.component'
import { UpdateComponent } from '../update/update.component'
import { DeleteComponent } from '../delete/delete.component'
import { DetailsComponent } from '../details/details.component'
import { FormService } from '../form.service'
import { DataService } from '../data.service'
import { SocketService } from '../socket.service'

@Component({
  selector: 'app-read-dialog',
  templateUrl: './../read/read.component.html',
  styleUrls: ['./read-dialog.component.scss']
})
export class ReadDialogComponent implements OnInit {

  resource: string
  form: any = []
  items: any = []
  panelOpenState=[]

  detailsRoute:any
  routeParam:any
  constructor(
    private socketService: SocketService,
    private dataService: DataService,
    private formService: FormService,

    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.resource = data.resource
    this.form = data.form
this.detailsRoute = data.detailsRoute
this.routeParam = data.routeParam
    socketService.joinSocket(this.resource)

  }

  ngOnInit() {
    console.log(this.form)
    this.loadData()

    this.socketService.webSocket.addEventListener("message", (ev) => {
      this.loadData()
    })
  }


  loadData() {
    
    this.dataService.getAll(this.resource).subscribe(data => {
      this.items = data["_items"]  


      })
    
   
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

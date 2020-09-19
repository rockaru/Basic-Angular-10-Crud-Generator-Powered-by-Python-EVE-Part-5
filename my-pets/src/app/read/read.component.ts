import { Component, OnInit, Inject, AfterViewInit, Input } from '@angular/core'
import { CreateComponent } from '../create/create.component'
import { UpdateComponent } from '../update/update.component'
import { DeleteComponent } from '../delete/delete.component'
import { DetailsComponent } from '../details/details.component'
import { FormService } from '../form.service'
import { DataService } from '../data.service'
import { SocketService } from '../socket.service'

@Component({
  selector: 'mea-list',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements AfterViewInit, OnInit {
  form: any = []
  items: any = []
  scope='read'
  panelOpenState=[]
  @Input('details-route') detailsRoute:any 
  @Input('route-param') routeParam:any
  @Input() resource:string
  constructor(
    private socketService: SocketService,
    private dataService: DataService,
    private formService: FormService,

  ) {
   

  }

  ngOnInit() {

    this.form = this.formService.loadForm(this.resource,this.scope)

    this.loadData()

    this.socketService.webSocket.addEventListener("message", (ev) => {
      this.loadData()
    })
  }

  ngAfterViewInit(){

  }

  loadData() {
    
    this.dataService.getAll(this.resource).subscribe(data => {
    this.socketService.joinSocket(this.resource)
      
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

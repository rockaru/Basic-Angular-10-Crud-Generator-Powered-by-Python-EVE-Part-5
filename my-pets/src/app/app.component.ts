import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { FormService } from './form.service'
import { SocketService } from './socket.service';
import { SpinnerService } from './spinner.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'my-pets';
  live: string
loading:boolean
  constructor(
    private socketService:SocketService,
    private formService: FormService,
    private spinnerService:SpinnerService
  ) {
    this.socketService.webSocket.addEventListener("open",()=>{
      this.socketService.openSocket()
    this.live="connected"

    })
    this.spinnerService.loading.subscribe(state=>{
      this.loading = state
    })
  }

  ngOnInit() {
    
    
   
    this.socketService.webSocket.addEventListener("close",(e)=>{
      if(window.confirm("Disconected, please refresh.")){
        window.location.reload()
      }else{
        this.live="disconected"

      }

    })

    this.socketService.webSocket.addEventListener("error",(e)=>{
      alert(`Server error, please refresh. ${e}`)
    this.live="disconected"
    this.socketService.openSocket()
    })

  }

  ngAfterViewInit(){
   
  }

  read(resource) {

    const x = this.formService.openRead(resource, ReadComponent)    
    
  }

  create(resource) {
    
    
    const x =this.formService.openCreate(resource, CreateComponent)
    
  }

}

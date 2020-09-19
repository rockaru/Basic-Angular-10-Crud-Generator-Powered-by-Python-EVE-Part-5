import { Component, OnInit } from '@angular/core';
import { SocketService } from './socket.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit {
  title="Fisa lucrari zilnice"

  live: string
  
  constructor(
    private socketService: SocketService,
   
  ) {
    this.socketService.webSocket.addEventListener("open", () => {
      this.socketService.openSocket()
      this.live = "connected"

    })
  }
    

  ngOnInit() {

    this.socketService.webSocket.addEventListener("close", (e) => {
      if (window.confirm("Disconected, please refresh.")) {
        window.location.reload()
      } else {
      localStorage.clear()

        this.live = "disconected"

      }

    })

    this.socketService.webSocket.addEventListener("error", (e) => {
      alert(`Server error, please refresh. ${e}`)
      this.live = "disconected"
      localStorage.clear()
      this.socketService.openSocket()
    })

    }
    
    

}

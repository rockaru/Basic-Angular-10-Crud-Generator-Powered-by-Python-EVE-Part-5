import { Component, OnInit } from '@angular/core';
import { ReadDialogComponent } from './../read-dialog/read-dialog.component';
import { CreateDialogComponent } from './../create/create-dialog.component';
import { FormService } from './../form.service'
import { SocketService } from './../socket.service';
import { SpinnerService } from './../spinner.service'
import { DataService } from './../data.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  title = 'my-pets';
  loading: boolean
  items: any
  constructor(
    private formService: FormService,
    private dataService: DataService,
    private spinnerService: SpinnerService
  ) {
    this.formService.init()
   this.items= this.formService.loadItems()
    
    this.spinnerService.loading.subscribe(state => {
      this.loading = state
    })
  }

  ngOnInit() {

    this.dataService.getData.subscribe(data => {
      
console.log(data)

    })
    

  }

  ngAfterViewInit() {

  }

  read(resource) {

    const x = this.formService.openRead(resource, ReadDialogComponent)

  }

  create(resource) {

    const x = this.formService.openCreate(resource, CreateDialogComponent)

  }

}

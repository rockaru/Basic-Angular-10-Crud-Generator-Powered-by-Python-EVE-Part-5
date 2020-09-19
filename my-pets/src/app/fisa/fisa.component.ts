import { Component, OnInit } from '@angular/core';
import { ReadDialogComponent } from './../read-dialog/read-dialog.component';
import { CreateComponent } from './../create/create.component';
import { FormService } from './../form.service'
import { SocketService } from './../socket.service';
import { SpinnerService } from './../spinner.service'
import { DataService } from './../data.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fisa',
  templateUrl: './fisa.component.html',
  styleUrls: ['./fisa.component.scss']
})
export class FisaComponent implements OnInit {
title="Fisa lucrari zilnice"
  constructor(
    private socketService: SocketService,
    private formService: FormService,
    private dataService: DataService,
    private router: Router) { }

  ngOnInit(): void {
    this.dataService.getData.subscribe(data => {
      
      console.log(data)
      if(data['fisa']){
        this.router.navigate(['fisa/1'])
      }
    })
  }

  read(resource) {

    const x = this.formService.openRead(resource, ReadDialogComponent,"fisa/","_id")

  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from '../data.service';
@Component({
  selector: 'app-view-fisa',
  templateUrl: './view-fisa.component.html',
  styleUrls: ['./view-fisa.component.scss']
})
export class ViewFisaComponent implements OnInit {

  item:{}
  id:any
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private dataService:DataService
  ) { }

  ngOnInit(){
    
    
    this.route.paramMap.subscribe(params => {
      console.log(params.get('resource'),params.get('id'))
      this.dataService.getOne(params.get('resource'),params.get('id')).subscribe(data=>{
      this.item=data
      
      console.log(this.item)
    })
  })
      
  }



}

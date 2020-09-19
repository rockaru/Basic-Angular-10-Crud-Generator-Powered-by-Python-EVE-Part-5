import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'mea-view-select',
  templateUrl: './mea-view-select.component.html',
  styleUrls: ['./mea-view-select.component.scss']
})
export class MeaViewSelectComponent implements OnInit {
  @Input() key:any
  @Input() item:any
  items=[]
  constructor(
    private dataService:DataService
  ) {
    
   }

  ngOnInit(){
   
    this.loadData()
    
  }

  loadData(){
    this.dataService.getAll(this.key.value.data_relation.resource).subscribe(data => {

      this.items = data["_items"]
    })
  }

  loadItem(item){
  

      for(let x of this.items){
        if(x._id == item){
         return x.name
        }
      }

  }
}

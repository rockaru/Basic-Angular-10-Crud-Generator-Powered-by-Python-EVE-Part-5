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
  constructor(
    private dataService:DataService
  ) { }

  ngOnInit(): void {
  }

  loadItem(item){
    
    let items = JSON.parse(localStorage.getItem(`data-${this.key.value.data_relation.resource}`))

      if (!items) {
        this.dataService.getAll(this.key.value.data_relation.resource).subscribe(data => {
          localStorage.setItem(`data-${this.key.value.data_relation.resource}`, JSON.stringify(data["_items"]))

          const items = data["_items"]
        })
      } 

      for(let x of items){
        if(x._id == item){
         return x.name
        }
      }

  }
}

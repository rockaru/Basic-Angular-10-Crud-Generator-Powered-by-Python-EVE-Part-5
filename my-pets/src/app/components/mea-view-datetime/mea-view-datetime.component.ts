import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mea-view-datetime',
  templateUrl: './mea-view-datetime.component.html',
  styleUrls: ['./mea-view-datetime.component.scss']
})
export class MeaViewDatetimeComponent implements OnInit {
  @Input() key:any
  @Input() item:any
  constructor() { }

  ngOnInit(): void {
  }

}

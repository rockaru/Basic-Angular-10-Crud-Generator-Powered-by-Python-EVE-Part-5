import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mea-view-date',
  templateUrl: './mea-view-date.component.html',
  styleUrls: ['./mea-view-date.component.scss']
})
export class MeaViewDateComponent implements OnInit {
  @Input() key:any
  @Input() item:any
  constructor() { }

  ngOnInit(): void {
  }

}

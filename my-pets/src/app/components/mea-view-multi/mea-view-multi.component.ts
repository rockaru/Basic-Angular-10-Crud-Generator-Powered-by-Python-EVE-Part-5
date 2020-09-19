import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mea-view-multi',
  templateUrl: './mea-view-multi.component.html',
  styleUrls: ['./mea-view-multi.component.scss']
})
export class MeaViewMultiComponent implements OnInit {
  @Input() title:any
  @Input() form:any
  @Input('item') items:any
  constructor() { }

  ngOnInit(): void {
  }

}
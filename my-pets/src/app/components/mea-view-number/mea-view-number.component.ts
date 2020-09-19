import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mea-view-number',
  templateUrl: './mea-view-number.component.html',
  styleUrls: ['./mea-view-number.component.scss']
})
export class MeaViewNumberComponent implements OnInit {
  @Input() key:any
  @Input() item:any
  @Input() showLabel=true
  constructor() { }

  ngOnInit(): void {
  }

}

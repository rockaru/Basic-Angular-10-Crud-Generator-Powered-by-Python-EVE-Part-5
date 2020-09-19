import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mea-after',
  templateUrl: './after.component.html',
  styleUrls: ['./after.component.scss']
})
export class AfterComponent implements OnInit {
  @Input() key:any
 
  @Input('show') showAfter =true
  constructor() { }

  ngOnInit(): void {
  }

}

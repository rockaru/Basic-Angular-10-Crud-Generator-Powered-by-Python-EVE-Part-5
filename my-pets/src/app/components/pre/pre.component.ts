import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mea-pre',
  templateUrl: './pre.component.html',
  styleUrls: ['./pre.component.scss']
})
export class PreComponent implements OnInit {
  @Input() key:any
 
  @Input('show') showPre =true
  constructor() { }

  ngOnInit(): void {
  }

}

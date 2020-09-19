import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mea-view-text',
  templateUrl: './mea-view-text.component.html',
  styleUrls: ['./mea-view-text.component.scss']
})
export class MeaViewTextComponent implements OnInit {

  @Input() key:any
  @Input() item:any
  @Input() showLabel=true
  constructor() { }

  ngOnInit(): void {}

}

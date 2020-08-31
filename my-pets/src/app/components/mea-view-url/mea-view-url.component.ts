import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mea-view-url',
  templateUrl: './mea-view-url.component.html',
  styleUrls: ['./mea-view-url.component.scss']
})
export class MeaViewUrlComponent implements OnInit {
  @Input() key:any
  @Input() item:any
  constructor() { }

  ngOnInit(): void {
  }

}

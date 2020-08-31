import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mea-view-tel',
  templateUrl: './mea-view-tel.component.html',
  styleUrls: ['./mea-view-tel.component.scss']
})
export class MeaViewTelComponent implements OnInit {
  @Input() key:any
  @Input() item:any
  constructor() { }

  ngOnInit(): void {
  }

}

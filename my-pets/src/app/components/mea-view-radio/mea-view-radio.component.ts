import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mea-view-radio',
  templateUrl: './mea-view-radio.component.html',
  styleUrls: ['./mea-view-radio.component.scss']
})
export class MeaViewRadioComponent implements OnInit {
  @Input() key:any
  @Input() item:any
  constructor() { }

  ngOnInit(): void {
  }

}

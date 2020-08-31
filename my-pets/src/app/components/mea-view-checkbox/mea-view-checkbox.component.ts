import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mea-view-checkbox',
  templateUrl: './mea-view-checkbox.component.html',
  styleUrls: ['./mea-view-checkbox.component.scss']
})
export class MeaViewCheckboxComponent implements OnInit {
  @Input() key:any
  @Input() item:any
  constructor() { }

  ngOnInit(): void {
  }

}

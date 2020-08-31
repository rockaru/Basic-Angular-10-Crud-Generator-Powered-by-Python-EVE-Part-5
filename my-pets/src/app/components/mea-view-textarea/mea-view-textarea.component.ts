import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mea-view-textarea',
  templateUrl: './mea-view-textarea.component.html',
  styleUrls: ['./mea-view-textarea.component.scss']
})
export class MeaViewTextareaComponent implements OnInit {
  @Input() key:any
  @Input() item:any
  constructor() { }

  ngOnInit(): void {
  }

}

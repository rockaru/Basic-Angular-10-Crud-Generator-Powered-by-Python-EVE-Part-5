import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mea-view-email',
  templateUrl: './mea-view-email.component.html',
  styleUrls: ['./mea-view-email.component.scss']
})
export class MeaViewEmailComponent implements OnInit {
  @Input() key:any
  @Input() item:any
  constructor() { }

  ngOnInit(): void {
  }

}

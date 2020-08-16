import { Component, OnInit, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserPageComponent implements OnInit {
  @HostBinding('class') hostClass = 'router-flex';

  constructor() { }

  ngOnInit() {
  }

}

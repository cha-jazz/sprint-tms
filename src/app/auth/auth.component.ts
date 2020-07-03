import { Component } from '@angular/core';

@Component({
  selector: 'ngx-auth',
  styleUrls: ['./auth.component.scss'],
  template: `
    <ngx-one-page-layout>
      <router-outlet></router-outlet>
    </ngx-one-page-layout>
  `,
})
export class AuthComponent {

  constructor() { }

  ngOnInit() {
  }

}

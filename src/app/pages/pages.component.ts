import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { MENU_ITEMS_EN, MENU_ITEMS_TH } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
  <ngx-one-column-layout>
    <router-outlet></router-outlet>
  </ngx-one-column-layout>
`,
  // template: `
  //   <ngx-one-column-layout>
  //     <nb-menu [items]="menu"></nb-menu>
  //     <router-outlet></router-outlet>
  //   </ngx-one-column-layout>
  // `,
})
export class PagesComponent implements OnInit {

  constructor(
    public translate: TranslateService,
  ) {

  }
  menu;

  ngOnInit() {
    if (this.translate.store.defaultLang === 'en') {
      this.menu = MENU_ITEMS_EN;
    } else if (this.translate.store.defaultLang === 'th') {
      this.menu = MENU_ITEMS_TH;
    }

  }

  changeLang() {
    if (this.translate.store.currentLang === 'en') {
      this.menu = MENU_ITEMS_EN;
    } else if (this.translate.store.currentLang === 'th') {
      this.menu = MENU_ITEMS_TH;
    }
  }

}

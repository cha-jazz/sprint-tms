import { Component } from '@angular/core';

@Component({
    selector: 'ngx-one-page-layout',
    styleUrls: [],
    template: `
    <nb-layout>

    <nb-layout-column>
      <ng-content select="router-outlet"></ng-content>
    </nb-layout-column>

  </nb-layout>
  `,
})
export class OnePageLayoutComponent { }

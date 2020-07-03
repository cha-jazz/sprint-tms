import { Component } from '@angular/core';

@Component({
    selector: 'ngx-one-page-layout',
    styleUrls: ['./one-page.layout.scss'],
    template: `

        <ng-content select="router-outlet"></ng-content>

  `,
})
export class OnePageLayoutComponent { }

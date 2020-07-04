import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-one-column-layout',
  styleUrls: ['./one-column.layout.scss'],
  // template: `
  //   <nb-layout windowMode>
  //     <nb-layout-header fixed>
  //       <ngx-header></ngx-header>
  //     </nb-layout-header>

  //     <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
  //       <ng-content select="nb-menu"></ng-content>
  //     </nb-sidebar>

  //     <nb-layout-column>
  //       <ng-content select="router-outlet"></ng-content>
  //     </nb-layout-column>

  //     <nb-layout-footer fixed>
  //       <ngx-footer></ngx-footer>
  //     </nb-layout-footer>
  //   </nb-layout>
  // `,
  templateUrl: './one-column.layout.html',
})
export class OneColumnLayoutComponent implements OnInit {
  ngOnInit() {
    $('.list-menu-sidebar>li>a').on('click', function () {
      if ($(this).hasClass('has-submenu')) {
        $(this).toggleClass('active');
        $(this).parent('li').toggleClass('active');
      }
    });
  }
}

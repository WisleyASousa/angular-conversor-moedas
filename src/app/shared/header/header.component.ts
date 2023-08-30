import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  toggleNavbar() {
    if ($('.navbar-toggler').is(':visible')) {
      $('.navbar-collapse').collapse('hide');
      $('.navbar-toggler').addClass('collapsed');
    }
  }

}

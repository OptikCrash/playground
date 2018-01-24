import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { includes } from 'lodash';

@Component({
  selector: 'sidenav',
  templateUrl: 'sidenav.html',
  styleUrls: ['./../../../styles/sidenav.scss']
})
export class SideNav implements OnInit {
    constructor(private router: Router) {
    }
    public sideNavOpen: boolean = false;

    ngOnInit(): void {

    }

  sections=[{
    name: 'Site tree:',
    subsections: [{
      name: 'Home',
      state: 'home',
      class: 'material-icons',
      icon: 'home'
    }]
  }, {
    name: 'Connect:',
    subsections: [{
      name: 'Youtube',
      link: 'https://www.youtube.com/',
      class: 'fa fa-youtube bds-youtube'
    },{
      name: 'Facebook',
      link: 'https://www.facebook.com/',
      class: 'fa fa-facebook-official bds-facebook'
    }, {
      name: 'Twitter',
      link: 'https://twitter.com/',
      class: 'fa fa-twitter-square bds-twitter'
    }, {
      name: 'Instagram',
      link: 'https://www.instagram.com/',
      class: 'fa fa-instagram bds-instagram'
    }, {
      name: 'Google+',
      link: 'https://plus.google.com/',
      class: 'fa fa-google-plus-square bds-g-plus'
    }]
  }]

  public toggle() {
      this.sideNavOpen =! this.sideNavOpen;
  }
  
  navigateTo(subsection) {
      this.toggle();
      if (subsection.state) {
          this.router.navigate([`/${subsection.state}`]);
      } else {
          window.location.assign(subsection.link);
      }
  }

}
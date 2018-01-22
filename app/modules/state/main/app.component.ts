import { Component, ViewChild, OnInit } from '@angular/core';
import { ThemeService } from './../../services/themeService';
import { SideNav } from './../../components/sidenav/sidenav.component';
// import { Event } from '_debugger';


@Component({
  selector: 'main',
  templateUrl: './app.component.html',
  styleUrls: ['./../../../styles/app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  @ViewChild(SideNav)
  private sideNav: SideNav;
  
  constructor(private themeService: ThemeService) { }
  ngOnInit() {
    this.themeService.setTheme();
    this.themeService.getSubject().subscribe((theme) => {
      if (theme) {
        this.setTheme(theme);
      }
    });
  }

  toggleSidenavClosed() { 
    if(this.sideNav.sideNavOpen) this.sideNav.sideNavOpen = false;
  }
  
  setTheme(theme: string) {
    this.themeService.theme = theme;
  }

  setDark() {
    this.themeService.setTheme('dark-theme');
  }
  setLight() {
    this.themeService.setTheme('light-theme');
  }
  setCandy() {
    this.themeService.setTheme('candy-theme');
  }

  toggle() {
    this.sideNav.toggle();
  }
}

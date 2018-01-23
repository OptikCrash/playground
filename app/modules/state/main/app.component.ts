import { Component, ViewChild, OnInit } from '@angular/core';
import { ThemeService } from './../../services/theme.service';
import { SideNav } from './../../components/sidenav/sidenav.component';
import { ActionBar } from './../../components/actionbar/actionbar.component';

@Component({
  selector: 'main',
  templateUrl: './app.component.html',
  styles: ['./../../../styles/app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild(SideNav)
  public sideNav: SideNav;
  public actionBar: ActionBar;
  
  constructor( private themeService: ThemeService ) {  
    
  }
  ngOnInit() {
    
  }

  toggleSidenavClosed() { 
    if(this.sideNav.sideNavOpen) this.sideNav.sideNavOpen = false;
  }

  toggle() {
    this.sideNav.toggle();
  }

  setTheme(themeName: string) {
    this.themeService.setTheme(themeName);
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { ThemeService } from './../../services/themeService';

@Component({
    selector: 'actionbar',
    templateUrl: 'actionbar.html',
    styleUrls: ['./../../../styles/actionbar.scss']
  })
  export class ActionBar {
    menuThemes: string[];
    themeService
    constructor(themeservice: ThemeService) {
      this.menuThemes = themeservice.themeList;
    }

    @Output()
    toggleSidenavEvent = new EventEmitter<any>();

    @Output()
    setTheme = new EventEmitter<string>();

    toggleNav() {
      this.toggleSidenavEvent.emit();
    }

    changeThemeTo(themeName: string) {
      this.setTheme.emit(themeName);
    }
  }
  
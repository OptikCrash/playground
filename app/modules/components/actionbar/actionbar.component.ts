import { Component, EventEmitter, Output } from '@angular/core';
import { ThemeService } from './../../services/theme.service';
import { SharedService } from './../../services/share-service';

@Component({
    selector: 'actionbar',
    templateUrl: 'actionbar.html',
    styleUrls: ['./../../../styles/actionbar.scss']
  })
  export class ActionBar {
    menuThemes: string[];
    themeService;
    public title: string;
    constructor(themeservice: ThemeService, private sharedService: SharedService) {
      this.menuThemes = themeservice.themeList;
      this.sharedService.changeEmitted$.subscribe( text => {
        this.title = text;
      });
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
  
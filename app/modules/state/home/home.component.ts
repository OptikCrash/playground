import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ThemeService } from './../../services/theme.service';
import { Router } from '@angular/router';
import { sortBy } from 'lodash';
import { MatSnackBar} from '@angular/material'
import { SharedService } from './../../services/share-service';

@Component({
  selector: 'home-component',
  templateUrl: 'home.component.html',
  styles: ['./../../../styles/home.scss']
})

export class HomeComponent {
  title = 'Home';
  constructor(private themeService: ThemeService, private sharedService: SharedService) {
    this.sharedService.emitChange(this.title);
  }

  ngOnInit() {

  }
  onViewCreated() {
    console.log('view created');
  }
  setTheme(theme: string) {
    this.themeService.theme = theme;
  }
}
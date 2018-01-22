import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { ThemeService } from './../../services/themeService';
import { Router } from '@angular/router';
import { sortBy } from 'lodash';
import { MatSnackBar} from '@angular/material'

@Component({
  selector: 'home-component',
  templateUrl: 'home.component.html'
})

export class HomeComponent {
  title = 'the jungle';
  constructor(private themeService: ThemeService) {}

  ngOnInit() {

  }
  onViewCreated() {
    console.log('view created');
    
  }
  setTheme(theme: string) {
    this.themeService.theme = theme;
  }
}
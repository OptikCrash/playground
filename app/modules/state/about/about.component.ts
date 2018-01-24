import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ThemeService } from './../../services/theme.service';
import { Router } from '@angular/router';
import { SharedService } from './../../services/share-service';

@Component({
  selector: 'about-component',
  templateUrl: 'about.component.html',
  styles: ['./../../../styles/home.scss']
})

export class AboutComponent {
  title = 'About Us';
  constructor(private themeService: ThemeService, private sharedService: SharedService) {
    this.sharedService.emitChange(this.title);
  }

  ngOnInit() {

  }
  onViewCreated() {
    console.log('view created');
  }
}
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ThemeService } from './../../services/theme.service';
import { Router } from '@angular/router';
import { SharedService } from './../../services/share-service';

@Component({
  selector: 'conservation-component',
  templateUrl: 'conservation.component.html',
  styles: ['./../../../styles/conservation.scss']
})

export class ConservationComponent {
  title = 'Conservation';
  constructor(private themeService: ThemeService, private sharedService: SharedService) {
    this.sharedService.emitChange(this.title);
  }

  ngOnInit() {

  }
  onViewCreated() {
    console.log('view created');
  }
}
import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { sortBy } from 'lodash';
import { MatSnackBar} from '@angular/material'

@Component({
  selector: 'home-component',
  templateUrl: 'home.component.html'
})

export class HomeComponent {
  constructor(
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
      
  }

  onViewCreated() {
    console.log('view created');
    
    // TODO - create welcome message and optional quick app tutorial out of snackbars and arrows.

  //   let snackbarRef = this.snackBar.open('Welcome to the Fish Washington web app! Please zoom in on an area to view features and their associated regulations!','Got it!', {
  //     verticalPosition: 'bottom',
  //     panelClass: 'bds-snackBar',
  //   })

  //   this.mapComponent.mapView.on('extent-change', () => {
  //     console.log('map-changes!')
  //     if(snackbarRef){
  //       snackbarRef.dismiss();
  //     }
  //   })
  // }
  }
}
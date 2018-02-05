import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ThemeService } from './../../services/theme.service';
import { Router } from '@angular/router';
import { SharedService } from './../../services/share-service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'fishing-component',
  templateUrl: 'fishing.component.html',
  styles: ['./../../../styles/fishing.scss']
})

export class FishingComponent {
  title = 'Fishing';
  displayedColumns = ['title'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private themeService: ThemeService, private sharedService: SharedService) {
    this.sharedService.emitChange(this.title);
  }

  ngOnInit() {
  }
  onViewCreated() {
    console.log('view created');
  }
}

export interface Element {
  title: string;
  url: string;
}

const ELEMENT_DATA: Element[] = [
  {title: 'WDFW adjusts sport clam and oyster seasons on several public beaches', url: 'https://fortress.wa.gov/dfw/erules/efishrules/erule.jsp?id=2090'},
  {title: 'Sport sturgeon retention prohibited in the Bonneville Pool', url: 'https://fortress.wa.gov/dfw/erules/efishrules/erule.jsp?id=2091'},
  {title: 'Sport sturgeon retention prohibited in the John Day Pool', url: 'https://fortress.wa.gov/dfw/erules/efishrules/erule.jsp?id=2093'},
  {title: 'WDFW makes changes to Tucannon River steelhead and other gamefish fisheries', url: 'https://fortress.wa.gov/dfw/erules/efishrules/erule.jsp?id=2087'},
  {title: 'WDFW announces steelhead fishery changes on some Snake River tributaries', url: 'https://fortress.wa.gov/dfw/erules/efishrules/erule.jsp?id=2088'},
  {title: 'Sport clam season extended on Point Whitney Tidelands', url: 'https://fortress.wa.gov/dfw/erules/efishrules/erule.jsp?id=2089'},
  {title: 'Razor clam digs approved Jan. 28 - Feb. 3', url: 'https://fortress.wa.gov/dfw/erules/efishrules/erule.jsp?id=2086'},
  {title: 'Sport sturgeon retention prohibited in the The Dalles Pool', url: 'https://fortress.wa.gov/dfw/erules/efishrules/erule.jsp?id=2085'},
  {title: 'Salmon fishing re-opens Feb. 16 in marine areas 8-1, 8-2, and 9', url: 'https://fortress.wa.gov/dfw/erules/efishrules/erule.jsp?id=2083'},
  {title: 'Anglers can keep 2 hatchery chinook salmon in Marine Area 10 beginning Jan. 13', url: 'https://fortress.wa.gov/dfw/erules/efishrules/erule.jsp?id=2084'}
];
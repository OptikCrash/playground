import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule} from '@angular/flex-layout';
import { MatExpansionModule, MatToolbarModule, MatButtonModule, 
  MatSidenavModule, MatMenuModule, MatIconModule, MatListModule, MatInputModule, 
  MatRadioModule, MatCardModule } from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './modules/state/home/home.module';
import { AboutModule } from './modules/state/about/about.module';

import { AppComponent } from './../app/modules/state/main/app.component';
import { ActionBar } from './modules/components/actionbar/actionbar.component';
import { SideNav } from './modules/components/sidenav/sidenav.component';

import { ThemeService } from './modules/services/theme.service';
import { SharedService } from './modules/services/share-service';

@NgModule({
  declarations: [
    AppComponent,
    ActionBar,
    SideNav
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MatExpansionModule, MatToolbarModule, MatButtonModule, 
    MatSidenavModule, MatMenuModule, MatIconModule, MatListModule, 
    MatInputModule, MatRadioModule, MatCardModule,
    FlexLayoutModule,
    HomeModule,
    AboutModule
  ],
  providers: [
    ThemeService,
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

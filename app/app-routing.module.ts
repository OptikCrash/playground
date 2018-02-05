import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/state/home/home.component';
import { AboutComponent } from './modules/state/about/about.component';
import { ConservationComponent } from './modules/state/conservation/conservation.component';
import { FishingComponent } from './modules/state/fishing/fishing.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'conservation', component:ConservationComponent},
  {path: 'fishing', component:FishingComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

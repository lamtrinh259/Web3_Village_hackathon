import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavComponent } from './nav/nav.component';
import { HowTheAppFunctionsComponent } from './how-the-app-functions/how-the-app-functions.component';
import { CurrentPledgesComponent } from './current-pledges/current-pledges.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    NavComponent, 
    HowTheAppFunctionsComponent,
    CurrentPledgesComponent
  ],
  imports: [
    CommonModule,
    SharedModule, RouterModule.forChild(routes)
  ]
})
export class HomeModule { }

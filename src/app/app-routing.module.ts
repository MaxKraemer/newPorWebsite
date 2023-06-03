import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { HeadlineComponent } from './headline/headline.component';
import { ImprintComponent } from './imprint/imprint.component';
import { LandingComponent } from './landing/landing.component';




const routes: Routes = [
  
  { path: 'data-protection' , component: DataProtectionComponent},
  { path: 'imprint' , component: ImprintComponent},
  { path: '' , component: LandingComponent }
  
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


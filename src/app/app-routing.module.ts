import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataProtectionComponent } from './components/data-protection/data-protection.component';
import { HeadlineComponent } from './components/headline/headline.component';
import { ImprintComponent } from './components/imprint/imprint.component';
import { LandingComponent } from './components/landing/landing.component';




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


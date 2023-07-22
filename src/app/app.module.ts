import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadlineComponent } from './components/headline/headline.component';
import { HeaderComponent } from './components/header/header.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ImprintComponent } from './components/imprint/imprint.component';
import { LandingComponent } from './components/landing/landing.component';
import { DataProtectionComponent } from './components/data-protection/data-protection.component';
import {DarkModeService} from "../service/dark-mode.service";


@NgModule({
  declarations: [
    AppComponent,
    HeadlineComponent,
    HeaderComponent,
    SkillsComponent,
    PortfolioComponent,
    FooterComponent,
    AboutMeComponent,
    ImprintComponent,
    LandingComponent,
    DataProtectionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [DarkModeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadlineComponent } from './headline/headline.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ImprintComponent } from './imprint/imprint.component';
import { LandingComponent } from './landing/landing.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
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

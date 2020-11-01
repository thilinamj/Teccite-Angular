import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { HeroSectionComponent } from './home/hero-section/hero-section.component';
import { AboutSectionComponent } from './home/about-section/about-section.component';
import { ClientSectionComponent } from './home/client-section/client-section.component';
import { FeatureSectionComponent } from './home/feature-section/feature-section.component';
import { StepsSectionComponent } from './home/steps-section/steps-section.component';
import { ServicesSectionComponent } from './home/services-section/services-section.component';
import { PortfoloioSectionComponent } from './home/portfoloio-section/portfoloio-section.component';
import { TestimonialsSectionComponent } from './home/testimonials-section/testimonials-section.component';
import { TeamSectionComponent } from './home/team-section/team-section.component';
import { PricingSectionComponent } from './home/pricing-section/pricing-section.component';
import { FaqSectionComponent } from './home/faq-section/faq-section.component';
import { ContactSectionComponent } from './home/contact-section/contact-section.component';
import { FooterComponent } from './home/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { OwlModule } from 'ngx-owl-carousel';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    ClientSectionComponent,
    FeatureSectionComponent,
    StepsSectionComponent,
    ServicesSectionComponent,
    PortfoloioSectionComponent,
    TestimonialsSectionComponent,
    TeamSectionComponent,
    PricingSectionComponent,
    FaqSectionComponent,
    ContactSectionComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    OwlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { NgxsModule } from '@ngxs/store';
import { NgxsEmitPluginModule } from '@ngxs-labs/emitter';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsStoreModule } from 'src/store/store.module';
import { HttpClientModule } from '@angular/common/http';
import { ContactMessageComponent } from './components/contact-message/contact-message.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { PortfolioDetailsComponent } from './components/portfolio-details/portfolio-details.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ContactComponent,
    PortfolioComponent,
    FooterComponent,
    ContactMessageComponent,
    ReviewsComponent,
    PortfolioDetailsComponent,
    ContactDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxsEmitPluginModule,
    NgxsModule,
    NgxsStoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

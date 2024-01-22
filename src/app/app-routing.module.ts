import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactMessageComponent } from './components/contact-message/contact-message.component';
import { PortfolioDetailsComponent } from './components/portfolio-details/portfolio-details.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'oza-expertise', component:PortfolioComponent},
  {path:'contact', component:ContactComponent},
  {path:'footer', component:FooterComponent},
  {path:'contact-message', component:ContactMessageComponent},
  {path:'oza-portfolio', component:PortfolioDetailsComponent},
  {path:'contact-oza', component:ContactDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

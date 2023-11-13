import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactMessageComponent } from './components/contact-message/contact-message.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'portfolio', component:PortfolioComponent},
  {path:'contact', component:ContactComponent},
  {path:'footer', component:FooterComponent},
  {path:'contact-message', component:ContactMessageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

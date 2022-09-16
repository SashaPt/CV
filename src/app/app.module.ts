import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
    MainPageComponent,
    PortfolioPageComponent,
    ContactsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

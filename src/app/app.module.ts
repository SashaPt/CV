import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { DogsPageComponent } from './pages/dogs-page/dogs-page.component';
import { HttpClientModule } from '@angular/common/http';
import { RandomDogComponent } from './pages/dogs-page/random-dog/random-dog.component';
import { RandomDogsComponent } from './pages/dogs-page/random-dogs/random-dogs.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
    MainPageComponent,
    ContactsPageComponent,
    DogsPageComponent,
    RandomDogComponent,
    RandomDogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isMainPageVisible: boolean = true;
  isPortfolioPageVisible: boolean = false;
  isContactsPageVisible: boolean = false;
  showMainPage() {
    this.isMainPageVisible = true;
    this.isPortfolioPageVisible = false;
    this.isContactsPageVisible = false;
  }
  showPortfolioPage() {
    this.isMainPageVisible = false;
    this.isPortfolioPageVisible = true;
    this.isContactsPageVisible = false;
  }
  showContactsPage() {
    this.isMainPageVisible = false;
    this.isPortfolioPageVisible = false;
    this.isContactsPageVisible = true;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isMainPageVisible: boolean = true;
  isDogsPageVisible: boolean = false;
  isContactsPageVisible: boolean = false;
  showMainPage() {
    this.isMainPageVisible = true;
    this.isDogsPageVisible = false;
    this.isContactsPageVisible = false;
  }
  showDogsPage() {
    this.isMainPageVisible = false;
    this.isDogsPageVisible = true;
    this.isContactsPageVisible = false;
  }
  showContactsPage() {
    this.isMainPageVisible = false;
    this.isDogsPageVisible = false;
    this.isContactsPageVisible = true;
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() isMainPageVisible!: boolean;
  @Input() isDogsPageVisible!: boolean;
  @Input() isContactsPageVisible!: boolean;

  @Output() clickMainPage = new EventEmitter();
  @Output() clickDogsPage = new EventEmitter();
  @Output() clickContactsPage = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  
  showMainPage() {
    this.clickMainPage.emit();
  }
  showDogsPage() {
    this.clickDogsPage.emit();
  }
  showContactsPage() {
    this.clickContactsPage.emit();
  }
}

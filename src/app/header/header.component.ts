import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() clickMainPage = new EventEmitter();
   onShowMainPage(): void {
    this.clickMainPage.emit();
  }
  @Output() clickPortfolioPage = new EventEmitter();
  onShowPortfolioPage(): void {
    this.clickPortfolioPage.emit();
  }
  @Output() clickContactsPage = new EventEmitter();
  onShowContactsPage(): void {
    this.clickContactsPage.emit();
  }
  constructor() {}

  ngOnInit(): void {}
 
}

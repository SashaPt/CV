import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
@Input() isMainPageVisible!: boolean;
@Input() isDogsPageVisible!: boolean;
@Input() isContactsPageVisible!: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}

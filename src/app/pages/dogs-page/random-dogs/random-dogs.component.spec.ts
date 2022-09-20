import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomDogsComponent } from './random-dogs.component';

describe('RandomDogsComponent', () => {
  let component: RandomDogsComponent;
  let fixture: ComponentFixture<RandomDogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomDogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomDogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

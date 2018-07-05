import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksLibaryComponent } from './books-libary.component';

describe('BooksLibaryComponent', () => {
  let component: BooksLibaryComponent;
  let fixture: ComponentFixture<BooksLibaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksLibaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksLibaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

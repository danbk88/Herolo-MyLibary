import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBookPopUpComponent } from './delete-book-pop-up.component';

describe('DeleteBookPopUpComponent', () => {
  let component: DeleteBookPopUpComponent;
  let fixture: ComponentFixture<DeleteBookPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteBookPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBookPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

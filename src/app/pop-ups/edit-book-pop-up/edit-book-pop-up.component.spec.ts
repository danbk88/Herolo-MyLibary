import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBookPopUpComponent } from './edit-book-pop-up.component';

describe('EditBookPopUpComponent', () => {
  let component: EditBookPopUpComponent;
  let fixture: ComponentFixture<EditBookPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBookPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBookPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

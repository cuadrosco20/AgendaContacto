import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactolistComponent } from './contactolist.component';

describe('ContactoListComponent', () => {
  let component: ContactolistComponent;
  let fixture: ComponentFixture<ContactolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

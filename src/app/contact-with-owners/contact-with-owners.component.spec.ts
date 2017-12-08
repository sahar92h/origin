import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactWithOwnersComponent } from './contact-with-owners.component';

describe('ContactWithOwnersComponent', () => {
  let component: ContactWithOwnersComponent;
  let fixture: ComponentFixture<ContactWithOwnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactWithOwnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactWithOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

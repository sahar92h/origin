import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticatioanComponent } from './authenticatioan.component';

describe('AuthenticatioanComponent', () => {
  let component: AuthenticatioanComponent;
  let fixture: ComponentFixture<AuthenticatioanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticatioanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticatioanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

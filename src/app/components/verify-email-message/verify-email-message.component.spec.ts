import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyEmailMessageComponent } from './verify-email-message.component';

describe('VerifyEmailMessageComponent', () => {
  let component: VerifyEmailMessageComponent;
  let fixture: ComponentFixture<VerifyEmailMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyEmailMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyEmailMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

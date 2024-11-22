import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkodaLoginComponent } from './skoda-login.component';

describe('SkodaLoginComponent', () => {
  let component: SkodaLoginComponent;
  let fixture: ComponentFixture<SkodaLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkodaLoginComponent]
    });
    fixture = TestBed.createComponent(SkodaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

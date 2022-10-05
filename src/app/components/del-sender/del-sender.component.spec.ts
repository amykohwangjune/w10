import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelSenderComponent } from './del-sender.component';

describe('DelSenderComponent', () => {
  let component: DelSenderComponent;
  let fixture: ComponentFixture<DelSenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelSenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

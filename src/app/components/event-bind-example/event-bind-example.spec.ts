import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBindExample } from './event-bind-example';

describe('EventBindExample', () => {
  let component: EventBindExample;
  let fixture: ComponentFixture<EventBindExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventBindExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventBindExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

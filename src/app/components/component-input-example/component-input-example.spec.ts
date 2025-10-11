import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInputExample } from './component-input-example';

describe('ComponentInputExample', () => {
  let component: ComponentInputExample;
  let fixture: ComponentFixture<ComponentInputExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentInputExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentInputExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

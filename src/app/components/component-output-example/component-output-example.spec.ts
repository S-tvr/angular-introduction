import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentOutputExample } from './component-output-example';

describe('ComponentOutputExample', () => {
  let component: ComponentOutputExample;
  let fixture: ComponentFixture<ComponentOutputExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentOutputExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentOutputExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

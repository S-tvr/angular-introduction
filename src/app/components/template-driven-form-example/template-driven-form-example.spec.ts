import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormExample } from './template-driven-form-example';

describe('TemplateDrivenFormExample', () => {
  let component: TemplateDrivenFormExample;
  let fixture: ComponentFixture<TemplateDrivenFormExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDrivenFormExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenFormExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

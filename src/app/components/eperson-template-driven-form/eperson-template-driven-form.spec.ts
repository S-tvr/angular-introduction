import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpersonTemplateDrivenForm } from './eperson-template-driven-form';

describe('EpersonTemplateDrivenForm', () => {
  let component: EpersonTemplateDrivenForm;
  let fixture: ComponentFixture<EpersonTemplateDrivenForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpersonTemplateDrivenForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpersonTemplateDrivenForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpersonReactiveForm } from './eperson-reactive-form';

describe('EpersonReactiveForm', () => {
  let component: EpersonReactiveForm;
  let fixture: ComponentFixture<EpersonReactiveForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpersonReactiveForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpersonReactiveForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

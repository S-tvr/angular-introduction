import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForDirectiveExample } from './for-directive-example';

describe('ForDirectiveExample', () => {
  let component: ForDirectiveExample;
  let fixture: ComponentFixture<ForDirectiveExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForDirectiveExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForDirectiveExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

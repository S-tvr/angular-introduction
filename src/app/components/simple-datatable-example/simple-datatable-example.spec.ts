import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDatatableExample } from './simple-datatable-example';

describe('SimpleDatatableExample', () => {
  let component: SimpleDatatableExample;
  let fixture: ComponentFixture<SimpleDatatableExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleDatatableExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleDatatableExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

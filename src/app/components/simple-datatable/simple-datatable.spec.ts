import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDatatable } from './simple-datatable';

describe('SimpleDatatable', () => {
  let component: SimpleDatatable;
  let fixture: ComponentFixture<SimpleDatatable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleDatatable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleDatatable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

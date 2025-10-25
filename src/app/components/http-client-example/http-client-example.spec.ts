import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientExample } from './http-client-example';

describe('HttpClientExample', () => {
  let component: HttpClientExample;
  let fixture: ComponentFixture<HttpClientExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpClientExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

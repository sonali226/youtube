import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendvideosComponent } from './trendvideos.component';

describe('TrendvideosComponent', () => {
  let component: TrendvideosComponent;
  let fixture: ComponentFixture<TrendvideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendvideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendvideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

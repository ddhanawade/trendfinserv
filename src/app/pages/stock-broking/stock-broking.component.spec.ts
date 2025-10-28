import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockBrokingComponent } from './stock-broking.component';

describe('StockBrokingComponent', () => {
  let component: StockBrokingComponent;
  let fixture: ComponentFixture<StockBrokingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockBrokingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockBrokingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

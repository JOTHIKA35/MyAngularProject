import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsearchingComponent } from './carsearching.component';

describe('CarsearchingComponent', () => {
  let component: CarsearchingComponent;
  let fixture: ComponentFixture<CarsearchingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsearchingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarsearchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

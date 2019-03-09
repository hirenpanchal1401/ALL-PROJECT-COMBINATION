import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FibbonaciComponent } from './fibbonaci.component';

describe('FibbonaciComponent', () => {
  let component: FibbonaciComponent;
  let fixture: ComponentFixture<FibbonaciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FibbonaciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FibbonaciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

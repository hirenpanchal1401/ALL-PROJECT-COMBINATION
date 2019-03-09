import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringoprationComponent } from './stringopration.component';

describe('StringoprationComponent', () => {
  let component: StringoprationComponent;
  let fixture: ComponentFixture<StringoprationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringoprationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringoprationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

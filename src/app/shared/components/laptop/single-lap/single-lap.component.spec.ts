import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLapComponent } from './single-lap.component';

describe('SingleLapComponent', () => {
  let component: SingleLapComponent;
  let fixture: ComponentFixture<SingleLapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleLapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleLapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

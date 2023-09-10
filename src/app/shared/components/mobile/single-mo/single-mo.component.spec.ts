import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMoComponent } from './single-mo.component';

describe('SingleMoComponent', () => {
  let component: SingleMoComponent;
  let fixture: ComponentFixture<SingleMoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleMoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleMoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

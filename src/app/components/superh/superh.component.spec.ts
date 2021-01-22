import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperhComponent } from './superh.component';

describe('SuperhComponent', () => {
  let component: SuperhComponent;
  let fixture: ComponentFixture<SuperhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

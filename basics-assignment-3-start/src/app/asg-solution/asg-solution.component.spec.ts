import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsgSolutionComponent } from './asg-solution.component';

describe('AsgSolutionComponent', () => {
  let component: AsgSolutionComponent;
  let fixture: ComponentFixture<AsgSolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsgSolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsgSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

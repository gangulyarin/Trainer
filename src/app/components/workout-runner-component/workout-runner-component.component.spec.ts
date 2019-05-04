import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutRunnerComponentComponent } from './workout-runner-component.component';

describe('WorkoutRunnerComponentComponent', () => {
  let component: WorkoutRunnerComponentComponent;
  let fixture: ComponentFixture<WorkoutRunnerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutRunnerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutRunnerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

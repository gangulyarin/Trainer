import { WorkoutRunnerModuleModule } from './workout-runner-module.module';

describe('WorkoutRunnerModuleModule', () => {
  let workoutRunnerModuleModule: WorkoutRunnerModuleModule;

  beforeEach(() => {
    workoutRunnerModuleModule = new WorkoutRunnerModuleModule();
  });

  it('should create an instance', () => {
    expect(workoutRunnerModuleModule).toBeTruthy();
  });
});

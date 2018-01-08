import { ExerciseObservablesPage } from './app.po';

describe('exercise-observables App', () => {
  let page: ExerciseObservablesPage;

  beforeEach(() => {
    page = new ExerciseObservablesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

import { StudentManagerPage } from './app.po';

describe('student-manager App', () => {
  let page: StudentManagerPage;

  beforeEach(() => {
    page = new StudentManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

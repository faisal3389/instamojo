import { InstamojoPage } from './app.po';

describe('instamojo App', () => {
  let page: InstamojoPage;

  beforeEach(() => {
    page = new InstamojoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

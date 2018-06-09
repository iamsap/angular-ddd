import { DddPage } from './app.po';

describe('ddd App', () => {
  let page: DddPage;

  beforeEach(() => {
    page = new DddPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { Angular01Page } from './app.po';

describe('angular-01 App', function() {
  let page: Angular01Page;

  beforeEach(() => {
    page = new Angular01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

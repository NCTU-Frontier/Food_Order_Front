import { ToolBoxFrontPage } from './app.po';

describe('tool-box-front App', function() {
  let page: ToolBoxFrontPage;

  beforeEach(() => {
    page = new ToolBoxFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

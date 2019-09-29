import { hasClass, addClass, removeClass } from '../dom';

describe('dom操作', () => {
  it('hassClass', () => {
    const element = document.createElement('div');
    element.className = 'rxdey test';
    expect(hasClass(element, 'rxdey')).toEqual(true);
    expect(hasClass(element, 'test')).toEqual(true);
    expect(hasClass(element, 'rxdey test')).toEqual(true);
    expect(hasClass(element, 'init')).toEqual(false);
    expect(hasClass(element)).toEqual(false);
    expect(hasClass()).toEqual(false);
  });
  it('addClass', () => {
    const element = document.createElement('div');
    element.className = 'rxdey';
    addClass(element, 'test');
    expect(element.className).toEqual('rxdey test');
    addClass(element, 'test');
    expect(element.className).toEqual('rxdey test');
    expect(addClass()).toEqual(false);
  });
  it('removeClass', () => {
    const element = document.createElement('div');
    element.className = 'rxdey';
    removeClass(element, 'test');
    expect(element.className).toEqual('rxdey');
    removeClass(element, 'rxdey');
    expect(element.className).toEqual('');
  });
});

import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../../src/app/components/presentational/common/Button';

beforeEach(() => {
  jest.resetModules();
});

describe('Button Component', () => {
  it('should match snapshot including default props', () => {
    const props = {
      cssClass: 'event__sing-up',
      clickHandler: () => true,
    };
    const component = renderer.create(<Button {...props}>test text</Button>);

    const componentTree = component.toJSON();

    expect(componentTree).toMatchSnapshot();
  });
});

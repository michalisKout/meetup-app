import React from 'react';
import renderer from 'react-test-renderer';
import Title from '../../src/app/components/presentational/common/Title';

beforeEach(() => {
  jest.resetModules();
});

describe('Title Component', () => {
  it('should match snapshot when text does not include free label', () => {
    const props = {
      isFree: false,
      text: 'testText',
    };
    const component = renderer.create(<Title {...props} />);

    const componentTree = component.toJSON();

    expect(componentTree).toMatchSnapshot();
  });
  it('should match snapshot when text includes free label', () => {
    const props = {
      isFree: true,
      text: 'testText',
    };
    const component = renderer.create(<Title {...props} />);

    const componentTree = component.toJSON();

    expect(componentTree).toMatchSnapshot();
  });
});

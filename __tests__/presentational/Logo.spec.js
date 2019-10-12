import React from 'react';
import renderer from 'react-test-renderer';
import Logo from '../../src/app/components/presentational/common/Logo';

beforeEach(() => {
  jest.resetModules();
});

describe('Logo Component', () => {
  it('should match snapshot including default props', () => {
    const props = {
      smallText: 'my',
      largeText: 'Logo',
    };
    const component = renderer.create(<Logo {...props} />);

    const componentTree = component.toJSON();

    expect(componentTree).toMatchSnapshot();
  });
});

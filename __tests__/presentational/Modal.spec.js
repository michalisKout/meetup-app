import React from 'react';
import renderer from 'react-test-renderer';
import Logo from '../../src/app/components/presentational/common/Logo';

beforeEach(() => {
  jest.resetModules();
});

describe('Modal Component', () => {
  it('should match snapshot including default props', () => {
    const props = {
      titleText: 'test modal',
      text: 'this is a modal for testing',
      closeHandler: () => true,
      display: true,
      submitHandler: () => true,
    };
    const component = renderer.create(<Logo {...props} />);

    const componentTree = component.toJSON();

    expect(componentTree).toMatchSnapshot();
  });
});

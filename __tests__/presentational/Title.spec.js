import React from 'react';
import renderer from 'react-test-renderer';
import Title from '../../src/app/components/presentational/common/Title';

describe('Event Component', () => {
  it('should match snapshot when title does not include free label', () => {
    const props = {
      isFree: false,
      text: 'testText',
    };
    const component = renderer.create(<Title {...props} />);

    const componentTree = component.toJSON();

    expect(componentTree).toMatchSnapshot();
  });
  it('should match snapshot when title includes free label', () => {
    const props = {
      isFree: true,
      text: 'testText',
    };
    const component = renderer.create(<Title {...props} />);

    const componentTree = component.toJSON();

    expect(componentTree).toMatchSnapshot();
  });
});

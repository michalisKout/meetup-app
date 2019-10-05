import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import App from '../src/app/App';

describe('App component', () => {
  it('should have a snapshot', () => {
    const AppComponent = renderer.create(<App />);
    const snapshot = AppComponent.toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('should contain h1 elemnt', () => {
    const component = shallow(<App />);
    component.containsMatchingElement('h1');
  });
});

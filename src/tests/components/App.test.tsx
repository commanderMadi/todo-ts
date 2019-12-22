import React from 'react';
import { App } from '../../components/App';
import { shallow } from 'enzyme';

test('App component should load correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
});

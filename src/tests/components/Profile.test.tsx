import React from 'react';
import { Profile } from '../../components/Profile';
import { shallow } from 'enzyme';

test('Profile component should load correctly', () => {
    const wrapper = shallow(<Profile />);
    expect(wrapper).toMatchSnapshot();
});

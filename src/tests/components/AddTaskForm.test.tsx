import React from 'react';
import { shallow } from 'enzyme';
import { AddTaskForm } from '../../components/AddTaskForm';
import { initialData } from '../fixture/testdata';

test('AddTaskForm should render correctly', () => {
    const wrapper = shallow(
        <AddTaskForm categories={initialData} onSubmit={() => {}} />
    );

    expect(wrapper).toMatchSnapshot();
});

import React from 'react';
import { shallow } from 'enzyme';
import { Auth } from '../../actions/';
import { Login } from '../../components/Login';
import { ActionTypes } from '../../actions/actiontypes';

test('should render Login component correctly', () => {
    const defaultUserAuth: Auth = {
        auth: false
    };
    const wrapper = shallow(
        <Login
            isAuthenticated={defaultUserAuth}
            checkAuthentication={() => ({
                type: ActionTypes.checkAuthentication
            })}
        />
    );
    expect(wrapper).toMatchSnapshot();
});

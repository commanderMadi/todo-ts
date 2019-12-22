import React from 'react';
import { Header } from '../../components/Header';
import { Auth } from '../../actions/';
import { shallow } from 'enzyme';
import { ActionTypes } from '../../actions/actiontypes';

test('Header component should load a login link when user is not logged in', () => {
    const defaultUserAuth: Auth = {
        auth: false
    };
    const wrapper = shallow(
        <Header
            isAuthenticated={defaultUserAuth}
            checkAuthentication={() => ({
                type: ActionTypes.checkAuthentication
            })}
        />
    );
    expect(wrapper).toMatchSnapshot();
});

test('Header component should show a logout button when user is logged in', () => {
    const LoggedInUserAuth: Auth = {
        auth: true
    };
    const wrapper = shallow(
        <Header
            isAuthenticated={LoggedInUserAuth}
            checkAuthentication={() => ({
                type: ActionTypes.checkAuthentication
            })}
        />
    );
    expect(wrapper).toMatchSnapshot();
});

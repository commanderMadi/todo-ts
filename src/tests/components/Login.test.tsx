import React from 'react';
import { shallow } from 'enzyme';
import { Auth } from '../../actions/';
import { Login } from '../../components/Login';
import { ActionTypes } from '../../actions/actiontypes';

let defaultUserAuth: Auth;

beforeEach(() => {
  defaultUserAuth = {
    auth: false
  };
});

test('should render Login component correctly', () => {
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

test('should render the error message on wrong login attempt.', () => {
  let wrongInfo = { username: '', password: '' };
  const onFormSubmitSpy = jest.spyOn(Login.prototype, 'onFormSubmit');
  const checkCredsSpy = jest.spyOn(Login.prototype, 'checkCredentials');
  const wrapper = shallow(
    <Login
      isAuthenticated={defaultUserAuth}
      checkAuthentication={() => ({
        type: ActionTypes.checkAuthentication
      })}
    />
  );
  wrapper
    .find('form')
    .first()
    .simulate('submit', {
      preventDefault: () => {},
      target: {
        elements: [{ value: wrongInfo.username }, { value: wrongInfo.password }]
      }
    });
  expect(onFormSubmitSpy).toHaveBeenCalled();
  expect(checkCredsSpy).toHaveBeenLastCalledWith(
    wrongInfo.username,
    wrongInfo.password
  );
  expect(wrapper.state('error')).toBeTruthy();
});

test('should render no error on correct login attempt.', () => {
  let userInfo = { username: 'Admin', password: '54321' };
  const onFormSubmitSpy = jest.spyOn(Login.prototype, 'onFormSubmit');
  const checkCredsSpy = jest.spyOn(Login.prototype, 'checkCredentials');
  const wrapper = shallow(
    <Login
      isAuthenticated={defaultUserAuth}
      checkAuthentication={() => ({
        type: ActionTypes.checkAuthentication
      })}
    />
  );
  wrapper
    .find('form')
    .first()
    .simulate('submit', {
      preventDefault: () => {},
      target: {
        elements: [{ value: userInfo.username }, { value: userInfo.password }]
      }
    });
  expect(onFormSubmitSpy).toHaveBeenCalled();
  expect(checkCredsSpy).toHaveBeenLastCalledWith(
    userInfo.username,
    userInfo.password
  );
  expect(wrapper.state('error')).toBeFalsy();
});

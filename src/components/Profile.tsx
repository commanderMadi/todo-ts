import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from './styles/base';

class Profile extends React.Component {
  render() {
    return (
      <Wrapper>
        <p>Welcome, Admin</p>
        <Link to='/tasks'>Go to the Tasks page</Link>
      </Wrapper>
    );
  }
}

export { Profile };

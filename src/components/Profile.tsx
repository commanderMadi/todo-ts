import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome, Admin</p>
        <Link to='/tasks'>Go to the Tasks page</Link>
      </div>
    );
  }
}

export { Profile };

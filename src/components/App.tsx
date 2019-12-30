import React from 'react';
import { Wrapper } from './styles/base';
class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <h1 className='mt-3'>Welcome to the app!</h1>
        <h4 className='mt-5'>What is this app about?</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, unde
          consectetur. Tempora cupiditate, dolores excepturi nihil vero neque
          amet iste perferendis dolorum unde ducimus aut officiis laboriosam
          quo! Ipsum, praesentium.
        </p>
      </Wrapper>
    );
  }
}

export { App };

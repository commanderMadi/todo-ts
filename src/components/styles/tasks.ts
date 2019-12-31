import styled from 'styled-components';
import { oneMarginRem, onePaddingRem } from './base';
import { media } from '../styles/media';

export const TasksContainer = styled.div`
  color: #fff;
  ${oneMarginRem};
  width: 30%;
  align-self: flex-start;
  background-color: #5486d9;
  border-top: 2px solid black;
  border-left: 2px solid black;
  border-right: 2px solid black;
  border-radius: 0.25rem;
  ${media.mediumVp`
  width: 50%; 
  align-self: center;`};
`;

export const TaskContainer = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    align-self: center;
    margin-right: 0.5rem;
  }
`;
export const CategoryTitle = styled.h3`
  background-color: #fff;
  width: 100%;
  color: #222;
  padding: 10px;
  margin: 0;
`;
export const TaskTitle = styled.h5`
  display: inline-block;
  margin-right: 0.5rem;
  ${onePaddingRem};
`;

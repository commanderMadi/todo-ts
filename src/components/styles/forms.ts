import styled from 'styled-components';
import { media } from '../styles/media';

export const FormContainer = styled.div`
  width: 100%;
  margin: 1rem;
  padding: 1.5rem;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    'i i i i i i i sel sel sel'
    '. . . . . . .  b b';
  input {
    grid-area: i;
    height: 2rem;
    margin-right: 0.5rem;
    padding: 0.5rem;
  }
  select {
    height: 2rem;
    grid-area: sel;
    margin-right: 0.5rem;
  }
  button {
    margin: 0.5rem;
    grid-area: b;
    width: 100px;
  }
  ${media.smallVp`
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    'i i i i i i i i i i'
    'sel sel sel sel sel sel sel sel sel sel'
    'b . . . . . . . . .';
  `}
`;

export const LoginForm = styled.form`
  display: grid;
  margin: 0 auto;
  width: 80%;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 1.5rem;
  align-items: center;
  grid-template-areas:
    'label_user inp_user inp_user inp_user inp_user inp_user inp_user inp_user inp_user inp_user inp_user .'
    'label_pw inp_pw  inp_pw  inp_pw  inp_pw  inp_pw  inp_pw inp_pw inp_pw inp_pw inp_pw . '
    '. . . . . . . b b b b . ';
  label:nth-child(1) {
    grid-area: label_user;
    text-align: center;
  }
  label:nth-child(3) {
    grid-area: label_pw;
    text-align: center;
  }
  input.username_login {
    grid-area: inp_user;
    height: 2rem;
    padding: 0.5rem;
  }
  input.password_login {
    grid-area: inp_pw;
    height: 2rem;
    padding: 0.5rem;
  }
  button {
    grid-area: b;
    margin: 0.5rem;
    display: inline-block;
  }
  ${media.smallVp`
  grid-template-areas:
    'label_user inp_user inp_user inp_user inp_user inp_user inp_user inp_user inp_user inp_user inp_user .'
    'label_pw inp_pw  inp_pw  inp_pw  inp_pw  inp_pw  inp_pw inp_pw inp_pw inp_pw inp_pw . '
    'b b . . . . . . . . . . ';
  `}
`;

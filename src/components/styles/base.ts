import styled from 'styled-components';

export const fullWidth = `width: 100%`;
export const oneMarginRem = `margin: 1rem`;
export const onePaddingRem = `padding: 1rem`;

export const Wrapper = styled.div`
  ${onePaddingRem};
  ${oneMarginRem};
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const FullWidthH2 = styled.h2`
  ${fullWidth};
  ${oneMarginRem};
  text-align: center;
`;

export const Button = styled.button`
  ${onePaddingRem};
  color: #fff;
  background-color: palevioletred;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1;
  border-radius: 0.25rem;
  cursor: pointer;
`;

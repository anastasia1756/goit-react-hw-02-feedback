import styled from 'styled-components';

export const Button = styled.button`
  background-color: turquoise;
  width: 150px;
  height: 50px;
  cursor: pointer;

  :not(:last-child) {
    margin-right: 15px;
  }
`;

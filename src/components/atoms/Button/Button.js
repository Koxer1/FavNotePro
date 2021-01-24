import styled, { css } from 'styled-components';
import withContext from '../../../hoc/withContext';

const Button = styled.button`
  background-color: ${({ pageContext, theme }) => theme[pageContext]};
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: hsl(0, 0%, 90%);
      width: 105px;
      height: 30px;
      font-size: 10px;
    `};
`;

export default withContext(Button);

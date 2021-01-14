import styled, { css } from 'styled-components';
import plusIcon from '../../../assets/icons/plus.svg';
import bulbIcon from '../../../assets/icons/bulb.svg';

const ButtonIcon = styled.button`
  width: 46px;
  height: 46px;
  background-color: transparent;
  background-image: url(${({ icon }) => icon || plusIcon});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 40%;
  border-radius: 20px;
  border: none;
  ${({ bulb }) =>
    bulb &&
    css`
      background-image: url(${bulbIcon});
    `};
`;

export default ButtonIcon;

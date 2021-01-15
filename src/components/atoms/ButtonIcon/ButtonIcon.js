import styled, { css } from 'styled-components';
import plusIcon from '../../../assets/icons/plus.svg';
import bulbIcon from '../../../assets/icons/bulb.svg';
import logoutIcon from '../../../assets/icons/logout.svg';
import penIcon from '../../../assets/icons/pen.svg';
import twitterIcon from '../../../assets/icons/twitter.svg';
import searchIcon from '../../../assets/magnifier.svg';

const ButtonIcon = styled.button`
  display: block;
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

  ${({ logout }) =>
    logout &&
    css`
      background-image: url(${logoutIcon});
    `};

  ${({ pen }) =>
    pen &&
    css`
      background-image: url(${penIcon});
    `};

  ${({ twitter }) =>
    twitter &&
    css`
      background-image: url(${twitterIcon});
    `};

  ${({ search }) =>
    search &&
    css`
      background-image: url(${searchIcon});
    `};

  ${({ active }) =>
    active &&
    css`
      background-color: white;
    `};

  &.active {
    background-color: white;
  }
`;

export default ButtonIcon;

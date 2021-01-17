import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import Logo from '../../../assets/icons/logo.svg';

const StyledWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 150px;
  height: 100vh;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.notes)};
  margin: 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogoLink = styled(NavLink)`
  display: block;
  width: 127px;
  height: 127px;
  background-image: url(${Logo});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  border: none;
  margin-bottom: 10vh;
`;

const StyledLinkList = styled.div`
  margin-top: 100px;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  margin-top: auto;
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
`;

// eslint-disable-next-line react/prop-types
const Sidebar = ({ pageType }) => (
  <StyledWrapper activeColor={pageType}>
    <StyledLogoLink to='/' />
    <StyledLinkList>
      <StyledButtonIcon as={NavLink} activeclass='active' to='/notes' pen />
      <StyledButtonIcon as={NavLink} activeclass='active' to='/twitters' twitter />
      <StyledButtonIcon as={NavLink} activeclass='active' to='/articles' bulb />
    </StyledLinkList>
    <StyledButtonIcon as={NavLink} to='/login' logout />
  </StyledWrapper>
);

export default Sidebar;

import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import Logo from '../../../assets/icons/logo.svg';

const StyledWrapper = styled.div`
  position: fixed;
  width: 150px;
  height: 100vh;
  background-color: ${({ theme }) => theme.note};
  margin: 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogo = styled.img`
  display: block;
  width: 100px;
  height: auto;
  margin-top: 20px;
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

const Sidebar = () => (
  <StyledWrapper>
    <StyledLogo src={Logo} to='/' />
    <StyledLinkList>
      <StyledButtonIcon exact as={NavLink} activeclass='active' to='/' pen />
      <StyledButtonIcon as={NavLink} activeclass='active' to='/twitters' twitter />
      <StyledButtonIcon as={NavLink} activeclass='active' to='/articles' bulb />
    </StyledLinkList>
    <StyledButtonIcon as={NavLink} to='/login' logout />
  </StyledWrapper>
);

export default Sidebar;

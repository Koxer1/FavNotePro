/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/state-in-constructor */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from '../components/atoms/Input/Input';
import Heading from '../components/atoms/Heading/Heading';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import UserPageTemplate from './UserPageTemplate';
import withContext from '../hoc/withContext';
import ButtonIcon from '../components/atoms/ButtonIcon/ButtonIcon';
import NewItemBar from '../components/organisms/Sidebar/NewItemBar/NewItemBar';

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
`;

const StyledGrid = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;
  text-transform: capitalize;
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0 0 0 3px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.grey200};
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  cursor: pointer;
  background-color: ${({ activeColor, theme, isVisible }) =>
    isVisible ? 'hsl(0, 0%, 90%)' : theme[activeColor]};
  border-radius: 50px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 9999999;
  width: 56px;
  height: 56px;
  border: none;
  transform: rotate(${({ isVisible }) => (isVisible ? '-45deg' : '0')});
  transition: transform 0.3s;
`;

class GridTemplate extends Component {
  state = {
    isNewItemBarVisible: false,
  };

  toggleNewItemBar = () => {
    this.setState((prevState) => ({ isNewItemBarVisible: !prevState.isNewItemBarVisible }));
  };

  render() {
    const { children, pageContext } = this.props;
    const { isNewItemBarVisible } = this.state;

    return (
      <UserPageTemplate>
        <StyledWrapper>
          <StyledPageHeader>
            <Input search placeholder='search' />
            <StyledHeading big as='h1'>
              {pageContext}
            </StyledHeading>
            <StyledParagraph>12 {pageContext}</StyledParagraph>
          </StyledPageHeader>
          <StyledGrid>{children}</StyledGrid>
          <StyledButtonIcon
            onClick={this.toggleNewItemBar}
            activeColor={pageContext}
            isVisible={isNewItemBarVisible}
          />
          <NewItemBar handleClose={this.toggleNewItemBar} isVisible={isNewItemBarVisible} />
        </StyledWrapper>
      </UserPageTemplate>
    );
  }
}

GridTemplate.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.array.isRequired,
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

GridTemplate.defaultProps = {
  pageContext: 'notes',
};

export default withContext(GridTemplate);

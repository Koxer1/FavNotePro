import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from '../../../atoms/Input/Input';
import Button from '../../../atoms/Button/Button';
import withContext from '../../../../hoc/withContext';
import Heading from '../../../atoms/Heading/Heading';

const StyledWrapper = styled.div`
  z-index: 9999;
  display: flex;
  flex-direction: column;
  padding: 100px 50px;
  position: fixed;
  top: 0;
  right: 0;
  background-color: white;
  height: 100vh;
  width: 680px;
  border-left: 10px solid ${({ activeColor, theme }) => theme[activeColor]};
  box-shadow: -5px 0 15px hsla(0, 0%, 0%, 0.1);
`;

const StyledTextArea = styled(Input)`
  height: 30vh;
  margin: 30px 0 100px;
  border-radius: 20px;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const StyledInput = styled(Input)`
  margin-top: 20px;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const NewItemBar = ({ pageContext }) => (
  <>
    <StyledWrapper activeColor={pageContext}>
      <Heading big>Add new {pageContext}</Heading>
      <StyledInput placeholder='title' />
      <StyledTextArea as='textarea' placeholder='content' />
      <Button>Add item</Button>
    </StyledWrapper>
  </>
);

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

NewItemBar.defaultProps = {
  pageContext: 'notes',
};

export default withContext(NewItemBar);

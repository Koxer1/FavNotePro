/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Formik, Form, Fields, ErrorMessage } from 'formik';
import Input from '../../../atoms/Input/Input';
import Button from '../../../atoms/Button/Button';
import withContext from '../../../../hoc/withContext';
import Heading from '../../../atoms/Heading/Heading';
import { addItem as addItemAction } from '../../../../actions/index';

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
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.3s ease-in-out;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
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

const NewItemBar = ({ pageContext, isVisible, addItem, handleClose }) => (
  <StyledWrapper isVisible={isVisible} activeColor={pageContext}>
    <Heading big>Create new {pageContext}</Heading>
    <Formik
      initialValues={{ title: '', content: '', articleUrl: '', image: '', created: '' }}
      onSubmit={(values) => {
        addItem(pageContext, values);
        handleClose();
      }}
    >
      {({ values, handleChange, handleBlur }) => (
        <StyledForm>
          <StyledInput
            type='text'
            name='title'
            placeholder='title'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
            autoComplete='off'
          />
          {pageContext === 'twitters' && (
            <StyledInput
              placeholder='Avatar URL'
              type='text'
              name='image'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.image}
            />
          )}
          {pageContext === 'articles' && (
            <StyledInput
              placeholder='link'
              type='text'
              name='articleUrl'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.articleUrl}
            />
          )}
          <StyledTextArea
            name='content'
            as='textarea'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.content}
          />
          <Button type='submit' activecolor={pageContext}>
            Add Note
          </Button>
        </StyledForm>
      )}
    </Formik>
  </StyledWrapper>
);

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  isVisible: PropTypes.bool,
  addItem: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

NewItemBar.defaultProps = {
  pageContext: 'notes',
  isVisible: false,
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
});

export default connect(null, mapDispatchToProps)(withContext(NewItemBar));

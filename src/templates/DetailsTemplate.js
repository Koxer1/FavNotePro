/* eslint-disable react/prop-types */
import React from 'react';
// import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import UserPageTemplate from './UserPageTemplate';

const Detailstemplate = ({ children, pageType }) => (
  <UserPageTemplate pageType={pageType}>
    {children}
    <Link to='/'>Back</Link>
  </UserPageTemplate>
);

export default Detailstemplate;

import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/organisms/Sidebar/Sidebar';

const Wrapper = styled.div`
  padding-left: 150px;
`;
// eslint-disable-next-line react/prop-types
const UserPageTemplate = ({ children }) => (
  <>
    <Sidebar />
    <Wrapper>{children}</Wrapper>
  </>
);

export default UserPageTemplate;

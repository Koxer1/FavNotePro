import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from '../components/atoms/Input/Input';
import Heading from '../components/atoms/Heading/Heading';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import UserPageTemplate from './UserPageTemplate';

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
`;

const StyledGrid = styled.div`
  display: flex;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 80px;
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

const GridTemplate = ({ children, pageType }) => (
  <UserPageTemplate pageType={pageType}>
    <StyledWrapper>
      <StyledPageHeader>
        <Input search placeholder='search' />
        <StyledHeading big as='h1'>
          {pageType}
        </StyledHeading>
        <StyledParagraph>12 {pageType}</StyledParagraph>
      </StyledPageHeader>
      <StyledGrid>{children}</StyledGrid>
    </StyledWrapper>
  </UserPageTemplate>
);

GridTemplate.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.array.isRequired,
  pageType: PropTypes.element.isRequired,
};

export default GridTemplate;

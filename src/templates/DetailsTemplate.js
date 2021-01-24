import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Heading from '../components/atoms/Heading/Heading';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import Button from '../components/atoms/Button/Button';
import UserPageTemplate from './UserPageTemplate';
import withContext from '../hoc/withContext';

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
  max-width: 50vw;
  position: relative;

  @media (max-width: 1200px) {
    max-width: 80vw;
  }
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledLink = styled.a`
  display: block;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: black;
  text-transform: uppercase;
  margin: 20px 0 50px;
`;

const StyledImage = styled.img`
  position: absolute;
  right: -80px;
  top: 50px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

const StyledContentParagraph = styled(Paragraph)`
  padding-bottom: 30px;
`;

const DetailsTemplate = ({ pageContext, title, created, content, articleUrl, image }) => (
  <UserPageTemplate pageContext={pageContext}>
    <StyledWrapper>
      <StyledPageHeader>
        <StyledHeading big as='h1'>
          {title}
        </StyledHeading>
        <StyledParagraph>{created}</StyledParagraph>
      </StyledPageHeader>
      <StyledContentParagraph>{content}</StyledContentParagraph>
      {pageContext === 'articles' && (
        <StyledLink target='_blank' href={articleUrl}>
          Open article
        </StyledLink>
      )}
      {pageContext === 'twitters' && <StyledImage alt={title} src={image} />}
      <Link to={`/${pageContext}`}>
        <Button activeColor={pageContext}>save / close</Button>
      </Link>
    </StyledWrapper>
  </UserPageTemplate>
);

DetailsTemplate.propTypes = {
  pageContext: PropTypes.string.isRequired,
  title: PropTypes.string,
  created: PropTypes.string,
  content: PropTypes.string,
  articleUrl: PropTypes.string,
  image: PropTypes.string,
};

DetailsTemplate.defaultProps = {
  title: '',
  created: '',
  content: '',
  articleUrl: '',
  image: '',
};

export default withContext(DetailsTemplate);

import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Heading from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  width: 400px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template: 0.1fr 1fr;
`;

const InnerWrapper = styled.div`
  padding: 20px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};

  ${({ flex }) =>
    flex &&
    css`
      min-height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `};
`;

const DateInfo = styled(Paragraph)`
  margin: 20px 0 0px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xxs};
`;

const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSize.l};
  margin: 5px 0 0;
`;

// eslint-disable-next-line react/prop-types
const Card = ({ cardType }) => (
  <StyledWrapper>
    <InnerWrapper activeColor={cardType}>
      <StyledHeading>Hello Konrad</StyledHeading>
      <DateInfo>3 days</DateInfo>
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>
        To jest przykładowy tekst w paragrafie, który znajduje się w karcie. Bardzo ładnie wygląda.
      </Paragraph>
      <Button secondary>Remove</Button>
    </InnerWrapper>
  </StyledWrapper>
);

Card.propTypes = {
  cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

Card.defaultProps = {
  cardType: 'note',
};

export default Card;

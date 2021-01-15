import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Heading from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import LinkIcon from '../../../assets/icons/link.svg';

const StyledWrapper = styled.div`
  width: 500px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template: 0.1fr 1fr;
`;

const InnerWrapper = styled.div`
  position: relative;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 30px;
  padding-right: 30px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};

  :first-of-type {
    z-index: 9999;
  }

  ${({ flex }) =>
    flex &&
    css`
      margin-top: 20px;
      min-height: 250px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `};
`;

const DateInfo = styled(Paragraph)`
  margin-top: 5px;
  margin-left: 2px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSize.l};

  margin: 0;
`;

const StyledAvatar = styled.img`
  position: absolute;
  width: 86px;
  height: 86px;
  border: 5px solid ${({ theme }) => theme.twitter};
  border-radius: 50px;
  right: 20px;
  top: 20px;
`;

const StyledLinkButton = styled.a`
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  display: block;
  width: 47px;
  height: 47px;
  background: white url(${LinkIcon}) no-repeat;
  border-radius: 50px;
  background-size: 60%;
  background-position: 50% 50%;
`;

// eslint-disable-next-line react/prop-types
const Card = ({ cardType }) => (
  <StyledWrapper>
    <InnerWrapper activeColor={cardType}>
      <StyledHeading>Hello Konrad</StyledHeading>
      <DateInfo>3 days</DateInfo>
      {cardType === 'twitter' && <StyledAvatar src='https://source.unsplash.com/random' />}
      {cardType === 'article' && <StyledLinkButton src='https://youtube.com/apple' />}
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

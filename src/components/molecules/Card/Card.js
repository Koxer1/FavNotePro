/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Heading from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import LinkIcon from '../../../assets/icons/link.svg';

const StyledWrapper = styled.div`
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
  border: 5px solid ${({ theme }) => theme.twitters};
  border-radius: 50px;
  right: 20px;
  top: 10px;
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
// eslint-disable-next-line no-undef
class Card extends Component {
  state = {
    redirect: false,
  };

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const { id, cardType, title, created, image, articleUrl, content } = this.props;

    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.redirect) {
      return <Redirect to={`${cardType}/${id}`} />;
    }
    return (
      <StyledWrapper onClick={this.handleCardClick}>
        <InnerWrapper activeColor={cardType}>
          <StyledHeading>{title}</StyledHeading>
          <DateInfo>{created}</DateInfo>
          {cardType === 'twitters' && <StyledAvatar src={image} />}
          {cardType === 'articles' && <StyledLinkButton href={articleUrl} />}
        </InnerWrapper>
        <InnerWrapper flex>
          <Paragraph>{content}</Paragraph>
          <Button secondary>Remove</Button>
        </InnerWrapper>
      </StyledWrapper>
    );
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  cardType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  image: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
};

Card.defaultProps = {
  cardType: 'notes',
  image: null,
  articleUrl: null,
};

export default Card;

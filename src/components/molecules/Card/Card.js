/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeItem as removeItemAction } from '../../../actions/index';
import Heading from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import LinkIcon from '../../../assets/icons/link.svg';
import withContext from '../../../hoc/withContext';

const StyledWrapper = styled.div`
  width: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template: 0.1fr 1fr;
  margin-bottom: 50px;
  margin-right: 30px;
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
    const {
      id,
      pageContext,
      title,
      created,
      image,
      articleUrl,
      content,
      removeItemAction,
    } = this.props;

    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.redirect) {
      return <Redirect to={`${pageContext}/${id}`} />;
    }
    return (
      <StyledWrapper>
        <InnerWrapper activeColor={pageContext} onClick={this.handleCardClick}>
          <StyledHeading>{title}</StyledHeading>
          <DateInfo>{created}</DateInfo>
          {pageContext === 'twitters' && <StyledAvatar src={image} />}
          {pageContext === 'articles' && <StyledLinkButton target='_blank' href={articleUrl} />}
        </InnerWrapper>
        <InnerWrapper flex>
          <Paragraph>{content}</Paragraph>
          <Button onClick={() => removeItemAction(pageContext, id)} secondary>
            Remove
          </Button>
        </InnerWrapper>
      </StyledWrapper>
    );
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  image: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
};

Card.defaultProps = {
  pageContext: 'notes',
  image: null,
  articleUrl: null,
};
const mapDispatchToProps = (dispatch) => ({
  removeItemAction: (itemType, id) => dispatch(removeItemAction(itemType, id)),
});

export default connect(null, mapDispatchToProps)(withContext(Card));

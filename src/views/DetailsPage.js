import React, { Component } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-unresolved
import { routes } from '../routes/index';
import DetailsTemplate from '../templates/DetailsTemplate';

class DetailsPage extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    pageType: 'notes',
  };

  componentDidMount() {
    const { match } = this.props;

    switch (match.path) {
      case routes.twitter:
        this.setState({ pageType: 'twitters' });
        break;
      case routes.note:
        this.setState({ pageType: 'notes' });
        break;
      case routes.article:
        this.setState({ pageType: 'articles' });
        break;
      default:
        // eslint-disable-next-line no-console
        console.log('Something went wrong with matching paths');
    }
  }

  render() {
    const dummyArticle = {
      id: 1,
      title: 'Wake me up when Vue ends',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      image: 'https://pbs.twimg.com/profile_images/1174375783718166529/WK0LDC2P_400x400.jpg',
      articleUrl: 'https://youtube.com/helloroman',
      created: '1 day',
    };

    const { pageType } = this.state;

    return (
      <DetailsTemplate
        pageType={pageType}
        title={dummyArticle.title}
        created={dummyArticle.created}
        content={dummyArticle.content}
        articleUrl={dummyArticle.articleUrl}
        image={dummyArticle.image}
      />
    );
  }
}

DetailsPage.propTypes = {
  match: PropTypes.string.isRequired,
};

export default DetailsPage;

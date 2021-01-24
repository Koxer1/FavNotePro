/* eslint-disable import/extensions */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from '../templates/GridTemplate';
import Card from '../components/molecules/Card/Card';
import withContext from '../hoc/withContext';

const Articles = ({ articles }) => (
  <GridTemplate pageContext='articles'>
    {articles.map((article) => (
      <Card pageContext='articles' key={article.id} {...article} />
    ))}
  </GridTemplate>
);

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      articleUrl: PropTypes.string,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Articles.defaultProps = {
  articles: [],
};

const mapStateToProps = ({ articles }) => ({ articles });

export default withContext(connect(mapStateToProps)(Articles));

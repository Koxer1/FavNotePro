import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from '../templates/GridTemplate';
import Card from '../components/molecules/Card/Card';
import withContext from '../hoc/withContext';

const Twitters = ({ twitters }) => (
  <GridTemplate pageContext='twitters'>
    {twitters.map((article) => (
      <Card cardType='twitters' key={twitters.id} {...article} />
    ))}
  </GridTemplate>
);

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      twitterName: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Twitters.defaultProps = {
  twitters: [],
};

const mapStateToProps = ({ twitters }) => ({ twitters });

export default withContext(connect(mapStateToProps)(Twitters));

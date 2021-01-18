/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import GridTemplate from '../templates/GridTemplate';
import Card from '../components/molecules/Card/Card';

const Notes = ({ notes }) => (
  <GridTemplate pageType='notes'>
    {notes.map((article) => (
      <Card cardType='notes' key={notes.id} {...article} />
    ))}
  </GridTemplate>
);

const mapStateToProps = ({ notes }) => ({ notes });

export default connect(mapStateToProps)(Notes);

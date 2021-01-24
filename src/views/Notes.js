/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import GridTemplate from '../templates/GridTemplate';
import Card from '../components/molecules/Card/Card';
import withContext from '../hoc/withContext';

const Notes = ({ notes }) => (
  <GridTemplate pageContext='notes'>
    {notes.map((article) => (
      <Card pageContext='notes' key={notes.id} {...article} />
    ))}
  </GridTemplate>
);

const mapStateToProps = ({ notes }) => ({ notes });

export default withContext(connect(mapStateToProps)(Notes));

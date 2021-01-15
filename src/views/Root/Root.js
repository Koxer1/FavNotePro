import React from 'react';
import Card from '../../components/molecules/Card/Card';
import MainTemplate from '../../templates/MainTemplate';

const Root = () => (
  <MainTemplate>
    <>
      <Card />
      <Card cardType='twitter' />
      <Card cardType='article' />
    </>
  </MainTemplate>
);

export default Root;

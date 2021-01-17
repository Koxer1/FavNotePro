import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate';
import Notes from './Notes';
import Twitters from './Twitters';
import Articles from './Articles';
import DetailsPage from './DetailsPage';
import { routes } from '../routes/index';
// import Sidebar from '../components/organisms/Sidebar/Sidebar';
// import Card from '../components/molecules/Card/Card';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path={routes.home} render={() => <Redirect to='/notes' />} />
        <Route path={routes.note} component={DetailsPage} />
        <Route path={routes.notes} component={Notes} />
        <Route path={routes.twitter} component={DetailsPage} />
        <Route path={routes.twitters} component={Twitters} />
        <Route path={routes.article} component={DetailsPage} />
        <Route path={routes.articles} component={Articles} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;

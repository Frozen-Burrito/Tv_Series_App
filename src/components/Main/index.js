import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Series from '../../containers/Series';
import SeriesDetails from '../../containers/SeriesDetails';

const Main = props => (
    <Switch>
        <Route exact path="/" component={Series} />
        <Route exact path="/series/:id" component={SeriesDetails} />
    </Switch>
);

export default Main;
import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import DashboardContainer from '../containers/DashboardContainer';


class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={DashboardContainer} />
                    {/* <Route exact path='/dashboard' component={DashboardContainer} /> */}
                </Switch>
            </Router>
        )
    }
}
export default AppRouter;
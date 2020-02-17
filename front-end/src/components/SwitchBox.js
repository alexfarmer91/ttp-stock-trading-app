import React from 'react';
import GreetingScreen from './GreetingScreen'
import { Route, Switch, Redirect } from 'react-router-dom'

class SwitchBox extends React.Component {

    redirectIfLoggedIn = () => {
        if (!this.props.session) {
            return <GreetingScreen />
        } else {
            return <Redirect to="/trade" />
        }
    }

    render() {
        return (
            <Switch>
                <Route exact path="/users/:id/portfolio" render={this.props.renderProfilePage} />
                <Route exact path="/users/:id/profile" render={this.props.renderUserPage} />
                <Route exact path="/trade/:id" render={this.props.renderNewCarForm} />
                <Route exact path="/trade/" render={this.props.renderNewCarForm} />
                <Route exact path="/" render={this.redirectIfLoggedIn} />
            </Switch>)
    }
}

export default SwitchBox;
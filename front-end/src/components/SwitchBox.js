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
                <Route path="/discover" render={this.props.renderDiscoverPage} />
                <Route path="/profile" render={this.props.renderProfilePage} />
                <Route exact path="/cars/:id" render={this.props.renderCar} />
                <Route exact path="/users/:id" render={this.props.renderUserPage} />
                <Route path="/add-car/" render={this.props.renderNewCarForm} />
                <Route exact path="/" render={this.redirectIfLoggedIn} />
            </Switch>)
    }
}

export default SwitchBox;
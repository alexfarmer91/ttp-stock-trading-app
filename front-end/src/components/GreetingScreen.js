import React from 'react';
import LoginMenu from './LoginMenu'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import PropTypes from 'prop-types';

export default class GreetingScreen extends React.Component {
    state = {
        formType: "menu"
    }

    renderLoginMenu = () => {
        return <LoginMenu changeToLogin={this.changeToLogin} changeToSignup={this.changeToSignup} />
    }

    renderGreetingScreen = () => {
        switch (this.state.formType) {
            case "login":
                return <LoginForm backToMenu={this.backToMenu} />
            case "signup":
                return <SignupForm backToMenu={this.backToMenu} />
            case "menu":
                return this.renderLoginMenu()
            default:
                console.log("Invalid form type requested")
                this.setState({
                    formType: "menu"
                })
                return this.renderLoginMenu()
        }
    }

    changeToLogin = () => {
        this.setState({
            formType: "login"
        })
    }

    changeToSignup = () => {
        this.setState({
            formType: "signup"
        })
    }

    backToMenu = () => {
        this.setState({
            formType: "menu"
        })
    }

    render() {
        return
    }

}

GreetingScreen.propTypes = {
    formType: PropTypes.oneOf([
        "signup", "login", "menu"
    ])
};
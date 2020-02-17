import React from 'react';
import { Button, Container, Form, Input } from 'semantic-ui-react'

export default class SignupForm extends React.Component {
    state = {
        email: "",
        firstName: "",
        lastName: "",
        password: ""
    }
    emailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    lastNameChange = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    firstNameChange = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    passwordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:3000/users', {
            method: "POST",
            body: JSON.stringify({
                email: this.state.email,
                password_digest: this.state.password,
                first_name: this.state.firstName,
                last_name: this.state.lastName,
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(r => r.json())
            .then(user => {
                this.props.setToken(user)
            })
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Input style={{ width: '10%' }} label="Email" onChange={this.emailChange} type="text" /><br></br>

                <Input style={{ width: '10%' }} label="Fist Name" onChange={this.firstNameChange} type="text" /><br></br>

                <Input style={{ width: '10%' }} label="Last Name" onChange={this.lastNameChange} type="text" /><br></br>

                <Input style={{ width: '10%' }} label="Password" onChange={this.passwordChange} type="password" /><br></br>

                <Button onClick={this.props.backToMenu} >Back</Button>
                <input type="submit" value="Sign Up" class="ui blue button" />
            </Form>
        )
    }
}
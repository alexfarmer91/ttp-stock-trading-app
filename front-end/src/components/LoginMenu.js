import React from 'react';
import { Button, Container } from 'semantic-ui-react'

const LoginMenu = (props) => {
    return (<Container>
        <Button onClick={props.changeToLogin} >Login</Button>
        <Button onClick={props.changeToSignup} >Signup</Button>
    </Container>)
}

export default LoginMenu;
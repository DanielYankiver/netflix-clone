import React, { useState } from 'react'
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { Form } from '../components';


export default function SignIn() {
    const [emailAddress, setEmailAddress] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState('');
    
    const isInvalid = password === '' || emailAddress === '';

    const handleSignIn = (event) => {
        event.preventDefault();

        // firebase work here 
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignIn} method="POST">
                        <Form.Input
                            placeholder="Email address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <Form.Input
                            type="password"
                            placeholder="Password"
                            autoComplete="off"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isInvalid} type="submit">
                            Sign In 
                        </Form.Submit>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer></FooterContainer>
        </>
    );
}
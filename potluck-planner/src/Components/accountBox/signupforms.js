import React from 'react';
import { BoxContainer, FormContainer, Input, SubmitButton } from './common';

export function SignupForms(props) {
    return (
        <BoxContainer>
            <FormContainer>
                <Input type="username" placeholder="username" />
                <Input type="password" placeholder="password" />
                <SubmitButton type="submit">Sign Up</SubmitButton>
            </FormContainer>
        </BoxContainer>
    )
}
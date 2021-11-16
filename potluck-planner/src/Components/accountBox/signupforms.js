import React, { useState } from 'react';
import { BoxContainer, FormContainer, Input, SubmitButton } from './common';
import axios from 'axios';

  //Initial Input Values
  const initialSignUp = {
    username: '',
    password: ''
}

export function SignupForms(props) {
    
    //Post Return Message 
    const [ message, setMessage ] = useState('')
    //Initializing State Input Values
    const [ signUpValues, setSignUpValues ] = useState(initialSignUp)

    const onChange = (evt) => {
      const { name, value} = evt.target

        setSignUpValues({...signUpValues, [name]: value})
    }
    
    const onSubmit = (evt) => {
        evt.preventDefault()

        axios.post('https://buildweek4unit.herokuapp.com/api/users/register', {username: signUpValues.username, password: signUpValues.password})
            .then(res => {
                console.log(res)
                res.statusText === 'Created' ? setMessage('Welcome!') : setMessage('We are having some difficulties right now, please try again later!')
               
            })
            .catch(err => {
                console.log('hello this is your ', err)
                //We get an error 401 from using an already created name
                setMessage('Sorry, your username may be taken!')
            })
    }
    
    return (
        <BoxContainer>
            <FormContainer>
                {message}
                <form onSubmit={onSubmit}> 
                    <Input type="username" placeholder="username" name='username' onChange={onChange} />
                    <Input type="password" placeholder="password" name='password' onChange={onChange} />
                    <SubmitButton type="submit">Sign Up</SubmitButton>
                </form>
            </FormContainer>
        </BoxContainer>
    )
}
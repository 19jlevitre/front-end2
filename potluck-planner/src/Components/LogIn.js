/*Imports*/ 
import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router";


const initialLogin = {
    username: '',
    password: ''
}
const Wrapper = styled.div`
text-align: center;
form {
    background-color: #d9d9d9;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    justify-content: space-around;
    height: 200px;
    width: 50%;
    margin: auto;
    padding: 10px;
    border: solid black 0.5px;
    
}
.btn {
    border-radius: 5px;
    margin: auto;
    height: fit-content;
    width: 20%;
    background-color: #e6ac00;
    font-size: 1.5rem;
}
h2 {
    font-size: 3rem;
    height: 300px;
    width: 40%;
    color: #e6ac00;
    /* background-image: url('https://media.istockphoto.com/photos/holiday-turkey-dinner-picture-id836012728'); */
    margin: 10px auto;

    
}
`


/*Form Function*/
export default function Login() {

    const [ loginValues, setLoginValues ] = useState(initialLogin)
    const [ message, setMessage ] = useState('')
    //Initializing Navigate
    const navigate = useNavigate();

    function onChange(evt) {
        const { name, value } = evt.target;
        setLoginValues({...loginValues, [name]: value});
    }
    
    function onSubmit(evt) {
        evt.preventDefault();
        
        axios.post('https://buildweek4unit.herokuapp.com/api/users/login', {username: loginValues.username, password: loginValues.password})
            .then(res => {
                console.log(res)
                setMessage(res.data.message)
                setTimeout(() => res.data.message.includes('welcome') ? navigate('/profile') : console.log('login failed'), 1000)
            })
            .catch(err => {
                console.log('hello this is your ', err)
            })
    }
   

    return(
    
        <Wrapper>
            <h1> Please Enter You Login Information </h1>
            <p>{message}</p>
            <form onSubmit={onSubmit}>
                <label> Username
                    <input
                        type='username'
                        name='username'
                        onChange={onChange}
                        className='name'
                    />
                </label>
                <label> Password
                    <input
                        type='password'
                        name='password'
                        onChange={onChange}
                        className='pass'
                    />
                </label>
                <div className='submission'>
                        <input
                            id='submitBtn'
                            type='submit'
                            value='Log In'
                            className='btn'
                        />
                </div>
            </form>
            <h2>Potluck Pals, <br/>
                Schedule Now!
            </h2>
        </Wrapper> 


    )

}

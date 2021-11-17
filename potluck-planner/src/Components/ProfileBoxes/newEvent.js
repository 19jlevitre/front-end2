import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const NewForm = styled.div`
    display: none;
`
const showNewForm = styled.div`
    display: show;
    form{
        display: flex;
        flex-direction: column;
    }
`
const userForm = styled.div`
    display: show;
`

const initialEvent = {
    name: '',
    host: '',
    date: '',
    time: '',
    location: ''
}


export default function NewEvent() {

    const [RealValue, setRealValue] = useState(NewForm)
    const [ userInviteStyle, setUserInviteStyle ] = useState(NewForm)
    const [ eventValues, setEventValues ] = useState(initialEvent)
    const [ message, setMessage ] = useState('')

    const onClick = () => {
      setRealValue(showNewForm)
    }

    const clicker = () => {
        setUserInviteStyle(userForm)
    }

    const onChange = (evt) => {
        const { name, value } = evt.target 
        setEventValues({...eventValues, [name]: value})
    }

    const onSubmit = (evt) => {
        evt.preventDefault()

        axios.post('https://buildweek4unit.herokuapp.com/api/potlucks', {...eventValues})
            .then((res) => {
                console.log(res)
                res.statusText === 'Created' ? setMessage('Potluck Created! Now invite your Users!') : setMessage('There was an issue with creating your Potluck!')
            })
            .catch((err) => {
                console.log('this is your ', err)
                setMessage("Oops, something bad happened. Try again later!")
            })
    }

    return(
        <div>
            
            <label>
                <button onClick={onClick}>+</button>
                New Event
            </label>
            <RealValue>
                <form onSubmit={onSubmit}>
                    <label> Name
                        <input 
                            type='text'
                            name='name'
                            onChange={onChange}
                        />
                    </label>
                    <label> Host
                        <input
                            type='text'
                            name='host'
                            onChange={onChange}
                        />
                    </label>
                    <label> Date
                        <input
                            type='date'
                            name='date'
                            onChange={onChange}
                        />
                    </label>
                    <label> Time
                         <input
                            type='time'
                            name='time'
                            onChange={onChange}
                        />
                    </label>
                    <label>Location
                        <input
                            type='text'
                            name='location'
                            onChange={onChange}
                        />
                    </label>
                    <button type='submit' onClick={clicker}>Create Event</button>
                </form>
            </RealValue>
        
        </div>    
    )
}
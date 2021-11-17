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

const initialEvent = {
    name: '',
    host: '',
    date: '',
    time: '',
    location: ''
}


export default function NewEvent() {

    const [RealValue, setRealValue] = useState(NewForm)
    const [ eventValues, setEventValues ] = useState(initialEvent)

    const onClick = () => {
      setRealValue(showNewForm)
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

            })
            .catch((err) => {
                console.log('this is your ', err)
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
                    <button type='submit'>Create Event</button>
                </form>
            </RealValue>
        
        </div>    
    )
}
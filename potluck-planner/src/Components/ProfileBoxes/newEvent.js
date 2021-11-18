import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLinkClickHandler } from "react-router-dom";
import styled from "styled-components";
import AddUser from "./addusers";

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

const initialID = 1;


export default function NewEvent() {
    
    const [clicked, setClicked] = useState(false);
    const [RealValue, setRealValue] = useState(NewForm)
    const [ eventValues, setEventValues ] = useState(initialEvent)
    const [ message, setMessage ] = useState('')
    const [ potluck, setPotluck ] = useState(initialID);
    
    const onClick = () => {
      setRealValue(showNewForm)
    }

    const cancel = () => {
        setRealValue(NewForm)
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
                setPotluck(res.data.potluck_id)
                setClicked(true)
                res.statusText === 'Created' ? setMessage('Your Event has been created! Now please invite your guests!') : setMessage('There was an issue with creating your Potluck!' )
            })
            .catch((err) => {
                console.log('this is your post ', err)
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
                {message}
                <button onClick={cancel}> Cancel </button>
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
                {clicked ? <AddUser ID={potluck}/> : clicked}
            </RealValue>
        
        </div>    
    )
}
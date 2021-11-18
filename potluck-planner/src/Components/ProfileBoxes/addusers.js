import { PinDropSharp } from "@material-ui/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";



export default function AddUser(props) {
    //Id from newEvent.js
    const { ID } = props;
    //Stores the current potluck
    const [ currentEvent, setCurrentEvent ] = useState()
    //Stores entire user list
    const [ users, setUsers ] = useState()
    
    const [ formValue, setFormValue ] = useState('')

    const onChange = (evt) => {
        const { name, value }  = evt.target
        setFormValue({...formValue, [name]: value})
    }

    const clicking = () => {

    }

    useEffect(() => {
        axios.get('https://buildweek4unit.herokuapp.com/api/potlucks')
            .then((res) => {
                console.log('here are the potlucks',res)
                
            })
            .catch((err) => {
                console.log('This is your first get', err)
            })
            axios.get('https://buildweek4unit.herokuapp.com/api/users')
                .then((res) => {
                    console.log(res)
                    setUsers(res.data)
                    setTimeout(() =>  console.log('howdy', users), 1500) 
                })
                .catch((err) => {
                    console.log('here is your user', err)
                })
    }, [])

    useEffect(() => {
        axios.get(`https://buildweek4unit.herokuapp.com/api/potlucks/${ID}`)
            .then((res) => {
                console.log('here is the desired potluck',res)
                setCurrentEvent(res.data) 
            })
            .catch((err) => {
                console.log('This is your second get ', err)
            })
    }, [ID])

    

  
  
    
    return(
        <div>
            <form>
                <label> Invite Users
                <input
                    type='username'
                    name='username'
                    onChange={onChange}
                />
                </label>
                <button type='submit' onClick={clicking}>Invite</button>
            </form>
        </div>
    )
}
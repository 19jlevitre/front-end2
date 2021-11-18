import { PinDropSharp } from "@material-ui/icons";
import axios from "axios";
import React, { useEffect } from "react";



export default function AddUser(props) {

    const { ID } = props;

    useEffect(() => {
        axios.get('https://buildweek4unit.herokuapp.com/api/potlucks')
            .then((res) => {
                console.log('here are the potlucks',res)
            })
            .catch((err) => {
                console.log('This is your first get ', err)
            })
    }, [])

    useEffect(() => {
        axios.get(`https://buildweek4unit.herokuapp.com/api/potlucks/${ID}`)
            .then((res) => {
                console.log('here is the desired potluck',res)
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
                />
                </label>
                <button type='submit'>Invite</button>
            </form>
        </div>
    )
}
import React, { useState } from "react";
import styled from "styled-components";

const NewForm = styled.div`
    display: none;
`
const showNewForm = styled.div`
    display: show;
`


export default function NewEvent() {

    const [ count, setCount ] = useState(0)
    const [RealValue, setRealValue] = useState(NewForm)
    
    const checker = () => {
        if(count === 1) {
            setRealValue(showNewForm)
          }
           setCount(0)
          return RealValue;
          
    }

    const onClick = () => {
        setCount(1)
        console.log(count)
        
   }

    return(
        <div>
            
            <label>
                <button onClick={onClick}>+</button>
                New Event
            </label>
            <RealValue>
                <h2>Hello</h2>
            </RealValue>
        
        </div>    
    )
}
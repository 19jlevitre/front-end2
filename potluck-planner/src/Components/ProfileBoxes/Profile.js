import React from "react";
import PendingBox from "./pendingBox";
import NewEvent from "./newEvent";
import ConfirmedBox from './confirmed';
import styled from "styled-components";

const ProfilePage = styled.div`
    .content{
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        background-image: linear-gradient(grey, white);
    }
    .left-events{
        display: flex;
        flex-direction: column;
        margin: 25px;
    }
    h1{
        text-align: center;
    }
    h2{
        font-size: 2 rem;
    height: 25px;
    width: 60%;
    color: #e6ac00;
    margin: 10px auto;
    }
    .right-new{
        display: flex;
        flex-direction: column;
        margin: 25px;

    }
    h3{
        font-weight: 100;
    }
    
`


export default function Profile (){
    return(
        <ProfilePage>
            <h1> Welcome, $User </h1>
            <div className='content'>
                <div className='left-events'>
                    <PendingBox/>
                    <ConfirmedBox/>
                </div>
                <div className='right-new'>
                    <NewEvent/>
                </div>
            </div>   
        </ProfilePage>  
    )
}
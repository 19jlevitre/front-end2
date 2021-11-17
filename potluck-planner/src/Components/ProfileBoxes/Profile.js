import React from "react";
import PendingBox from "./pendingBox";
import NewEvent from "./newEvent";
import ConfirmedBox from './confirmed';
import styled from "styled-components";

const ProfilePage = styled.div`
    .content{
        display: flex;
        justify-content: space-between;
    }
    .left-events{
        display: flex;
        flex-direction: column;
    }
    h1{
        text-align: center;
    }

`


export default function Profile (){
    return(
        <ProfilePage>
            <h1> Welcome, User </h1>
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
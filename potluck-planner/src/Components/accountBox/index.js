import React from 'react';
import styled from 'styled-components';
import { SignupForms } from './signupforms';

const BoxContainer = styled.div`
    width: 280px;
    min-height: 550px;
    display: flex;
    flex-direction: column;
    border-radius: 19px;
    background-color: #fff;
    box-shadow: 0 0 3.5px rgba(15, 15, 15, 0.28);
    position: relative;
    overflow: hidden;
    `;

const TopContainer = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 1.8em;
    padding-bottom: 5em;
    `;

const BackDrop = styled.div`
    width: 160%;
    height: 550px;
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    transform: rotate(60deg);
    top: -290px;
    left: -70px;
    background: rgb(241,196,15);
    background: linear-gradient(90deg, rgba(241,196,15,1) 20%, rgba(243,172,18,1) 100%);
    `;

    const HeaderContainer = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        `;

    const HeaderText = styled.h2`
        font-size: 40px;
        font-weight: 600;
        line-height: 1.24;
        color: #fff;
        z-index: 10;
        margin: 0;
        margin-bottom: 3px;
        `;

    const SmallText = styled.h5`
        color: #fff;
        font-weight: 500;
        font-size: 15px;
        z-index: 10;
        margin: 0;
        margin-top: 7px;
        `;

    const InnerContainer = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 0 1.0rem;
        `;
    //Styling that was in App I moved below, should still work
    const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `;
    export function AccountBox(props) {
        return (
            <AppContainer>
                  <BoxContainer>
                    <TopContainer>
                        <BackDrop />
                        <HeaderContainer>
                            <HeaderText>Sign</HeaderText>
                            <HeaderText>Up</HeaderText>
                            <SmallText>Please Sign Up to Continue!</SmallText>
                        </HeaderContainer>
                    </TopContainer>
                    <InnerContainer>
                        <SignupForms />
                    </InnerContainer>
                </BoxContainer>
            </AppContainer>
    )
}
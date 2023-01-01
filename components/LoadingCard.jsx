import React from 'react'
import styled, { keyframes } from 'styled-components'


const Loading = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
`

const loader = keyframes`
    0% {
            top: 5em;
            left: 5em;
            width: 0;
            height: 0;
            opacity: 0;
        }
    4% {
            top: 5em;
            left: 5em;
            width: 0;
            height: 0;
            opacity: 0;
        }
    5% {
            top: 5em;
            left: 5em;
            width: 0;
            height: 0;
            opacity: 1;
        }
    100% {
            top: 0px;
            left: 0px;
            width: 10em;
            height: 10em;
            opacity: 0;
        }
`

const Preloader = styled.div`
    display: inline-block;
    position: relative;
    width: 50%;
    height: 50%;

    & div {
        position: absolute;
        border: 6px solid #000;
        opacity: 1;
        border-radius: 50%;
        animation: ${loader} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }

    & div:nth-child(2) {
        animation-delay: -0.5s;
    }

    
`

const LoadingCard = () => {
  return (
        <Loading>
            <h1>Loading...</h1>
            <Preloader>
                <div></div>
                <div></div>
            </Preloader>
        </Loading>
  )
}

export default LoadingCard
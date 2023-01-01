import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
    border-radius: 999px;
    box-shadow: #5E5DF0 0 10px 20px -10px;
    box-sizing: border-box;
    background: #5E5DF0;
    color: #FFFFFF;
    cursor: pointer;
    font-family: Inter,Helvetica,"Apple Color Emoji","Segoe UI Emoji",NotoColorEmoji,"Noto Color Emoji","Segoe UI Symbol","Android Emoji",EmojiSymbols,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans",sans-serif;
    font-size: 1em;
    font-weight: 700;
    line-height: 1.5em;
    opacity: 1;
    outline: 0 solid transparent;
    padding: 8px 18px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: 100%;
    word-break: break-word;
    border: 0;
    margin: 1em;
    &:hover{
      opacity: 0.7;
    }    
`

const StartCard = ({ setCategory }) => {
    //Set selected category:
    const setFrontEnd = () => {
        setCategory('front-end')
    }

    const setCss = () => {
        setCategory('css')
    }

  return (
    <div>
        <h1>⚡Web Dev Quiz⚡</h1>
        <h2>Select category:</h2>
        <Btn onClick={setCss}>CSS</Btn>
        <Btn onClick={setFrontEnd}>Front-End</Btn>
    </div>
  )
}

export default StartCard
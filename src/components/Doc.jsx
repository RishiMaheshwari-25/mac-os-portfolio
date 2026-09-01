import React from 'react'
import './dock.scss'
import Note from './windows/Note'
import { resume } from 'react-dom/server'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Doc = ({windowState,setWindowState}) => {
  return (
    <footer className="dock">
        <div  onClick={()=>{setWindowState(state=>({...state,github:true}))}}className="icon github" ><i className="ri-github-fill"></i></div>
         <div 
         onClick={()=>{setWindowState(state=>({...state,note:true}))}}className="icon note"><i className="ri-notion-fill"></i></div>
          <div 
          onClick={()=>{setWindowState(state=>({...state,resume:true}))}}className="icon pdf"><i className="ri-file-pdf-line"></i></div>
          <div  
          onClick={()=>{window.open("https://calendar.google.com/calendar/u/0/r?pli=1")}}className="icon calender"><i className="ri-calendar-2-line"></i></div>
           <div onClick={()=>{setWindowState(state=>({...state,spotify:true}))}}className="icon spotify"><i className="ri-spotify-fill"></i></div>
           <div 
           onClick={()=>{window.location.href="mailto:hello@rishimaheshwari.com"}}className="icon mail"><i className="ri-mail-ai-fill"></i></div>
           <div 
           onClick={()=>{window.open("https://www.linkedin.com/in/rishi-maheshwari-295313322","_blank")}}className="icon link"><i className="ri-link"></i></div>
           <div onClick={()=>{setWindowState(state=>({...state,cli:true}))}}className="icon cli"><i className="ri-terminal-fill"></i></div>
    </footer>
  )
}

export default Doc

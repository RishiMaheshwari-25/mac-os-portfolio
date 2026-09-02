import {useEffect, useState} from 'react'
import MacWindow from './MacWindow'
import "./note.scss"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Note = ({ windowName, setWindowState, minimized, onMinimize, onFocus }) => {
    const [markdown,setMarkdown] = useState(null)
    useEffect(()=>{
        fetch("/note.txt")
        .then(res=>res.text())
        .then(text=>setMarkdown(text))

    },[])
  return (
    <MacWindow
    windowName={windowName}
            
            setWindowState={setWindowState}
            onMinimize={onMinimize}
            onFocus={onFocus}
            minimized={minimized}>
      
        <div className="note-window">
                { markdown ? <SyntaxHighlighter language='typescript' style={atelierDuneDark} >{markdown}</SyntaxHighlighter> : <p>Loading...</p> }
            </div>
    </MacWindow>
  )
}

export default Note

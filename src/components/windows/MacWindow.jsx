import {Rnd} from 'react-rnd'
import { motion } from 'framer-motion'
import "./window.scss"

const MacWindow = ({children,width="40vw",height="40vh" ,windowName,setWindowState,zIndex=20,minimized,onMinimize,onFocus}) => {
  return (
        <Rnd
            default={{
                width: width,
                height: height,
                x: 300,
                y: 200
            }}
            minWidth={320}
            minHeight={200}
            enableResizing
            onMouseDown={onFocus}
            style={{ zIndex }}
        >
    <motion.div className="window" initial={{ opacity:0, scale:.88, y:18 }} animate={minimized ? { opacity:0, scale:.18, y:420, pointerEvents:'none' } : { opacity:1, scale:1, y:0 }} transition={{ duration:.32 }}>
    <div className="nav">
        <div className="dots">
            <div 
            onClick={()=>{setWindowState(state=>({...state,[windowName]:false}))}}
            className="dot red"></div>
            <div onClick={onMinimize} className="dot yellow"></div>
            <div onClick={() => document.documentElement.requestFullscreen?.()} className="dot green"></div>
        </div>
        <div className="title"><p>rishimaheshwari-zsh</p></div>
    </div>
    <div className="main-content">
        {children}
    </div>
    </motion.div>
   </Rnd>
  )
}

export default MacWindow

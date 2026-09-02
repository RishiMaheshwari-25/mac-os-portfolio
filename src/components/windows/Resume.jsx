import MacWindow from './MacWindow'
import "./resume.scss"

const Resume = ({ windowName, setWindowState, minimized, onMinimize, onFocus }) => {
  return (
    <MacWindow
      windowName={windowName}
      setWindowState={setWindowState}
      onMinimize={onMinimize}
      onFocus={onFocus}
      minimized={minimized}
    >
        <div className="resume-window">
             <iframe src="/resume.pdf" frameborder="0"></iframe>
        </div>
       
    </MacWindow>
  )
}

export default Resume

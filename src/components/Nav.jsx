import "./nav.scss"
import DateTime from './DateTime'

const Nav = () => {
  return (
   <nav>
    <div className="left">
        <div className="apple-icon"><i className="ri-apple-fill"></i>
        </div>
        <div className="nav-item"><p>Rishi Maheshwari</p></div>
    <div className="nav-item"><p>File</p></div>
    <div className="nav-item"><p>Window</p></div>
    <div className="nav-item"><p>Terminal</p></div>
    </div>
    
    <div className="right">
        <div className="nav-icon"><i className="ri-wifi-line"></i></div>
    <div className="nav-item">
        <DateTime/>
    </div>
    </div>
   </nav>
  )
}

export default Nav

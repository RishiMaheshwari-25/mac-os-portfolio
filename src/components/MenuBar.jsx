import { useEffect, useState } from 'react'
import DateTime from './DateTime'
import './menu-bar.scss'

const menus = {
  File: ['About Me.txt', 'Resume.pdf', 'Close Window'],
  Window: ['Minimize', 'Tile Windows', 'Fullscreen'],
  Terminal: ['New Window', 'Clear Screen'],
}

const MenuBar = ({ onOpen, onClose, onMinimize, onTile, onFullscreen, onClearTerminal, onSpotlight, soundEnabled, setSoundEnabled }) => {
  const [activeMenu, setActiveMenu] = useState(null)

  useEffect(() => {
    const closeMenus = (event) => {
      if (!event.target.closest('.menu-popover') && !event.target.closest('.menu-trigger')) setActiveMenu(null)
    }
    document.addEventListener('click', closeMenus)
    return () => document.removeEventListener('click', closeMenus)
  }, [])

  const choose = (menu, item) => {
    setActiveMenu(null)
    if (item === 'About Me.txt') onOpen('note')
    if (item === 'Resume.pdf') onOpen('resume')
    if (item === 'Close Window') onClose()
    if (item === 'Minimize') onMinimize()
    if (item === 'Tile Windows') onTile()
    if (item === 'Fullscreen') onFullscreen()
    if (item === 'New Window') onOpen('cli')
    if (item === 'Clear Screen') onClearTerminal()
  }

  return (
    <nav className="menu-bar">
      <div className="menu-left">
        <button className="apple-button" aria-label="Open Spotlight" onClick={onSpotlight}><i className="ri-apple-fill" /></button>
        <strong>Rishi Maheshwari</strong>
        {Object.keys(menus).map((menu) => (
          <div className="menu-wrap" key={menu}>
            <button className={`menu-trigger ${activeMenu === menu ? 'selected' : ''}`} onClick={() => setActiveMenu(activeMenu === menu ? null : menu)}>{menu}</button>
            {activeMenu === menu && <div className="menu-popover">
              {menus[menu].map((item) => <button key={item} onClick={() => choose(menu, item)}>{item}<span>{item === 'About Me.txt' ? '⌘1' : ''}</span></button>)}
            </div>}
          </div>
        ))}
      </div>
      <div className="menu-right">
        <button className="status-button" aria-label="Toggle sound effects" onClick={() => setSoundEnabled(!soundEnabled)}><i className={soundEnabled ? 'ri-volume-up-line' : 'ri-volume-mute-line'} /></button>
        <span className="status-icon wifi"><i className="ri-wifi-line" /></span>
        <span className="status-icon battery"><i className="ri-battery-2-charge-line" /></span>
        <button className="clock-button" onClick={onSpotlight}><DateTime /></button>
      </div>
    </nav>
  )
}

export default MenuBar

import { useState } from 'react'
import './desktop.scss'
import { wallpapers } from './wallpaperData'

const icons = [
  { id: 'resume', label: 'Resume.pdf', icon: 'ri-file-pdf-fill' },
  { id: 'note', label: 'About Me.txt', icon: 'ri-file-text-fill' },
]

const Desktop = ({ onOpen, selectedWallpaper, onSelectWallpaper }) => {
  const [selected, setSelected] = useState(null)
  const [contextMenu, setContextMenu] = useState(null)
  return <section className="desktop-surface" onContextMenu={(event) => { event.preventDefault(); setContextMenu({ x: event.clientX || 20, y: event.clientY || 60 }) }} onClick={() => setContextMenu(null)} aria-label="Desktop">
    <div className="desktop-icons" aria-label="Desktop files">
    {icons.map((item) => <button key={item.id} className={`desktop-file ${selected === item.id ? 'selected' : ''}`} onClick={() => setSelected(item.id)} onDoubleClick={() => onOpen(item.id)}>
      <span className={`file-icon ${item.id}`}><i className={item.icon} /></span><span>{item.label}</span>
    </button>)}
    </div>
    {contextMenu && <div className="desktop-context-menu" style={{ left: Math.min(contextMenu.x, window.innerWidth - 250), top: Math.min(contextMenu.y, window.innerHeight - 285) }} onClick={(event) => event.stopPropagation()}>
      <strong>Desktop</strong><span className="context-divider" />
      <button className={!selectedWallpaper ? 'context-selected' : ''} onClick={() => { onSelectWallpaper(null); setContextMenu(null) }}>Automatic wallpaper <small>{!selectedWallpaper ? '✓' : ''}</small></button>
      <span className="context-label">Choose a wallpaper</span>
      <div className="wallpaper-choices">{wallpapers.map((wallpaper) => <button key={wallpaper.id} className={selectedWallpaper === wallpaper.id ? 'choice-selected' : ''} onClick={() => { onSelectWallpaper(wallpaper.id); setContextMenu(null) }}><img src={wallpaper.src} alt="" /><span>{wallpaper.label}</span></button>)}</div>
    </div>}
  </section>
}

export default Desktop

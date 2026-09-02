import {useEffect, useState} from 'react'
import './app.scss'
import { AnimatePresence, motion } from 'framer-motion'
import MenuBar from './components/MenuBar'
import Dock from './components/Dock'
import Desktop from './components/Desktop'
import Spotlight from './components/Spotlight'
import Wallpaper from './components/Wallpaper'
import Github from './components/windows/Github'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'

const App = () => {
  const [windowState,setWindowState] = useState({ github:false, note:false, resume:false, spotify:false, cli:false })
  const [minimized, setMinimized] = useState({})
  const [zOrder, setZOrder] = useState(['github', 'note', 'resume', 'spotify', 'cli'])
  const [spotlight, setSpotlight] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(false)
  const [booting, setBooting] = useState(true)
  const [selectedWallpaper, setSelectedWallpaper] = useState(null)
  useEffect(() => {
    const timer = setTimeout(() => setBooting(false), 1400)
    const onShortcut = (event) => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); setSpotlight(true) } }
    window.addEventListener('keydown', onShortcut)
    return () => { clearTimeout(timer); window.removeEventListener('keydown', onShortcut) }
  }, [])
  const playClick = () => {
    if (!soundEnabled) return
    const context = new AudioContext(); const oscillator = context.createOscillator(); const gain = context.createGain()
    oscillator.frequency.value = 520; gain.gain.setValueAtTime(.035, context.currentTime); gain.gain.exponentialRampToValueAtTime(.001, context.currentTime + .07)
    oscillator.connect(gain).connect(context.destination); oscillator.start(); oscillator.stop(context.currentTime + .07)
  }
  const openWindow = (name) => { setWindowState((state) => ({ ...state, [name]: true })); setMinimized((state) => ({ ...state, [name]: false })); setZOrder((order) => [...order.filter((item) => item !== name), name]); playClick() }
  const closeWindow = (name) => setWindowState((state) => ({ ...state, [name]: false }))
  const minimizeWindow = (name) => setMinimized((state) => ({ ...state, [name]: true }))
  const frontWindow = (name) => setZOrder((order) => [...order.filter((item) => item !== name), name])
  const activeWindow = [...zOrder].reverse().find((name) => windowState[name] && !minimized[name])
  const commonProps = (name) => ({ windowName:name, setWindowState, minimized:minimized[name], zIndex:20 + zOrder.indexOf(name), onMinimize:() => minimizeWindow(name), onFocus:() => frontWindow(name) })
  return (
    <main>
      <Wallpaper selectedWallpaper={selectedWallpaper} />
      <AnimatePresence>{booting && <motion.div className="boot-screen" initial={{ opacity:1 }} exit={{ opacity:0 }}><i className="ri-apple-fill" /><div className="boot-progress"><motion.span initial={{ width:0 }} animate={{ width:'100%' }} transition={{ duration:1.2 }} /></div><small>Starting portfolio...</small></motion.div>}</AnimatePresence>
      <MenuBar onOpen={openWindow} onClose={() => activeWindow && closeWindow(activeWindow)} onMinimize={() => activeWindow && minimizeWindow(activeWindow)} onTile={() => setMinimized({})} onFullscreen={() => activeWindow && frontWindow(activeWindow)} onClearTerminal={() => openWindow('cli')} onSpotlight={() => setSpotlight(true)} soundEnabled={soundEnabled} setSoundEnabled={setSoundEnabled} />
      <Desktop onOpen={openWindow} selectedWallpaper={selectedWallpaper} onSelectWallpaper={setSelectedWallpaper} />
      {windowState.github && <Github {...commonProps('github')} />}
      {windowState.note && <Note {...commonProps('note')} />}
      {windowState.resume && <Resume {...commonProps('resume')} />}
      {windowState.spotify && <Spotify {...commonProps('spotify')} />}
      {windowState.cli && <Cli {...commonProps('cli')} />}
      <Dock windowState={windowState} onOpen={openWindow} onExternal={(href) => window.open(href, '_blank', 'noopener,noreferrer')} onClickSound={playClick} />
      <Spotlight open={spotlight} onClose={() => setSpotlight(false)} onOpen={openWindow} />
    </main>
  )
}

export default App

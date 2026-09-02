import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './wallpaper.scss'
import { wallpapers } from './wallpaperData'

const getMode = (date) => date.getHours() >= 6 && date.getHours() < 18 ? 'day' : 'night'

const Wallpaper = ({ selectedWallpaper }) => {
  const [date, setDate] = useState(() => new Date())
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const mode = getMode(date)
  const automatic = useMemo(() => wallpapers.find((wallpaper) => wallpaper.mode === mode) || wallpapers[0], [mode])
  const current = selectedWallpaper ? wallpapers.find((wallpaper) => wallpaper.id === selectedWallpaper) || automatic : automatic

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 60000)
    const move = (event) => setOffset({ x: (event.clientX / window.innerWidth - .5) * 5, y: (event.clientY / window.innerHeight - .5) * 5 })
    window.addEventListener('mousemove', move, { passive: true })
    return () => { clearInterval(interval); window.removeEventListener('mousemove', move) }
  }, [])

  return <div className="wallpaper-layer" aria-hidden="true">
    <div className="wallpaper-preload">{wallpapers.map((wallpaper) => <img key={wallpaper.id} src={wallpaper.src} alt="" loading="eager" />)}</div>
    <AnimatePresence mode="sync">
      <motion.div key={current.id} className="wallpaper-image" style={{ x: offset.x, y: offset.y }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.5 }}>
        <img src={current.src} alt="" loading="eager" />
      </motion.div>
    </AnimatePresence>
    <div className="wallpaper-vignette" />
    <div className="wallpaper-noise" />
  </div>
}

export default Wallpaper

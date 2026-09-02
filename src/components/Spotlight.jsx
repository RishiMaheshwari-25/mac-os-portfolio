import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './spotlight.scss'

const results = [
  { id: 'github', label: 'Projects', detail: 'Open GitHub projects', icon: 'ri-folder-line' },
  { id: 'resume', label: 'Resume.pdf', detail: 'View experience', icon: 'ri-file-pdf-line' },
  { id: 'note', label: 'About Me.txt', detail: 'Read a short introduction', icon: 'ri-file-text-line' },
  { id: 'cli', label: 'Terminal', detail: 'Run portfolio commands', icon: 'ri-terminal-line' },
]

const Spotlight = ({ open, onClose, onOpen }) => {
  const [query, setQuery] = useState('')
  const filtered = results.filter((item) => `${item.label} ${item.detail}`.toLowerCase().includes(query.toLowerCase()))
  useEffect(() => {
    const onKey = (event) => { if (event.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])
  return <AnimatePresence>{open && <motion.div className="spotlight-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={onClose}>
    <motion.div className="spotlight-panel" initial={{ y: -20, scale: .96 }} animate={{ y: 0, scale: 1 }} exit={{ y: -20, scale: .96 }} onMouseDown={(event) => event.stopPropagation()}>
      <div className="spotlight-input"><i className="ri-search-line" /><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search this Mac" /></div>
      <div className="spotlight-results">{filtered.map((item) => <button key={item.id} onClick={() => { onOpen(item.id); onClose() }}><i className={item.icon} /><span><b>{item.label}</b><small>{item.detail}</small></span><kbd>return</kbd></button>)}{!filtered.length && <p className="empty-result">No results</p>}</div>
    </motion.div>
  </motion.div>}</AnimatePresence>
}

export default Spotlight

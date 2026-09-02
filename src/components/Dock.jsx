import { motion } from 'framer-motion'
import './dock.scss'

const apps = [
  { id: 'github', label: 'GitHub', icon: 'ri-github-fill', className: 'github', internal: true },
  { id: 'note', label: 'Notes', icon: 'ri-notion-fill', className: 'note', internal: true },
  { id: 'resume', label: 'Resume', icon: 'ri-file-pdf-line', className: 'pdf', internal: true },
  { id: 'calendar', label: 'Calendar', icon: 'ri-calendar-2-line', className: 'calender', href: 'https://calendar.google.com/calendar/u/0/r?pli=1' },
  { id: 'spotify', label: 'Spotify', icon: 'ri-spotify-fill', className: 'spotify', internal: true },
  { id: 'mail', label: 'Mail', icon: 'ri-mail-ai-fill', className: 'mail', href: 'mailto:hello@rishimaheshwari.com' },
  { id: 'linkedin', label: 'LinkedIn', icon: 'ri-link', className: 'link', href: 'https://www.linkedin.com/in/rishi-maheshwari-295313322' },
  { id: 'cli', label: 'Terminal', icon: 'ri-terminal-fill', className: 'cli', internal: true },
]

const Dock = ({ windowState, onOpen, onExternal, onClickSound }) => (
  <footer className="dock" role="toolbar" aria-label="Application dock">
    {apps.map((app, index) => <motion.button
      key={app.id}
      className={`dock-icon ${app.className} ${windowState[app.id] ? 'is-active' : ''}`}
      title={app.label}
      aria-label={app.label}
      onClick={() => { onClickSound(); app.internal ? onOpen(app.id) : onExternal(app.href) }}
      whileHover={{ scale: 1.42, y: -14 }}
      whileTap={{ scale: 0.92 }}
      initial={false}
      animate={windowState[app.id] ? { y: [0, -12, 0] } : { y: 0 }}
      transition={{ duration: 0.32, delay: windowState[app.id] ? 0 : index * 0.01 }}
    ><i className={app.icon} /><span className="dock-tooltip">{app.label}</span></motion.button>)}
  </footer>
)

export default Dock

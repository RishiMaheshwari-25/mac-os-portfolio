import MacWindow from './MacWindow'
import "./spotify.scss"

const Spotify = ({ windowName, setWindowState, minimized, onMinimize, onFocus }) => {
  return (
    <MacWindow
      windowName={windowName}
      setWindowState={setWindowState}
      onMinimize={onMinimize}
      onFocus={onFocus}
      minimized={minimized}
      width="25vw"
    >
      <div className="spotify-window">
        <iframe data-testid="embed-iframe" style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/playlist/24q9kIaJ3HcxulHVdDIk00?utm_source=generator&si=4891f7056ca64a26" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="Spotify Playlist" ></iframe>
      </div>
    </MacWindow>
  )
}

export default Spotify

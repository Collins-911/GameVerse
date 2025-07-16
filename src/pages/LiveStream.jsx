import React, { useState, useRef } from "react";
import "../../src/css/livestream.css";
import Navbar from "../components/Navbar";

export default function LiveStream() {
  const [isStreaming, setIsStreaming] = useState(false);
  const [selectedStream, setSelectedStream] = useState(null);
  const videoRef = useRef(null);
  const [streamTitle, setStreamTitle] = useState("");
  const [streamGame, setStreamGame] = useState("");

  const streamers = [
    {
      id: 1,
      name: "ShadowSniper",
      game: "Call of Duty: Warzone",
      viewers: "1.4K",
      thumbnail: "https://placehold.co/320x180?text=ShadowSniper",
      streamUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 2,
      name: "PixelQueen",
      game: "Minecraft",
      viewers: "950",
      thumbnail: "https://placehold.co/320x180?text=PixelQueen",
      streamUrl: "https://www.youtube.com/embed/MHv6cWjvQjM"
    },
    {
      id: 3,
      name: "CyberWolf",
      game: "Cyberpunk 2077",
      viewers: "2.1K",
      thumbnail: "https://placehold.co/320x180?text=CyberWolf",
      streamUrl: "https://www.youtube.com/embed/LXb3EKWsInQ"
    },
  ];

  const startStreaming = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setIsStreaming(true);
    } catch (err) {
      console.error("Error accessing media devices:", err);
      alert("Could not access camera/microphone. Please check permissions.");
    }
  };

  const stopStreaming = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsStreaming(false);
    setStreamTitle("");
    setStreamGame("");
  };

  const watchStream = (streamer) => {
    setSelectedStream(streamer);
  };

  const goBackToStreamList = () => {
    setSelectedStream(null);
  };

  return (
    <>
      <div className="nav-container">
        <Navbar />
      </div>

      <div className="livestream-page">
        <h1 className="live-title">🎥 Live Streaming Platform</h1>

        {selectedStream ? (
          <div className="live-viewer">
            <div className="stream-controls">
              <button onClick={goBackToStreamList} className="back-btn">
                ← Back to all streams
              </button>
            </div>
            <div className="live-player">
              <iframe
                title={`${selectedStream.name}'s stream`}
                src={selectedStream.streamUrl}
                allow="autoplay; encrypted-media"
                allowFullScreen
                frameBorder="0"
              />
              <div className="stream-meta">
                <h2>{selectedStream.name}'s Stream</h2>
                <p>Playing: {selectedStream.game}</p>
                <p className="viewer-count">👥 {selectedStream.viewers} viewers</p>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Streamer Dashboard */}
            <div className="streamer-dashboard">
              <h2>Your Live Stream</h2>
              {isStreaming ? (
                <div className="stream-preview-wrapper">
                  <video ref={videoRef} autoPlay muted className="preview-video" />
                  <div className="stream-details">
                    <h3>{streamTitle || "Untitled Stream"}</h3>
                    <p>Game: {streamGame || "None selected"}</p>
                    <p className="viewer-count">👥 0 viewers (live)</p>
                    <button onClick={stopStreaming} className="stop-btn">
                      ⏹ End Stream
                    </button>
                  </div>
                </div>
              ) : (
                <div className="stream-setup">
                  <div className="setup-form">
                    <input
                      type="text"
                      placeholder="Stream Title"
                      value={streamTitle}
                      onChange={(e) => setStreamTitle(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Game/Category"
                      value={streamGame}
                      onChange={(e) => setStreamGame(e.target.value)}
                    />
                    <button onClick={startStreaming} className="start-btn">
                      🔴 Go Live
                    </button>
                  </div>
                  <div className="setup-tips">
                    <h4>Streaming Tips</h4>
                    <ul>
                      <li>🎧 Use a good mic for better audio</li>
                      <li>📶 Use a stable internet connection</li>
                      <li>💬 Interact with your viewers!</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Other Streamers */}
            <h2 className="streamer-heading">🌐 Explore Live Channels</h2>
            <div className="streamer-grid">
              {streamers.map((streamer) => (
                <div className="streamer-card" key={streamer.id}>
                  <img src={streamer.thumbnail} alt={streamer.name} />
                  <div className="streamer-info">
                    <h3>{streamer.name}</h3>
                    <p>{streamer.game}</p>
                    <span>👥 {streamer.viewers}</span>
                    <button 
                      className="watch-btn"
                      onClick={() => watchStream(streamer)}
                    >
                      ▶️ Watch
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

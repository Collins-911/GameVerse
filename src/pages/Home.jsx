import React, { useState, useEffect } from 'react';
import '../css/home.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const trendingStreams = [
  {
    title: 'Legends Never Die',
    desc: 'Technoblades greatest smoments – relive the legend.',
    streamer: 'Technoblade',
    viewers: '25.6K watching',
    image: 'https://i.pinimg.com/736x/98/25/d7/9825d70769de54b892883b6bd74c54ef.jpg',
    action: () => window.open('https://www.youtube.com/c/Technoblade', '_blank'),
  },
  {
    title: 'Call of Duty: Elite Strike',
    desc: 'Shroud is wiping squads with insane accuracy. Watch now!',
    streamer: 'Shroud',
    viewers: '19.3K watching',
    image: 'https://i.pinimg.com/736x/d4/1d/4a/d41d4ad9a7005701a9ee3b4f83dc5817.jpg',
    action: () => window.open('https://www.twitch.tv/shroud', '_blank'),
  },
  {
    title: 'F1 Esports Grand Prix',
    desc: 'Lando Norris is tearing up the digital track in real-time!',
    streamer: 'LandoNorris',
    viewers: '13.9K watching',
    image: 'https://i.pinimg.com/736x/85/7e/c1/857ec1da2ba24bc4c50608b110b3544b.jpg',
    action: () => window.open('https://www.twitch.tv/landonorris', '_blank'),
  },
  {
    title: 'Portal 2: Puzzle Mayhem',
    desc: 'SmallAnt is speed-solving logic puzzles with style!',
    streamer: 'SmallAnt',
    viewers: '11.5K watching',
    image: 'https://i.pinimg.com/736x/26/53/5a/26535afe0f0bcfef83abe14d3f54edd6.jpg',
    action: () => window.open('https://www.twitch.tv/smallant', '_blank'),
  },
];

const testimonials = [
  {
    quote: "GameVerse changed the way I discover and watch games. It's awesome!",
    author: 'Alex, Pro Gamer',
  },
  {
    quote: 'I love the simplicity and access to hot live streams. 10/10!',
    author: 'Rita, Puzzle Queen',
  },
  {
    quote: "Feels like Twitch and Steam had a baby. I'm hooked!",
    author: 'Jay, Streamer',
  },
  {
    quote: "The UI is super clean and easy to use. I switched from Twitch for good.",
    author: 'Leo, Indie Developer',
  },
  {
    quote: "I never miss my favorite streams anymore. GameVerse keeps me updated!",
    author: 'Nina, Esports Fan',
  },
  {
    quote: "Streaming and discovering games in one place? Genius.",
    author: 'Chris, Game Reviewer',
  },
  {
    quote: "I found hidden gems I would've missed. GameVerse is a treasure chest.",
    author: 'Sam, Late-Night Gamer',
  },
  {
    quote: "From F1 races to puzzle streams, it covers everything I love.",
    author: 'Dani, Variety Viewer',
  },
];

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    }).toUpperCase();
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    fade: true,
  };

  return (
    <>
      <div className="nav-container">
        <Navbar />
      </div>

      <div className="page-container">
        <div className="home">
          <section className="hero">
            <div className="hero-text">
              <h1>GameVerse</h1>
              <p>Your ultimate hub for game streams, reviews, and rankings.</p>
              <Link to="/game" className="cta-btn">Explore games</Link>
            </div>

            {/* <div className="game-time-display">
              <div className="time-hud">
                <div className="time-digits">{formatTime(currentTime)}</div>
                <div className="date-display">{formatDate(currentTime)}</div>
                <div className="hud-decoration">
                  <span className="hud-corner hud-corner-tl"></span>
                  <span className="hud-corner hud-corner-tr"></span>
                  <span className="hud-corner hud-corner-bl"></span>
                  <span className="hud-corner hud-corner-br"></span>
                </div>
              </div>
            </div> */}
          </section>

            <section className="trending">
              <h2>Live Now</h2>
              <div className="trending-grid">
                {trendingStreams.map((stream, index) => (
                  <div className="game-card" key={index}>
                    <img src={stream.image} alt={stream.title} className="game-image" />
                    <div className="game-info">
                      <h3>{stream.title}</h3>
                      <p>{stream.desc}</p>
                      <p className="streamer">🎥 {stream.streamer} – {stream.viewers}</p>
                      <button className="cta-btn" onClick={stream.action}>Watch Now</button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          <section className="testimonials">
            <h2>What Viewers Say</h2>
            <Slider {...testimonialSettings}>
              {testimonials.map((item, index) => (
                <div className="testimonial-card" key={index}>
                  <p className="quote">"{item.quote}"</p>
                  <p className="author">- {item.author}</p>
                </div>
              ))}
            </Slider>
          </section>
        </div>

        <footer className="footer">
          <div className="footer-left">
            <h3>GameVerse</h3>
            <p>Explore. Watch. Connect.</p>
          </div>
          <div className="footer-right">
            <p>emelumbacollins@gmail.com</p>
            <p>© {new Date().getFullYear()} GameVerse. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
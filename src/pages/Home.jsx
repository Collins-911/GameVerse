import '../css/home.css';
import Navigation from '../components/Navigation.jsx';

const trendingStreams = [
  {
    title: 'Shadow Blitz Live',
    desc: 'Sneaky missions and epic kills—DarkKnightX is live now!',
    streamer: 'DarkKnightX',
    viewers: '12.4K watching',
    image: '',
    action: () => window.open('https://twitch.tv/darkknightx', '_blank'),
  },
  {
    title: 'Pixel Rally Grand Prix',
    desc: 'RetroRacer is dominating the track. Tune in now!',
    streamer: 'RetroRacer',
    viewers: '7.8K watching',
    image: 'https://i.pinimg.com/736x/9e/09/be/9e09be097ea021cdffa1092cd1aaf25d.jpg',
    action: () => window.open('https://twitch.tv/retroracer', '_blank'),
  },
  {
    title: 'Brain Clash Puzzle Battle',
    desc: 'MindMaster is solving insane puzzles in real-time!',
    streamer: 'MindMaster',
    viewers: '9.1K watching',
    image: 'https://i.pinimg.com/736x/9e/09/be/9e09be097ea021cdffa1092cd1aaf25d.jpg',
    action: () => window.open('https://twitch.tv/mindmaster', '_blank'),
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
];

export default function Home() {
  const {explore_games} = Navigation();

  return (
    <div className="page-container">
      <div className="home">
        <section className="hero">
          <div className="hero-text">
            <h1>Welcome to GameVerse</h1>
            <p>Your ultimate hub for game streams, reviews, and rankings.</p>
            <button className="cta-btn" onClick={explore_games}>Explore Games</button>
          </div>
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
          <div className="testimonial-grid">
            {testimonials.map((item, index) => (
              <div className="testimonial-card" key={index}>
                <p className="quote">"{item.quote}"</p>
                <p className="author">- {item.author}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <footer className="footer">
        <div className="footer-left">
          <h3>GameVerse</h3>
          <p>Explore. Watch. Connect.</p>
        </div>
        <div className="footer-right">
          <p>Contact: gameverse@support.com</p>
          <p>© {new Date().getFullYear()} GameVerse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

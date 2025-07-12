import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/game.css';
import { FaArrowLeft } from 'react-icons/fa';
import Navbar from '../components/Navbar';

export default function Games() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const gameList = [
    {
      name: 'GTA V',
      genre: 'Action-Adventure',
      img: 'https://i.pinimg.com/736x/81/85/25/818525eae1a735b5fccd011a946c3917.jpg',
      onClick: () => navigate('/game/gtav'),
    },
    {
      name: 'Fortnite',
      genre: 'Battle Royale',
      img: 'https://i.pinimg.com/736x/f4/e0/35/f4e035d56c43d6ec0a4993511e15440d.jpg',
      onClick: () => navigate('/game/fortnite'),
    },
    {
      name: 'Minecraft',
      genre: 'Sandbox',
      img: 'https://i.pinimg.com/736x/de/ce/65/dece6598fdf563de127c78ca5c0e3c68.jpg',
      onClick: () => navigate('/game/minecraft'),
    },
    {
      name: 'Call of Duty: Warzone',
      genre: 'FPS',
      img: 'https://i.pinimg.com/736x/d0/19/7a/d0197a30b65d0af127feabee4fd7808b.jpg',
      onClick: () => navigate('/game/cod'),
    },
    {
      name: 'Valorant',
      genre: 'Tactical Shooter',
      img: 'https://i.pinimg.com/736x/06/cc/ec/06ccec8cf2dbdb06db0b72c275d704b0.jpg',
      onClick: () => navigate('/game/valorant'),
    },
    {
      name: 'Apex Legends',
      genre: 'Battle Royale',
      img: 'https://i.pinimg.com/736x/5f/38/b3/5f38b345d89d5f835a1715fa87147f11.jpg',
      onClick: () => navigate('/game/apexlegends'),
    },
    {
      name: 'League of Legends',
      genre: 'MOBA',
      img: 'https://i.pinimg.com/736x/b9/46/34/b94634572ce2d8323e7d9117927244bc.jpg',
      onClick: () => navigate('/game/leagueoflegends'),
    },
    {
      name: 'Elden Ring',
      genre: 'Action RPG',
      img: 'https://i.pinimg.com/736x/9e/50/01/9e5001b87cef5ad8a499409e4fb996f1.jpg',
      onClick: () => navigate('/game/eldenring'),
    },
    {
      name: 'Cyberpunk 2077',
      genre: 'RPG',
      img: 'https://i.pinimg.com/736x/bf/01/09/bf0109c447eed4535b5775416ff7580d.jpg',
      onClick: () => navigate('/game/cyberpunk2077'),
    },
    {
      name: 'FIFA 25',
      genre: 'Sports',
      img: 'https://i.pinimg.com/736x/03/12/a8/0312a82b5a31474dab63f2a99e40eff6.jpg',
      onClick: () => navigate('/game/fifa25'),
    },
    {
      name: 'NBA 2K24',
      genre: 'Sports',
      img: 'https://i.pinimg.com/736x/c0/af/ee/c0afee2a5e127d0b819863edb740fd41.jpg',
      onClick: () => navigate('/game/nba2k24'),
    },
    {
      name: 'God of War: Ragnarok',
      genre: 'Action',
      img: 'https://i.pinimg.com/736x/52/45/0c/52450ce16805ce1c0ef4bb1473877b55.jpg',
      onClick: () => navigate('/game/godofwar'),
    },
    {
      name: 'The Legend of Zelda: TOTK',
      genre: 'Adventure',
      img: 'https://i.pinimg.com/736x/e0/08/87/e008871e4a503cb16ab780575401f5f7.jpg',
      onClick: () => navigate('/game/thelegendofzelda'),
    },
    {
      name: 'Hogwarts Legacy',
      genre: 'Action RPG',
      img: 'https://i.pinimg.com/736x/af/bf/cf/afbfcfcaf49486a63eafbd6e845beccf.jpg',
      onClick: () => navigate('/game/hogwartslegacy'),
    },
    {
      name: 'Overwatch 2',
      genre: 'Hero Shooter',
      img: 'https://i.pinimg.com/736x/57/c6/01/57c6019c1c7ca1db67a88aee6c0d5cf7.jpg',
      onClick: () => navigate('/game/overwatch2'),
    },
    {
      name: 'Among Us',
      genre: 'Party',
      img: 'https://i.pinimg.com/736x/cc/dd/b8/ccddb85e9c34b05438bc12466d706a27.jpg',
      onClick: () => navigate('/game/amongus'),
    },
    {
      name: 'Fall Guys',
      genre: 'Party',
      img: 'https://i.pinimg.com/736x/70/fb/7e/70fb7eb36aa360a5fe2ee01649183fff.jpg',
      onClick: () => navigate('/game/fallguys'),
    },
    {
      name: 'Stardew Valley',
      genre: 'Farming RPG',
      img: 'https://i.pinimg.com/736x/2c/4b/f1/2c4bf1b641c57e84b40df079ec16984c.jpg',
      onClick: () => navigate('/game/stardewvalley'),
    },
    {
      name: 'The Sims 4',
      genre: 'Simulation',
      img: 'https://i.pinimg.com/736x/04/04/27/0404275e4e2a219d3bba838a2d29c5f0.jpg',
      onClick: () => navigate('/game/sims4'),
    },
    {
      name: 'Rocket League',
      genre: 'Sports/Car',
      img: 'https://i.pinimg.com/736x/a5/91/f9/a591f986e9e7dd2e1c8004e642249edc.jpg',
      onClick: () => navigate('/game/rocketleague'),
    },
    {
      name: 'Snake Game',
      genre: 'Arcade/Classic',
      img: 'https://i.pinimg.com/736x/81/d7/d0/81d7d0d4ce05fddbc80ffa7b30a7fffe.jpg',
      onClick: () => navigate('/game/snakegame'),
    },
    {
      name: 'Tic-Tac-Toe',
      genre: 'Arcade/Classic',
      img: 'https://i.pinimg.com/736x/6d/a2/57/6da25737af716373634e4be86509ebb9.jpg',
      onClick: () => navigate('/game/playtictactoe'),
    },
    {
      name: 'Typing Game',
      genre: 'Typing/Speed',
      img: 'https://i.pinimg.com/736x/f6/6d/b8/f66db836e7397bff2c8b462b2e775b33.jpg',
      onClick: () => navigate('/game/typing'),
    },
  ];

  const filteredGames = gameList.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="nav-container">
        <Navbar />
      </div>

      <div className="games-page">
        <div className="games-header">
          <h1 className="games-title">Popular Games</h1>
          <input
            type="text"
            className="game-search-bar"
            placeholder="Search games..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="games-grid">
          {filteredGames.length > 0 ? (
            filteredGames.map((game, index) => (
              <div
                key={index}
                className="game-card"
                onClick={game.onClick || (() => {})}
              >
                <img src={game.img} alt={game.name} />
                <h3>{game.name}</h3>
                <p>{game.genre}</p>
              </div>
            ))
          ) : (
            <p className="no-result">No games found.</p>
          )}
        </div>
      </div>
    </>
  );
}

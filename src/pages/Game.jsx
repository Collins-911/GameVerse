import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/game.css';
import { FaArrowLeft } from 'react-icons/fa';
import Navigation from '../components/Navigation.jsx';

export default function Games() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { back } = Navigation();

 const gameList = [
  {
    name: 'GTA V',
    genre: 'Action-Adventure',
    img: 'https://i.pinimg.com/736x/81/85/25/818525eae1a735b5fccd011a946c3917.jpg',
    onClick: () => navigate('/gtav')
  },
 {
  name: 'Fortnite',
  genre: 'Battle Royale',
  img: 'https://i.pinimg.com/736x/f4/e0/35/f4e035d56c43d6ec0a4993511e15440d.jpg',
  onClick: () => navigate('/fortnite')
},
  {
    name: 'Minecraft',
    genre: 'Sandbox',
    img: 'https://i.pinimg.com/736x/de/ce/65/dece6598fdf563de127c78ca5c0e3c68.jpg',
     onClick: () => navigate('/minecraft')
  },
     {
      name: 'Call of Duty: Warzone',
      genre: 'FPS',
      img: 'https://i.pinimg.com/736x/d0/19/7a/d0197a30b65d0af127feabee4fd7808b.jpg',
      onClick: () => navigate('/COD')
    },
  {
    name: 'Valorant',
    genre: 'Tactical Shooter',
    img: 'https://i.pinimg.com/736x/06/cc/ec/06ccec8cf2dbdb06db0b72c275d704b0.jpg',
    onClick: () => navigate('/valorant')
  },
  {
    name: 'Apex Legends',
    genre: 'Battle Royale',
    img: 'https://i.pinimg.com/736x/5f/38/b3/5f38b345d89d5f835a1715fa87147f11.jpg',
     onClick: () => navigate('/apexlegends')
  },
  {
    name: 'League of Legends',
    genre: 'MOBA',
    img: 'https://i.pinimg.com/736x/b9/46/34/b94634572ce2d8323e7d9117927244bc.jpg',
     onClick: () => navigate('/leagueoflegends')
  },
  {
    name: 'Elden Ring',
    genre: 'Action RPG',
    img: 'https://i.pinimg.com/736x/9e/50/01/9e5001b87cef5ad8a499409e4fb996f1.jpg',
     onClick: () => navigate('/eldenring')
  },
  {
    name: 'Cyberpunk 2077',
    genre: 'RPG',
    img: 'https://i.pinimg.com/736x/bf/01/09/bf0109c447eed4535b5775416ff7580d.jpg'
  },
  {
    name: 'FIFA 25',
    genre: 'Sports',
    img: 'https://i.pinimg.com/736x/03/12/a8/0312a82b5a31474dab63f2a99e40eff6.jpg',
    onClick: () => navigate('/fifa25')
  },
  {
    name: 'NBA 2K24',
    genre: 'Sports',
    img: 'https://i.pinimg.com/736x/c0/af/ee/c0afee2a5e127d0b819863edb740fd41.jpg',
    onClick: () => navigate('/nba2k24')
  },
  {
    name: 'God of War: Ragnarok',
    genre: 'Action',
    img: 'https://i.pinimg.com/736x/52/45/0c/52450ce16805ce1c0ef4bb1473877b55.jpg',
    onClick: () => navigate('/godofwar')
  },
  {
    name: 'The Legend of Zelda: TOTK',
    genre: 'Adventure',
    img: 'https://i.pinimg.com/736x/e0/08/87/e008871e4a503cb16ab780575401f5f7.jpg',
    onClick: () => navigate('/thelegendofzelda')
  },
  {
    name: 'Hogwarts Legacy',
    genre: 'Action RPG',
    img: 'https://i.pinimg.com/736x/af/bf/cf/afbfcfcaf49486a63eafbd6e845beccf.jpg',
    onClick: () => navigate('/hogwartslegacy')
  },
  {
    name: 'Overwatch 2',
    genre: 'Hero Shooter',
    img: 'https://i.pinimg.com/736x/57/c6/01/57c6019c1c7ca1db67a88aee6c0d5cf7.jpg',
    onClick: () => navigate('/overwatch2')
  },
  {
    name: 'Among Us',
    genre: 'Party',
    img: 'https://i.pinimg.com/736x/cc/dd/b8/ccddb85e9c34b05438bc12466d706a27.jpg',
    onClick: () => navigate('/amongus')
  },
  {
    name: 'Fall Guys',
    genre: 'Party',
    img: 'https://i.pinimg.com/736x/70/fb/7e/70fb7eb36aa360a5fe2ee01649183fff.jpg',
    onClick: () => navigate('/fallguys')
  },
  {
    name: 'Stardew Valley',
    genre: 'Farming RPG',
    img: 'https://i.pinimg.com/736x/2c/4b/f1/2c4bf1b641c57e84b40df079ec16984c.jpg',
    onClick: () => navigate('/stardewvalley')
  },
  {
    name: 'The Sims 4',
    genre: 'Simulation',
    img: 'https://i.pinimg.com/736x/04/04/27/0404275e4e2a219d3bba838a2d29c5f0.jpg',
    onClick: () => navigate('/sims4')
  },
  {
    name: 'Rocket League',
    genre: 'Sports/Car',
    img: 'https://i.pinimg.com/736x/a5/91/f9/a591f986e9e7dd2e1c8004e642249edc.jpg',
    onClick: () => navigate('/rocketleague')
  }
];


  const filteredGames = gameList.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="games-page">
      <div className="games-header">
        <h1 className="games-title">Popular Games</h1>
        <button className="back-btn" onClick={back}>
          <FaArrowLeft />
        </button>
      </div>

      <input
        type="text"
        className="search-bar"
        placeholder="Search games..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

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
  );
}

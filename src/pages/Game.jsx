import { useState } from 'react';
import '../css/game.css';
import { FaArrowLeft } from 'react-icons/fa';
import useNavigation from '../components/Navigation';
const gameList = [
  { name: 'GTA V', genre: 'Action-Adventure', img: 'https://i.pinimg.com/736x/81/85/25/818525eae1a735b5fccd011a946c3917.jpg' },
  { name: 'Fortnite', genre: 'Battle Royale', img: 'https://i.pinimg.com/736x/f4/e0/35/f4e035d56c43d6ec0a4993511e15440d.jpg' },
  { name: 'Call of Duty: Warzone', genre: 'FPS', img: 'https://i.pinimg.com/736x/d0/19/7a/d0197a30b65d0af127feabee4fd7808b.jpg' },
  { name: 'Minecraft', genre: 'Sandbox', img: 'https://i.pinimg.com/736x/de/ce/65/dece6598fdf563de127c78ca5c0e3c68.jpg' },
  { name: 'Among Us', genre: 'Party', img: 'https://i.pinimg.com/736x/cc/dd/b8/ccddb85e9c34b05438bc12466d706a27.jpg' },
  { name: 'Roblox', genre: 'User-Created', img: 'https://i.pinimg.com/736x/53/48/26/5348266ea6c5e67b19d6a814cbbb70f6.jpg' },
  { name: 'League of Legends', genre: 'MOBA', img: 'https://i.pinimg.com/736x/b9/46/34/b94634572ce2d8323e7d9117927244bc.jpg' },
  { name: 'Valorant', genre: 'Tactical Shooter', img: 'https://i.pinimg.com/736x/06/cc/ec/06ccec8cf2dbdb06db0b72c275d704b0.jpg' },
  { name: 'Elden Ring', genre: 'Action RPG', img: 'https://i.pinimg.com/736x/9e/50/01/9e5001b87cef5ad8a499409e4fb996f1.jpg' },
  { name: 'Apex Legends', genre: 'Battle Royale', img: 'https://i.pinimg.com/736x/5f/38/b3/5f38b345d89d5f835a1715fa87147f11.jpg' },
  { name: 'PUBG', genre: 'Battle Royale', img: 'https://i.pinimg.com/736x/d2/aa/4f/d2aa4ff694875e69a8f4b3caaea139c7.jpg' },
  { name: 'Overwatch 2', genre: 'Hero Shooter', img: 'https://i.pinimg.com/736x/57/c6/01/57c6019c1c7ca1db67a88aee6c0d5cf7.jpg' },
  { name: 'The Sims 4', genre: 'Simulation', img: 'https://i.pinimg.com/736x/04/04/27/0404275e4e2a219d3bba838a2d29c5f0.jpg' },
  { name: 'FIFA 24', genre: 'Sports', img: 'https://i.pinimg.com/736x/b0/2e/c3/b02ec3a7bfc4421d602eab2a0c37e71b.jpg' },
  { name: 'NBA 2K24', genre: 'Sports', img: 'https://i.pinimg.com/736x/c0/af/ee/c0afee2a5e127d0b819863edb740fd41.jpg' },
  { name: 'Rocket League', genre: 'Sports/Car', img: 'https://i.pinimg.com/736x/a5/91/f9/a591f986e9e7dd2e1c8004e642249edc.jpg' },
  { name: 'Cyberpunk 2077', genre: 'RPG', img: 'https://i.pinimg.com/736x/bf/01/09/bf0109c447eed4535b5775416ff7580d.jpg' },
  { name: 'Hogwarts Legacy', genre: 'Action RPG', img: 'https://i.pinimg.com/736x/af/bf/cf/afbfcfcaf49486a63eafbd6e845beccf.jpg' },
  { name: 'God of War: Ragnarok', genre: 'Action', img: 'https://i.pinimg.com/736x/52/45/0c/52450ce16805ce1c0ef4bb1473877b55.jpg '},    
  { name: 'The Legend of Zelda: TOTK', genre: 'Adventure', img: 'https://i.pinimg.com/736x/e0/08/87/e008871e4a503cb16ab780575401f5f7.jpg' },
  { name: 'Super Mario Odyssey', genre: 'Platformer', img: 'https://i.pinimg.com/736x/92/c7/d7/92c7d774962dbbdb94cb6261cd715b98.jpg' },
  { name: 'Animal Crossing: New Horizons', genre: 'Simulation', img: 'https://i.pinimg.com/736x/24/c0/04/24c004f2ad8b218f0688e2f12ae1210f.jpg' },
  { name: 'Splatoon 3', genre: 'Shooter', img: 'https://i.pinimg.com/736x/23/a9/9c/23a99c23432eee0087caf153a74b11bf.jpg' },
  { name: 'Monster Hunter Rise', genre: 'Action', img: 'https://i.pinimg.com/736x/d4/b6/11/d4b611bbfd2ca88cbf408728a597bdae.jpg' },
  { name: 'Final Fantasy XVI', genre: 'RPG', img: 'https://i.pinimg.com/736x/92/e1/a2/92e1a29a1189f0eebe51a515d9fbf75c.jpg' },
  { name: 'Resident Evil 4 Remake', genre: 'Survival Horror', img: 'https://i.pinimg.com/736x/06/67/cd/0667cdc07b7b148d38299c07d247a66a.jpg' },
  { name: 'Dead by Daylight', genre: 'Horror', img: 'https://i.pinimg.com/736x/9d/c8/4c/9dc84c7cfde98e444f4d7e3345792e8e.jpg' },
  { name: 'Phasmophobia', genre: 'Horror', img: 'https://i.pinimg.com/736x/c8/80/82/c88082bd7b6d47518a0b309a6b79367a.jpg' },
  { name: 'Fall Guys', genre: 'Party', img: 'https://i.pinimg.com/736x/70/fb/7e/70fb7eb36aa360a5fe2ee01649183fff.jpg' },
  { name: 'Sea of Thieves', genre: 'Adventure', img: 'https://i.pinimg.com/736x/ae/e5/aa/aee5aa12249e4afa586ae13bf9bacab5.jpg' },
  { name: 'Destiny 2', genre: 'MMO Shooter', img: 'https://i.pinimg.com/736x/ae/e5/aa/aee5aa12249e4afa586ae13bf9bacab5.jpg' },
  { name: 'Stardew Valley', genre: 'Farming RPG', img: 'https://i.pinimg.com/736x/2c/4b/f1/2c4bf1b641c57e84b40df079ec16984c.jpg' },
  { name: 'Terraria', genre: 'Survival', img: 'https://i.pinimg.com/736x/07/7d/53/077d53471564546215aaadcf7e89093f.jpg' },
  { name: 'Hades', genre: 'Rogue-like', img: 'https://i.pinimg.com/736x/5f/cb/4e/5fcb4e6a3d8b2aa416aeac55a0c919ff.jpg' },
  { name: 'Baldur\'s Gate 3', genre: 'CRPG', img: 'https://i.pinimg.com/736x/bb/b5/66/bbb5669335e6528d83f35dda866a2c87.jpg' },
  { name: 'Starfield', genre: 'Sci-Fi RPG', img: 'https://i.pinimg.com/736x/93/63/9b/93639ba290915e24619d7b11c0541ea6.jpg' },
  { name: 'Palworld', genre: 'Survival/Creature', img: 'https://i.pinimg.com/736x/f8/d0/fc/f8d0fcf868c431e6914500f47c220c82.jpg' },
  { name: 'Battlefield 2042', genre: 'FPS', img: 'https://i.pinimg.com/736x/7f/28/6d/7f286db83eb4e0f9ac44d7d9bf698067.jpg' },
  { name: 'ARK: Survival Evolved', genre: 'Survival', img: 'https://i.pinimg.com/736x/15/aa/58/15aa58d0e56bb0c02fb5e75d2a336bbf.jpg' },
  { name: 'Forza Horizon 5', genre: 'Racing', img: 'https://i.pinimg.com/736x/12/e0/c9/12e0c9c80a81c3423132cb532283b2e9.jpg' },
  { name: 'Gran Turismo 7', genre: 'Racing Sim', img: '' },
  { name: 'Dota 2', genre: 'MOBA', img: 'https://i.pinimg.com/736x/b0/3a/9a/b03a9ab25a3e9449a6bc4645f97ba213.jpg' },
  { name: 'Counter-Strike 2', genre: 'FPS', img: 'https://i.pinimg.com/736x/5c/72/18/5c7218fb96e67ec06e225ca60bdb8d46.jpg' },
  { name: 'Warframe', genre: 'Co-op Shooter', img: 'https://i.pinimg.com/736x/6b/de/3d/6bde3dd1efb3a7846434161e76bdc27d.jpg' },
  { name: 'The Forest', genre: 'Survival Horror', img: 'https://i.pinimg.com/736x/9c/d1/03/9cd1035c6a5aad2e45019655f7f39b78.jpg' },
  { name: 'The Finals', genre: 'FPS Arena', img: '' },
  { name: 'Hollow Knight', genre: 'Metroidvania', img: 'https://i.pinimg.com/736x/c9/18/3a/c9183af6cfbfa5861839f008a533daba.jpg' },
  { name: 'Celeste', genre: 'Platformer', img: 'https://i.pinimg.com/736x/84/c9/a0/84c9a000f510ccbd5721384c84b862a1.jpg' },
  { name: 'Inside', genre: 'Puzzle Horror', img: 'https://i.pinimg.com/736x/6d/07/c3/6d07c3862372fbad2617757a0bc55672.jpg' },
  { name: 'It Takes Two', genre: 'Co-op Adventure', img: 'https://i.pinimg.com/736x/d3/23/cb/d323cbe18fa888a05bf81e590bf0d5d6.jpg' },
];

export default function Games() {
  const [searchTerm, setSearchTerm] = useState('');
  const { back } = useNavigation(); // Fixed destructuring

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
            <div key={index} className="game-card">
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

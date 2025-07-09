import { useNavigate } from 'react-router-dom';

export default function Navigation() {
  const navigate = useNavigate();

  const AmongUs = () => navigate('/game/amongus');
  const Fortnite = () => navigate('/game/fortnite');
  const Minecraft = () => navigate('/game/minecraft');
  const CODW = () => navigate('/game/COD');
  const Valorant = () => navigate('/game/valorant');
  const ApexLegends = () => navigate('/game/apexlegends');
  const LeagueOfLegends = () => navigate('/game/leagueoflegends');
  const EldenRing = () => navigate('/game/eldenring');
  const GTAV = () => navigate('/game/gtav');
  const Cyberpunk = () => navigate('/game/cyberpunk');
  const FIFA = () => navigate('/game/fifa');
  const NBA = () => navigate('/game/nba');
  const GodOfWar = () => navigate('/game/godofwar');
  const Zelda = () => navigate('/game/zelda');
  const Hogwarts = () => navigate('/game/hogwarts');
  const Overwatch2 = () => navigate('/game/overwatch2');
  const FallGuys = () => navigate('/game/fallguys');
  const StardewValley = () => navigate('/game/stardewvalley');
  const TheSims4 = () => navigate('/game/thesims4');
  const RocketLeague = () => navigate('/game/rocketleague');
  const SnakeGame = () => navigate('/game/snakegame');
  const TicTacToe = () => navigate('/game/tictactoe');
  const TypingSpeedGame = () => navigate('/game/typingspeedgame');

  return {
    AmongUs,
    Fortnite,
    Minecraft,
    CODW,
    Valorant,
    ApexLegends,
    LeagueOfLegends,
    EldenRing,
    GTAV,
    Cyberpunk,
    FIFA,
    NBA,
    GodOfWar,
    Zelda,
    Hogwarts,
    Overwatch2,
    FallGuys,
    StardewValley,
    TheSims4,
    RocketLeague,
    SnakeGame,
    TicTacToe,
    TypingSpeedGame
  };
}

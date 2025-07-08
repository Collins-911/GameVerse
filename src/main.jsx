import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home.jsx';
import Game from './pages/Game.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/SignUp.jsx';
import Navbar from './components/Navbar.jsx'

// Game Preview Pages
import GTAV from './pages/gamesPreveiw/GTAV.jsx';
import Fortnite from './pages/gamesPreveiw/Fortnite.jsx';
import Minecraft from './pages/gamesPreveiw/Minecraft.jsx';
import COD from './pages/gamesPreveiw/COD.jsx';
import Valorant from './pages/gamesPreveiw/Valorant.jsx';
import ApexLegends from './pages/gamesPreveiw/ApexLegends.jsx';
import LeagueofLegends from './pages/gamesPreveiw/LeagueofLegends.jsx';
import EldenRing from './pages/gamesPreveiw/EldenRing.jsx';
import AmongUs from './pages/gamesPreveiw/AmongUs.jsx';
import Cyberpunk2077 from './pages/gamesPreveiw/CyberPunk.jsx';
import FallGuys from './pages/gamesPreveiw/FallGuys.jsx';
import FIFA25 from './pages/gamesPreveiw/FIFA25.jsx';
import GOW from './pages/gamesPreveiw/GOW.jsx';
import HogwartsLegacy from './pages/gamesPreveiw/HogwartsLegacy.jsx';
import NBA2K24 from './pages/gamesPreveiw/NBA2K24.jsx';
import Overwatch2 from './pages/gamesPreveiw/Overwatch2.jsx';
import RocketLeague from './pages/gamesPreveiw/RocketLeague.jsx';
import StardewValley from './pages/gamesPreveiw/StardewValley.jsx';
import TheLegendOfZelda from './pages/gamesPreveiw/TheLegendOfZelda.jsx';
import TheSims4 from './pages/gamesPreveiw/TheSims4.jsx';
import SnakeGame from './pages/gamesPreveiw/SnakeGame.jsx';
import Typing from './pages/gamesPreveiw/Typing.jsx';
import TicTacToeGame from './pages/gamesPreveiw/TicTacToeGame.jsx';

// Games Made Pages
import Snake from './pages/gamesMade/Snake.jsx';
import TicTacToe from './pages/gamesMade/TicTacToe.jsx';
import TypingGame from './pages/gamesMade/TypingGame.jsx';

// Mount app
createRoot(document.getElementById('root')).render(

  
  <StrictMode>
    <BrowserRouter>
        <Navbar/>
      <Routes>
        {/* Auth Pages */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Main Pages */}
        <Route path="/home" element={<Home />} />
        <Route path="/game" element={<Game />} />
        

        {/* Game Previews */}
        <Route path="/gtav" element={<GTAV />} />
        <Route path="/fortnite" element={<Fortnite />} />
        <Route path="/minecraft" element={<Minecraft />} />
        <Route path="/cod" element={<COD />} />
        <Route path="/valorant" element={<Valorant />} />
        <Route path="/apexlegends" element={<ApexLegends />} />
        <Route path="/leagueoflegends" element={<LeagueofLegends />} />
        <Route path="/eldenring" element={<EldenRing />} />
        <Route path="/amongus" element={<AmongUs />} />
        <Route path="/cyberpunk2077" element={<Cyberpunk2077 />} />
        <Route path="/fallguys" element={<FallGuys />} />
        <Route path="/fifa25" element={<FIFA25 />} />
        <Route path="/godofwar" element={<GOW />} />
        <Route path="/hogwartslegacy" element={<HogwartsLegacy />} />
        <Route path="/nba2k24" element={<NBA2K24 />} />
        <Route path="/overwatch2" element={<Overwatch2 />} />
        <Route path="/rocketleague" element={<RocketLeague />} />
        <Route path="/stardewvalley" element={<StardewValley />} />
        <Route path="/thelegendofzelda" element={<TheLegendOfZelda />} />
        <Route path="/sims4" element={<TheSims4 />} />
        <Route path="/snakegame" element={<SnakeGame />} />
        <Route path="/typing" element={<Typing />} />
        <Route path="/playtictactoe" element={<TicTacToeGame />} />

        {/* User Made Games */}
        <Route path="/playsnake" element={<Snake />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
        <Route path="/typinggame" element={<TypingGame />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

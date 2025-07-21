import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Entry Page
import Entry from './pages/Entry.jsx';

// Auth Pages
import Login from './pages/Login.jsx';
import Signup from './pages/SignUp.jsx';

// Main Pages
import Home from './pages/Home.jsx';
import Game from './pages/Game.jsx';
import Music from './pages/Music.jsx';
import LiveStream from './pages/LiveStream.jsx'; // ✅ NEW

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
import QuizGame from './pages/gamesPreveiw/QuizGame.jsx';
import MortalKombat from './pages/gamesPreveiw/MortalKombat.jsx'; 
// User Made Games
import Snake from './pages/gamesMade/Snake.jsx';
import TicTacToe from './pages/gamesMade/TicTacToe.jsx';
import TypingGame from './pages/gamesMade/TypingGame.jsx';
import Quiz from './pages/gamesMade/Quiz.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Entry Page as Landing Page */}
        <Route path="/" element={<Entry />} />

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Main Pages */}
        <Route path="/home" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/music" element={<Music />} />
        <Route path="/livestream" element={<LiveStream />} /> {/* ✅ NEW */}

        {/* Game Previews */}
        <Route path="/game/gtav" element={<GTAV />} />
        <Route path="/game/fortnite" element={<Fortnite />} />
        <Route path="/game/minecraft" element={<Minecraft />} />
        <Route path="/game/cod" element={<COD />} />
        <Route path="/game/valorant" element={<Valorant />} />
        <Route path="/game/apexlegends" element={<ApexLegends />} />
        <Route path="/game/leagueoflegends" element={<LeagueofLegends />} />
        <Route path="/game/eldenring" element={<EldenRing />} />
        <Route path="/game/amongus" element={<AmongUs />} />
        <Route path="/game/cyberpunk2077" element={<Cyberpunk2077 />} />
        <Route path="/game/fallguys" element={<FallGuys />} />
        <Route path="/game/fifa25" element={<FIFA25 />} />
        <Route path="/game/godofwar" element={<GOW />} />
        <Route path="/game/hogwartslegacy" element={<HogwartsLegacy />} />
        <Route path="/game/nba2k24" element={<NBA2K24 />} />
        <Route path="/game/overwatch2" element={<Overwatch2 />} />
        <Route path="/game/rocketleague" element={<RocketLeague />} />
        <Route path="/game/stardewvalley" element={<StardewValley />} />
        <Route path="/game/thelegendofzelda" element={<TheLegendOfZelda />} />
        <Route path="/game/sims4" element={<TheSims4 />} />
        <Route path="/game/snakegame" element={<SnakeGame />} />
        <Route path="/game/typing" element={<Typing />} />
        <Route path="/game/playtictactoe" element={<TicTacToeGame />} />
        <Route path="/game/playquiz" element={<QuizGame />} />
        <Route path="/game/mortalkombat" element={<MortalKombat />} />


        {/* User Made Games */}
        <Route path="/playsnake" element={<Snake />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
        <Route path="/typinggame" element={<TypingGame />} />
        <Route path="/playquiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

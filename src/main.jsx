import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Game from './pages/Game.jsx';

import GTAV from './pages/GTAV.jsx';
import Fortnite from './pages/Fortnite.jsx';
import Minecraft from './pages/Minecraft.jsx';
import COD from './pages/COD.jsx';
import Valorant from './pages/Valorant.jsx';
import ApexLegends from './pages/ApexLegends.jsx';
import LeagueofLegends from './pages/LeagueofLegends.jsx';
import EldenRing from './pages/EldenRing.jsx';
import AmongUs from './pages/AmongUs.jsx';
import Cyberpunk2077 from './pages/CyberPunk.jsx';
import FallGuys from './pages/FallGuys.jsx';
import FIFA25 from './pages/FIFA25.jsx'
import GOW from './pages/GOW.jsx'
import HogwartsLegacy from './pages/HogwartsLegacy.jsx';
import NBA2K24 from './pages/NBA2K24.jsx';
import Overwatch2 from './pages/Overwatch2.jsx';
import RocketLeague from './pages/RocketLeague.jsx';
import StardewValley from './pages/StardewValley.jsx';
import TheLegendOfZelda from './pages/TheLegendOfZelda.jsx'
import TheSims4 from './pages/TheSims4.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
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
        <Route path="/sims4" element={< TheSims4/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

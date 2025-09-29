import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.sass'
import { BrowserRouter, Routes, Route } from "react-router";


import Warrior  from "./pages/raids-armours/Warrior.tsx";
import Druid  from "./pages/raids-armours/Druid.tsx";
import Priest  from "./pages/raids-armours/Priest.tsx";
import Mage  from "./pages/raids-armours/Mage.tsx";
import Monk  from "./pages/raids-armours/Monk.tsx";
import Hunter  from "./pages/raids-armours/Hunter.tsx";
import DemonHunter  from "./pages/raids-armours/DemonHunter.tsx";
import Paladin  from "./pages/raids-armours/Paladin.tsx";
import Rogue  from "./pages/raids-armours/Rogue.tsx";
import DeathKnight  from "./pages/raids-armours/DeathKnight.tsx";
import Warlock  from "./pages/raids-armours/Warlock.tsx";
import Shaman  from "./pages/raids-armours/Shaman.tsx";
import Awakener  from "./pages/raids-armours/Awakener.tsx";


import OneHandedWeapons  from "./pages/weapons/OneHanded.tsx";
import TwoHandedWeapons  from "./pages/weapons/TwoHanded.tsx";
import RangeWeapons  from "./pages/weapons/Range.tsx";
import LegendaryWeapons  from "./pages/weapons/Legendary.tsx";
import ArtefactWeapons  from "./pages/weapons/Artefact.tsx";
import DecorativeWeapons  from "./pages/weapons/Decorative.tsx";


import Cloaks  from "./pages/armours/Cloaks.tsx";
import Shields  from "./pages/armours/Shields.tsx";
import FishingRods  from "./pages/armours/FishingRods.tsx";


import WaterMounts  from "./pages/mounts/Water.tsx";
import EarthMounts  from "./pages/mounts/Earth.tsx";
import FlyMounts  from "./pages/mounts/Fly.tsx";


import HordeGold  from "./pages/gold/Horde.tsx";
import AllianceGold  from "./pages/gold/Alliance.tsx";


import Alchemy  from "./pages/professions/Alchemy.tsx";
import Mining  from "./pages/professions/Mining.tsx";
import Engineering  from "./pages/professions/Engineering.tsx";
import Leatherworking  from "./pages/professions/Leatherworking.tsx";
import Blacksmithing  from "./pages/professions/Blacksmithing.tsx";
import Enchanting  from "./pages/professions/Enchanting.tsx";
import Inscription  from "./pages/professions/Inscription.tsx";
import Tailoring  from "./pages/professions/Tailoring.tsx";
import Skinning  from "./pages/professions/Skinning.tsx";
import Herbalism  from "./pages/professions/Herbalism.tsx";
import Jewelcrafting  from "./pages/professions/Jewelcrafting.tsx";
import Archaeology  from "./pages/professions/Archaeology.tsx";
import Riding  from "./pages/professions/Riding.tsx";
import Cooking  from "./pages/professions/Cooking.tsx";
import FirstAid  from "./pages/professions/FirstAid.tsx";
import Fishing  from "./pages/professions/Fishing.tsx";
import JunkyardTinkering  from "./pages/professions/JunkyardTinkering.tsx";


import Honour  from "./pages/pvp/Honour.tsx";
import Arena  from "./pages/pvp/Arena.tsx";
import Rbg  from "./pages/pvp/Rbg.tsx";


import Classic  from "./pages/raids/Classic.tsx";
import BurningCrusade  from "./pages/raids/BurningCrusade.tsx";
import WrathOfTheLichKing  from "./pages/raids/WrathOfTheLichKing.tsx";
import Cataclysm  from "./pages/raids/Cataclysm.tsx";
import MistsOfPandaria  from "./pages/raids/MistsOfPandaria.tsx";
import WarlordsOfDraenor  from "./pages/raids/WarlordsOfDraenor.tsx";
import Legion  from "./pages/raids/Legion.tsx";
import BattleForAzeroth  from "./pages/raids/BattleForAzeroth.tsx";
import Shadowlands  from "./pages/raids/Shadowlands.tsx";
import Dragonflight  from "./pages/raids/Dragonflight.tsx";
import WarWithin  from "./pages/raids/WarWithin.tsx";
import Midnight  from "./pages/raids/Midnight.tsx";
import LastTitan  from "./pages/raids/LastTitan.tsx";



import Quests from "./pages/achievements/Quests.tsx";
import Equipments from "./pages/achievements/Equipments.tsx";
import Mounts from "./pages/achievements/Mounts.tsx";
import RaidsExplorer from "./pages/achievements/RaidsExplorer.tsx";
import Legacy  from "./pages/achievements/Legacy.tsx";
import GreatFeats  from "./pages/achievements/GreatFeats.tsx";
import WarcraftReforged from "./pages/achievements/WarcraftReforged.tsx";
import Wow from "./pages/achievements/Wow.tsx";
import Diablo  from "./pages/achievements/Diablo.tsx";
import Hearthstone  from "./pages/achievements/Hearthstone.tsx";
import HeroesStorm  from "./pages/achievements/HeroesStorm.tsx";
import Starcraft  from "./pages/achievements/Starcraft.tsx";
import Overwatch  from "./pages/achievements/Overwatch.tsx";
import WowCollectionEditions  from "./pages/achievements/WowCollectionEditions.tsx";
import DiabloCollectionEditions  from "./pages/achievements/DiabloCollectionEditions.tsx";








createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="raids-armours/warrior" element={<Warrior />} />
				<Route path="raids-armours/druid" element={<Druid />} />
				<Route path="raids-armours/priest" element={<Priest />} />
				<Route path="raids-armours/mage" element={<Mage />} />
				<Route path="raids-armours/monk" element={<Monk />} />
				<Route path="raids-armours/hunter" element={<Hunter />} />
				<Route path="raids-armours/demon-hunter" element={<DemonHunter />} />
				<Route path="raids-armours/paladin" element={<Paladin />} />
				<Route path="raids-armours/rogue" element={<Rogue />} />
				<Route path="raids-armours/death-knight" element={<DeathKnight />} />
				<Route path="raids-armours/warlock" element={<Warlock />} />
				<Route path="raids-armours/shaman" element={<Shaman />} />
				<Route path="raids-armours/awakener" element={<Awakener />} />


				<Route path="weapons/one-handed" element={<OneHandedWeapons />} />
				<Route path="weapons/two-handed" element={<TwoHandedWeapons />} />
				<Route path="weapons/range" element={<RangeWeapons />} />
				<Route path="weapons/legendary" element={<LegendaryWeapons />} />
				<Route path="weapons/artefact" element={<ArtefactWeapons />} />
				<Route path="weapons/decorative" element={<DecorativeWeapons />} />


				<Route path="armours/shields" element={<Shields />} />
				<Route path="armours/cloaks" element={<Cloaks />} />
				<Route path="armours/fishing-rods" element={<FishingRods />} />


				<Route path="mounts/water" element={<WaterMounts />} />
				<Route path="mounts/earth" element={<EarthMounts />} />
				<Route path="mounts/fly" element={<FlyMounts />} />


				<Route path="gold/horde" element={<HordeGold />} />
				<Route path="gold/alliance" element={<AllianceGold />} />


				<Route path="professions/alchemy" element={<Alchemy />} />
				<Route path="professions/mining" element={<Mining />} />
				<Route path="professions/engineering" element={<Engineering />} />
				<Route path="professions/leatherworking" element={<Leatherworking />} />
				<Route path="professions/blacksmithing" element={<Blacksmithing />} />
				<Route path="professions/enchanting" element={<Enchanting />} />
				<Route path="professions/inscription" element={<Inscription />} />
				<Route path="professions/tailoring" element={<Tailoring />} />
				<Route path="professions/skinning" element={<Skinning />} />
				<Route path="professions/herbalism" element={<Herbalism />} />
				<Route path="professions/jewelcrafting" element={<Jewelcrafting />} />
				<Route path="professions/archaeology" element={<Archaeology />} />
				<Route path="professions/riding" element={<Riding />} />
				<Route path="professions/cooking" element={<Cooking />} />
				<Route path="professions/first-aid" element={<FirstAid />} />
				<Route path="professions/fishing" element={<Fishing />} />
				<Route path="professions/junkyard-tinkering" element={<JunkyardTinkering />} />


				<Route path="pvp/honour" element={<Honour />} />
				<Route path="pvp/arena" element={<Arena />} />
				<Route path="pvp/rbg" element={<Rbg />} />


				<Route path="raids/classic" element={<Classic />} />
				<Route path="raids/burning-crusade" element={<BurningCrusade />} />
				<Route path="raids/wrath-of-the-lich-king" element={<WrathOfTheLichKing />} />
				<Route path="raids/cataclysm" element={<Cataclysm />} />
				<Route path="raids/mists-of-pandaria" element={<MistsOfPandaria />} />
				<Route path="raids/warlords-of-draenor" element={<WarlordsOfDraenor />} />
				<Route path="raids/legion" element={<Legion />} />
				<Route path="raids/battle-for-azeroth" element={<BattleForAzeroth />} />
				<Route path="raids/shadowlands" element={<Shadowlands />} />
				<Route path="raids/dragonflight" element={<Dragonflight />} />
				<Route path="raids/war-within" element={<WarWithin />} />
				<Route path="raids/midnight" element={<Midnight />} />
				<Route path="raids/last-titan" element={<LastTitan />} />


				<Route path="achievements/quests" element={<Quests />} />
				<Route path="achievements/equipments" element={<Equipments />} />
				<Route path="achievements/mounts" element={<Mounts />} />
				<Route path="achievements/raids-explorer" element={<RaidsExplorer />} />
				<Route path="achievements/legacy" element={<Legacy />} />
				<Route path="achievements/great-feats" element={<GreatFeats />} />
				<Route path="achievements/warcraft-reforged" element={<WarcraftReforged />} />
				<Route path="achievements/wow" element={<Wow />} />
				<Route path="achievements/diablo" element={<Diablo />} />
				<Route path="achievements/hearthstone" element={<Hearthstone />} />
				<Route path="achievements/heroes-storm" element={<HeroesStorm />} />
				<Route path="achievements/starcraft" element={<Starcraft />} />
				<Route path="achievements/overwatch" element={<Overwatch />} />
				<Route path="achievements/wow-collection-editions" element={<WowCollectionEditions />} />
				<Route path="achievements/diablo-collection-editions" element={<DiabloCollectionEditions />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
);

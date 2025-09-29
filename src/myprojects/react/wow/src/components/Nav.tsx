

const Nav = ({home, warrior, druid, priest, mage, monk, hunter, demonHunter, paladin, rogue, deathKnight, warlock, shaman, awakener}) => {
	return (
		<section className="nav__tabs">
			<div className="container">
				<div className="services__tabs">
					{/* Табы все */}
					<ul className="nav nav-pills mb-5 justify-content-center" id="pills-tab" role="tablist">
						{/* Табы Рейдовая Броня */}
						<li className="nav-item nav-item-raids-armour" role="presentation">
							<a className="nav-link nav-link-tabs nav-link-raids-armour active" id="pills-raids-armour-tab" data-toggle="pill" href="#pills-raids-armour" role="tab" aria-controls="pills-raids-armour" aria-selected="true">Рейдовые комплекты</a>
							<ul className="nav nav-pills nav-raids-armour services__nav">
								<li className="nav-item nav-item-warrior">
									<a className="nav-link services__link nav-link-raids-armour" href="html/raids-armours/warrior.html">Воин</a>
								</li>

								<li className="nav-item nav-item-druid">
									<a className="nav-link services__link nav-link-raids-armour" href="html/raids-armours/druid.html">Друид</a>
								</li>

								<li className="nav-item nav-item-priest">
									<a className="nav-link services__link nav-link-raids-armour" href="html/raids-armours/priest.html">Жрец</a>
								</li>

								<li className="nav-item nav-item-mage">
									<a className="nav-link services__link nav-link-raids-armour" href="html/raids-armours/mage.html">Маг</a>
								</li>

								<li className="nav-item nav-item-monk">
									<a className="nav-link services__link nav-link-raids-armour" href="html/raids-armours/monk.html">Монах</a>
								</li>

								<li className="nav-item nav-item-hunter">
									<a className="nav-link services__link nav-link-raids-armour" href="html/raids-armours/hunter.html">Охотник</a>
								</li>

								<li className="nav-item nav-item-demon-hunter">
									<a className="nav-link services__link nav-link-raids-armour" href="html/raids-armours/demonhunter.html">Охотник на демонов</a>
								</li>

								<li className="nav-item nav-item-paladdin">
									<a className="nav-link services__link nav-link-raids-armour" href="html/raids-armours/paladin.html">Паладин</a>
								</li>

								<li className="nav-item nav-item-rogue">
									<a className="nav-link services__link nav-link-raids-armour" href="html/raids-armours/rogue.html">Разбойник</a>
								</li>

								<li className="nav-item nav-item-death-knight">
									<a className="nav-link services__link nav-link-raids-armour" href="html/raids-armours/death-knight.html">Рыцарь смерти</a>
								</li>

								<li className="nav-item nav-item-warlock">
									<a className="nav-link services__link nav-link-raids-armour" href="html/raids-armours/warlock.html">Чернокнижник</a>
								</li>

								<li className="nav-item nav-item-shaman">
									<a className="nav-link services__link nav-link-raids-armour" href="html/raids-armours/shaman.html">Шаман</a>
								</li>

								<li className="nav-item nav-item-awakener">
									<a className="nav-link services__link nav-link-raids-armour" href="html/raids-armours/awakener.html">Пробудитель</a>
								</li>
							</ul>
						</li>

						{/* Табы Оружие */}
						<li className="nav-item nav-item-weapons" role="presentation">
							<a className="nav-link nav-link-tabs nav-link-weapons" id="pills-weapons-tab" data-toggle="pill" href="#pills-weapons" role="tab" aria-controls="pills-weapons" aria-selected="false">Оружие</a>
							<ul className="nav nav-pills services__nav nav-weapons">
								<li className="nav-item">
									<a className="nav-link services__link nav-link-weapons" href="html/weapons/one-handed-weapons.html">Одноручное</a>
								</li>

								<li className="nav-item">
									<a className="nav-link services__link nav-link-weapons" href="html/weapons/two-handed-weapons.html">Двуручное</a>
								</li>

								<li className="nav-item">
									<a className="nav-link services__link nav-link-weapons" href="html/weapons/range-weapons.html">Дальний бой</a>
								</li>

								<li className="nav-item">
									<a className="nav-link services__link nav-link-weapons" href="html/weapons/legendary.html">Легендарное</a>
								</li>

								<li className="nav-item">
									<a className="nav-link services__link nav-link-weapons" href="html/weapons/artefact.html">Артефактное</a>
								</li>

								<li className="nav-item">
									<a className="nav-link services__link nav-link-weapons" href="html/weapons/decorative.html">Декоративное</a>
								</li>
							</ul>
						</li>

						{/* Табы Броня */}
						<li className="nav-item nav-item-armor" role="presentation">
							<a className="nav-link nav-link-tabs nav-link-armor" id="pills-armor-tab" data-toggle="pill" href="#pills-armor" role="tab" aria-controls="pills-weapons" aria-selected="false">Броня</a>
							<ul className="nav nav-pills services__nav nav-armor">
								<li className="nav-item">
									<a className="nav-link services__link nav-link-armor" href="html/armors/shields.html">Щиты</a>
								</li>

								<li className="nav-item">
									<a className="nav-link services__link nav-link-armor" href="html/armors/shields.html">Плащи</a>
								</li>

								<li className="nav-item">
									<a className="nav-link services__link nav-link-armor" href="html/armors/shields.html">Удочки</a>
								</li>
							</ul>
						</li>

						{/* Табы Маунты */}
						<li className="nav-item nav-item-mounts" role="presentation">
							<a className="nav-link nav-link-tabs nav-link-mounts" id="pills-mounts-tab" data-toggle="pill" href="#pills-mounts" role="tab" aria-controls="pills-mounts" aria-selected="false">Маунты</a>
							<ul className="nav nav-pills services__nav nav-mounts">
								<li className="nav-item">
									<a className="nav-link services__link nav-link-mounts" href="html/mounts/water/water.html">Водные</a>
								</li>

								<li className="nav-item">
									<a className="nav-link services__link nav-link-mounts" href="html/mounts/earth/earth.html">Наземные</a>
								</li>

								<li className="nav-item">
									<a className="nav-link services__link nav-link-mounts" href="html/mounts/fly/fly.html">Летающие</a>
								</li>
							</ul>
						</li>

						{/* Табы Золото */}
						<li className="nav-item nav-item-gold" role="presentation">
							<a className="nav-link nav-link-tabs nav-link-gold" id="pills-gold-tab" data-toggle="pill" href="#pills-gold" role="tab" aria-controls="pills-gold" aria-selected="false">Золото</a>
							<ul className="nav nav-pills services__nav nav-gold">
								<li className="nav-item">
									<a className="nav-link services__link nav-link-gold" href="html/gold/horde.html">Орда</a>
								</li>

								<li className="nav-item">
									<a className="nav-link services__link nav-link-gold" href="html/gold/alliance.html">Альянс</a>
								</li>
							</ul>
						</li>

						{/* Табы Профессии */}
						<li className="nav-item nav-item-professions" role="presentation">
							<a className="nav-link nav-link-tabs nav-link-professions" id="pills-professions-tab" data-toggle="pill" href="#pills-professions" role="tab" aria-controls="pills-professions" aria-selected="false">Профессии</a>
							<ul className="nav nav-pills services__nav nav-professions">
								<li className="nav-item nav-item-alchemy">
									<a className="nav-link services__link nav-link-professions" href="html/professions/alchemy.html">Алхимия</a>
								</li>

								<li className="nav-item nav-item-mining">
									<a className="nav-link services__link nav-link-professions" href="html/professions/mining.html">Горное дело</a>
								</li>

								<li className="nav-item nav-item-engineering">
									<a className="nav-link services__link nav-link-professions" href="html/professions/engineering.html">Инженерное дело</a>
								</li>

								<li className="nav-item nav-item-leatherworking">
									<a className="nav-link services__link nav-link-professions" href="html/professions/leatherworking.html">Кожевничество</a>
								</li>

								<li className="nav-item nav-item-blacksmithing">
									<a className="nav-link services__link nav-link-professions" href="html/professions/blacksmithing.html">Кузнечное дело</a>
								</li>

								<li className="nav-item nav-item-enchanting">
									<a className="nav-link services__link nav-link-professions" href="html/professions/enchanting.html">Наложение чар</a>
								</li>

								<li className="nav-item nav-item-inscription">
									<a className="nav-link services__link nav-link-professions" href="html/professions/inscription.html">Начертание</a>
								</li>

								<li className="nav-item nav-item-tailoring">
									<a className="nav-link services__link nav-link-professions" href="html/professions/tailoring.html">Портняжное дело</a>
								</li>

								<li className="nav-item nav-item-skining">
									<a className="nav-link services__link nav-link-professions" href="html/professions/skinning.html">Снятие шкур</a>
								</li>

								<li className="nav-item nav-item-herbalism">
									<a className="nav-link services__link nav-link-professions" href="html/professions/herbalism.html">Травничество</a>
								</li>

								<li className="nav-item nav-item-jewelcrafting">
									<a className="nav-link services__link nav-link-professions" href="html/professions/jewelcrafting.html">Ювелирное дело</a>
								</li>

								<li className="nav-item nav-item-archaeology">
									<a className="nav-link services__link nav-link-professions" href="html/professions/archaeology.html">Археология</a>
								</li>

								<li className="nav-item nav-item-riding">
									<a className="nav-link services__link nav-link-professions" href="html/professions/riding.html">Верховая езда</a>
								</li>

								<li className="nav-item nav-item-cooking">
									<a className="nav-link services__link nav-link-professions" href="html/professions/cooking.html">Кулинария</a>
								</li>

								<li className="nav-item nav-item-first-aid">
									<a className="nav-link services__link nav-link-professions" href="html/professions/first-aid.html">Первая помощь</a>
								</li>

								<li className="nav-item nav-item-fishing">
									<a className="nav-link services__link nav-link-professions" href="html/professions/fishing.html">Рыбная ловля</a>
								</li>

								<li className="nav-item nav-item-artisanal-mechanics">
									<a className="nav-link services__link nav-link-professions" href="#">Кустарная механика</a>
								</li>
							</ul>
						</li>

						{/* Табы pvp */}
						<li className="nav-item nav-item-pvp" role="presentation">
							<a className="nav-link nav-link-tabs nav-link-pvp" id="pills-pvp-tab" data-toggle="pill" href="#pills-pvp" role="tab" aria-controls="pills-contact" aria-selected="false">PvP</a>
							<ul className="nav nav-pills services__nav nav-pvp">
								<li className="nav-item">
									<a className="nav-link services__link nav-link-pvp" href="html/pvp/honor.html">Честь</a>
								</li>

								<li className="nav-item">
									<a className="nav-link services__link nav-link-pvp" href="html/pvp/arena.html">Арена</a>
								</li>

								<li className="nav-item">
									<a className="nav-link services__link nav-link-pvp" href="html/pvp/rbg.html">РБГ</a>
								</li>
							</ul>
						</li>

						{/* Табы Эпохальные Подземелья */}
						<li className="nav-item nav-item-dungeons" role="presentation">
							<a className="nav-link nav-link-tabs nav-link-dungeons" id="pills-dungeons-tab" data-toggle="pill" href="#pills-dungeons" role="tab" aria-controls="pills-dungeons" aria-selected="false">Эпохальные подземелья</a>
							<ul className="nav nav-pills services__nav nav-dungeons">
								<li className="nav-item">
									<a className="nav-link services__link nav-link-dungeons" href="html/dungeons/m+10.html">Мифик +5</a>
								</li>

								<li className="nav-item">
									<a className="nav-link services__link nav-link-dungeons" href="html/dungeons/m+10.html">Мифик +10</a>
								</li>

								<li className="nav-item">
									<a className="nav-link services__link nav-link-dungeons" href="html/dungeons/m+15.html">Мифик +15</a>
								</li>
							</ul>
						</li>

						{/* Табы Рейды */}
						<li className="nav-item nav-item-raids" role="presentation">
							<a className="nav-link nav-link-tabs nav-link-tabs nav-link-raids" id="pills-raids-tab" data-toggle="pill" href="#pills-raids" role="tab" aria-controls="pills-raids" aria-selected="false">Рейды</a>
							<ul className="nav nav-pills services__nav nav-raids">
								<li className="nav-item">
									<a className="nav-link services__link nav-link-raids" href="html/raids/classNameic.html">classNameic</a>
								</li>

								<li className="nav-item">
									<a className="nav-link services__link nav-link-raids" href="html/raids/burning-crusade.html">The Burning Crusade</a>
								</li>

								<li className="nav-item">
									<a className="nav-link services__link nav-link-raids" href="html/raids/wrath-of-the-lich-king.html">Wraith of the Lich King</a>
								</li>

								<li className="nav-item">
									<a className="nav-link services__link nav-link-raids" href="html/raids/cataclysm.html">Cataclysm</a>
								</li>

								<li className="nav-item">
									<a className="nav-link services__link nav-link-raids" href="html/raids/mists-of-pandaria.html">Mists of Pandaria</a>
								</li>

								<li className="nav-item">
									<a className="nav-link services__link nav-link-raids" href="html/raids/warlord-of-draenor.html">Warlords of Draenor</a>
								</li>

								<li className="nav-item">
									<a className="nav-link services__link nav-link-raids" href="html/raids/legion.html">Legion</a>
								</li>

								<li className="nav-item">
									<a className="nav-link services__link nav-link-raids" href="html/raids/bfa.html">Battle for Azeroth</a>
								</li>

								<li className="nav-item">
									<a className="nav-link services__link nav-link-raids" href="html/raids/shadowlands.html">Shadowlands</a>
								</li>

								<li className="nav-item">
									<a className="nav-link services__link nav-link-raids" href="html/raids/shadowlands.html">Dragonflight</a>
								</li>
							</ul>
						</li>

						{/* Табы Прокачка Уровней */}
						<li className="nav-item nav-item-lvl-up" role="presentation">
							<a className="nav-link nav-link-tabs nav-link-lvl-up" id="pills-lvl-up-tab" data-toggle="pill" href="#pills-lvl-up" role="tab" aria-controls="pills-contact" aria-selected="false">Прокачка Персонажей</a>
							<ul className="nav nav-pills services__nav nav-lvl-up">
								<li className="nav-item">
									<a className="nav-link services__link nav-link-lvl-up" href="html/lvl-up/lvl-up-full.html">1-60 уровень</a>
								</li>

								<li className="nav-item">
									<a className="nav-link services__link nav-link-lvl-up" href="html/lvl-up/lvl-up-full.html">1-70 уровень</a>
								</li>

								<li className="nav-item">
									<a className="nav-link services__link nav-link-lvl-up" href="html/lvl-up/lvl-up.html">60-70 уровень</a>
								</li>
							</ul>
						</li>

						{/* Табы Достижения */}
						<li className="nav-item nav-item-achievements" role="presentation">
							<a className="nav-link nav-link-tabs nav-link-achievements" id="pills-achievements-tab" data-toggle="pill" href="#pills-achievements" role="tab" aria-controls="pills-achievements" aria-selected="false">Достижения</a>
							<ul className="nav nav-pills services__nav nav-achievements">
								<li className="nav-item">
									<a className="nav-link services__link nav-link-achievements" href="html/achievements/quests.html">Задания</a>
								</li>

								<li className="nav-item">
									<a className="nav-link services__link nav-link-achievements" href="html/achievements/equipment-max-lvl.html">Экипировка 1000 уровня</a>
								</li>

								<li className="nav-item">
									<a className="nav-link services__link nav-link-achievements" href="html/achievements/max-mounts.html">1000 Маунтов</a>
								</li>

								<li className="nav-item">
									<a className="nav-link services__link nav-link-achievements" href="html/achievements/raids-explorer.html">Исследователь Рейдов</a>
								</li>

								<li className="nav-item">
									<a className="nav-link services__link nav-link-achievements" href="html/achievements/great-feats.html">Посланник титанов</a>
								</li>

								<li className="nav-item">
									<a className="nav-link services__link nav-link-achievements" href="html/achievements/great-feats.html">Великие Подвиги</a>
								</li>

								<li className="nav-item">
									<a className="nav-link services__link nav-link-achievements" href="html/achievements/great-feats.html">Warcraft Reforged</a>
								</li>

								<li className="nav-item">
									<a className="nav-link services__link nav-link-achievements" href="html/achievements/great-feats.html">Starcraft II</a>
								</li>

								<li className="nav-item">
									<a className="nav-link services__link nav-link-achievements" href="html/achievements/great-feats.html">Diablo 3</a>
								</li>

								<li className="nav-item">
									<a className="nav-link services__link nav-link-achievements" href="html/achievements/great-feats.html">Heroes of the storm</a>
								</li>

								<li className="nav-item">
									<a className="nav-link services__link nav-link-achievements" href="html/achievements/great-feats.html">Hearthstone</a>
								</li>

								<li className="nav-item">
									<a className="nav-link services__link nav-link-achievements" href="html/achievements/great-feats.html">Overwatch</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</section>

	)
}


export default Nav
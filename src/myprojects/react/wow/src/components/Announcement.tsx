const Announcement = ({ home, warrior, druid, priest, mage, monk, hunter, demonHunter, paladin, awakener, rogue, deathKnight, warlock, shaman, oneHandedWeapons, twoHandedWeapons, rangeWeapons, legendaryWeapons, artefactWeapons, decorativeWeapons, shields, cloaks, fishingRods, waterMounts, earthMounts, flyMounts, hordeGold, allianceGold, alchemy, mining, engineering, leatherworking, blacksmithing, enchanting,  inscription, tailoring, skinning, herbalism, jewelcrafting, archaeology, riding, cooking, firstAid, fishing, junkyardTinkering, honour, arena, rbg, сlassic, burningCrusade, wrathOfTheLichKing, cataclysm, mistsOfPandaria, warlordsOfDraenor, legion, battleForAzeroth, shadowlands, dragonflight, warWithin, midnight, lastTitan, achievements, quests, equipments, mounts, raidsExplorer, legacy, greatFeats, warcraftReforged, wow, diablo, hearthstone, heroesStorm, starcraft, overwatch, wowCollectionEditions, diabloCollectionEditions  }) => {
	return (
		<section className="announcement">
			<div className="container">
				<div className="announcement__description my-4 my-lg-5">
					<h1
						className={`${
							warrior
								? "announcement__header announcement__header_warrior"
								:
							druid
								? "announcement__header announcement__header_druid"
								:
							priest
								? "announcement__header announcement__header_priest"
								:
							mage
								? "announcement__header announcement__header_mage"
								:
							monk
								? "announcement__header announcement__header_monk"
								:
							hunter
								? "announcement__header announcement__header_hunter"
								:
							demonHunter
								? "announcement__header announcement__header_demon-hunter"
								:
							paladin
								? "announcement__header announcement__header_paladin"
								:
							rogue
								? "announcement__header announcement__header_rogue"
								:
							deathKnight
								? "announcement__header announcement__header_death-knight"
								:
							warlock
								? "announcement__header announcement__header_warlock"
								:
							shaman
								? "announcement__header announcement__header_shaman"
								:
							awakener
								? "announcement__header announcement__header_awakener"
								:
							oneHandedWeapons
								? "announcement__header announcement__header_one-handed-weapons"
								:
							twoHandedWeapons
								? "announcement__header announcement__header_two-handed-weapons"
								:
							rangeWeapons
								? "announcement__header announcement__header_range-weapons"
								:
							legendaryWeapons
								? "announcement__header announcement__header_legendary-weapons"
								:
							artefactWeapons
								? "announcement__header announcement__header_artefact-weapons"
								:
							decorativeWeapons
								? "announcement__header announcement__header_decorative-weapons"
								:
							shields
								? "announcement__header announcement__header_shields"
								:
							cloaks
								? "announcement__header announcement__header_cloaks"
								:
							fishingRods
								? "announcement__header announcement__header_fishing-rods"
								:
							waterMounts
								? "announcement__header announcement__header_water-mounts"
								:
							earthMounts
								? "announcement__header announcement__header_earth-mounts"
								:
							flyMounts
								? "announcement__header announcement__header_fly-mounts"
								:
							hordeGold
								? "announcement__header announcement__header_horde-gold"
								:
							allianceGold
								? "announcement__header announcement__header_alliance-gold"
								:
							alchemy || mining || engineering || leatherworking || blacksmithing || enchanting ||  inscription || tailoring || skinning || herbalism || jewelcrafting || archaeology || riding || cooking || firstAid || fishing || junkyardTinkering
								? "announcement__header announcement__header_professions"
								:
							honour
								? "announcement__header announcement__header_honour"
								:
							arena
								? "announcement__header announcement__header_arena"
								:
							rbg
								? "announcement__header announcement__header_rbg"
								:
							сlassic
								? "announcement__header announcement__header_сlassic"
								:
							burningCrusade
								? "announcement__header announcement__header_burning-crusade"
								:
							wrathOfTheLichKing
								? "announcement__header announcement__header_wrath-of-the-lich-king"
								:
							cataclysm
								? "announcement__header announcement__header_cataclysm"
								:
							mistsOfPandaria
								? "announcement__header announcement__header_mists-of-pandaria"
								:
							warlordsOfDraenor
								? "announcement__header announcement__header_warlords-of-draenor"
								:
							legion
								? "announcement__header announcement__header_legion"
								:
							battleForAzeroth
								? "announcement__header announcement__header_battle-for-azeroth"
								:
							shadowlands
								? "announcement__header announcement__header_shadowlands"
								:
							dragonflight
								? "announcement__header announcement__header_dragonflight"
								:
							warWithin
								? "announcement__header announcement__header_war-within"
								:
							midnight
								? "announcement__header announcement__header_midnight"
								:
							lastTitan
								? "announcement__header announcement__header_last-titan"
								:
							achievements
								? "announcement__header announcement__header_achievements"
								: "announcement__header"
							} text-center`
						}
					>
						{
							warrior
								? "Комплекты рейдовой брони для воина"
								:
							druid
								? "Комплекты рейдовой брони для друида"
								:
							priest
								? "Комплекты рейдовой брони для жреца"
								:
							mage
								? "Комплекты рейдовой брони для мага"
								:
							monk
								? "Комплекты рейдовой брони для монаха"
								:
							hunter
								? "Комплекты рейдовой брони для охотника"
								:
							demonHunter
								? "Комплекты рейдовой брони для охотника на демонов"
								:
							paladin
								? "Комплекты рейдовой брони для паладина"
								:
							awakener
								? "Комплекты рейдовой брони для пробудителя"
								:
							rogue
								? "Комплекты рейдовой брони для разбойника"
								:
							deathKnight
								? "Комплекты рейдовой брони для рыцаря смерти"
								:
							warlock
								? "Комплекты рейдовой брони для чернокнижника"
								:
							shaman
								? "Комплекты рейдовой брони для шамана"
								:
							oneHandedWeapons
								? "Одноручное оружие"
								:
							twoHandedWeapons
								? "Двуручное оружие"
								:
							rangeWeapons
								? "Оружие дальнего боя"
								:
							legendaryWeapons
								? "Легендарное оружие"
								:
							artefactWeapons
								? "Артефакты Legion"
								:
							decorativeWeapons
								? "Декоративное оружие"
								:
							shields
								? "Щиты"
								:
							cloaks
								? "Плащи"
								:
							fishingRods
								? "Удочки"
								:
							waterMounts
								? "Водные маунты"
								:
							earthMounts
								? "Наземные маунты"
								:
							flyMounts
								? "Летающие маунты"
								:
							hordeGold
								? "Золото для игроков орды"
								:
							allianceGold
								? "Золото для игроков альянса"
								:
							alchemy
								? "Алхимия"
								:
							mining
								? "Горное дело"
								:
							engineering
								? "Инженерное дело"
								:
							leatherworking
								? "Кожевничество"
								:
							blacksmithing
								? "Кузнечное дело"
								:
							enchanting
								? "Наложение чар"
								:
							inscription
								? "Начертание"
								:
							tailoring
								? "Портняжное дело"
								:
							skinning
								? "Снятие шкур"
								:
							herbalism
								? "Травничество"
								:
							jewelcrafting
								? "Ювелирное дело"
								:
							archaeology
								? "Археология"
								:
							riding
								? "Верховая езда"
								:
							cooking
								? "Кулинария"
								:
							firstAid
								? "Первая помощь"
								:
							fishing
								? "Рыбная ловля"
								:
							junkyardTinkering
								? "Кустарная механика"
								:
							honour
								? "Очки чести"
								:
							arena
								? "Очки арены"
								:
							rbg
								? "Рейтинговые поля боя"
								:
							сlassic
								? "Рейды Classic"
								:
							burningCrusade
								? "Рейды The Burning Crusade"
								:
							wrathOfTheLichKing
								? "Рейды Wrath of the Lich King"
								:
							cataclysm
								? "Рейды Cataclysm"
								:
							mistsOfPandaria
								? "Рейды Mists of Pandaria"
								:
							warlordsOfDraenor
								? "Рейды Warlords of Draenor"
								:
							legion
								? "Рейды Legion"
								:
							battleForAzeroth
								? "Рейды Battle for Azeroth"
								:
							shadowlands
								? "Рейды Shadowlands"
								:
							dragonflight
								? "Рейды Dragonflight"
								:
							warWithin
								? "Рейды The War Within"
								:
							midnight
								? "Рейды Midnight"
								:
							lastTitan
								? "Рейды The Last Titan"
								:
							quests
								? "Задания"
								:
							equipments
								? "Экипировка 1000 уровня"
								:
							mounts
								? "1000 маунтов"
								:
							raidsExplorer
								? "Исследователь рейдов"
								:
							legacy
								? "Наследие"
								:
							greatFeats
								? "Великие подвиги"
								:
							warcraftReforged
								? "Годовщина Warcraft 3 Reforged"
								:
							wow
								? "Годовщина World of Warcraft"
								:
							diablo
								? "Годовщина Diablo"
								:
							hearthstone
								? "Годовщина Hearthstone"
								:
							heroesStorm
								? "Годовщина Heroes of the Storm"
								:
							starcraft
								? "Годовщина StarCraft"
								:
							overwatch
								? "Годовщина Overwatch"
								:
							wowCollectionEditions
								? "Коллекционные издания World of Warcraft"
								:
							diabloCollectionEditions
								? "Коллекционные издания Diablo"
								: "World of Warcraft"
						}
					</h1>
					{ home && <h2 className="announcement__header text-center">WorldSoul Saga</h2> }
					{ home && <h3 className="announcement__subheader announcement__subheader_main text-center">Великое приключение длиной в 20 лет</h3> }
					<h3 className={`${
						home
							? "announcement__subheader announcement__subheader_main"
							: "announcement__subheader"
							} text-center`
						}
					>
						{
							warrior
								? "Обрети мощь титана. Получите полный комплект, станьте неудержимой силой в бою и легендой Азерота!"
								:
							druid
								? "Обрети мудрость Древних. Получите полный комплект, станьте воплощением неудержимой силы природы и легендой Азерота!"
								:
							priest
								? "Твой путь к абсолютной власти над Светом и Тьмой. Получите полный комплект, станьте проводником божественной воли и легендой Азерота!"
								:
							mage
								? "Покори магию стихий. Получите полный комплект, станьте повелителем огня, льда и тайной магии, обретите силу, доступную лишь избранным и станьте легендой Азерота!"
								:
							monk
								? "Обрети гармонию стихий и единство духа через энергию ци. Получите полный комплект, станьте воплощением баланса сил и легендой Азерота!"
								:
							hunter
								? "Стань хозяином диких земель. Получите полный комплект, обретите верного зверя, станьте неумолимым преследователем и легендой Азерота!"
								:
							demonHunter
								? "Открой в себе ярость Иллидари, охотников на демонов Пылающего Легиона. Получите полный комплект, станьте воплощением мести и легендой Азерота!"
								:
							paladin
								? "Обрушь на врагов молот правосудия и испепели их священным огнём возмездия. Получите полный комплект, станьте благородным воителем Света, непоколебимым защитником и легендой Азерота!"
								:
							awakener
								? "Управляй магией пяти драконьих родов. Получите полный комплект, обрушьте на врагов испепеляющее дыхание красных драконов, леденящую магию синих, целительную силу зелёных, сокрушающую мощь чёрных и вневременную силу бронзовых драконов, парите над полем боя и станьте легендой Азерота!"
								:
							rogue
								? "Растворись в тенях и нанеси смертельный удар отравленным клинком. Получите полный комплект, станьте скрытным убийцей, мастером ядовитых клинков и легендой Азерота!"
								:
							deathKnight
								? "Пробуди силы, что правят самой смертью. Ледяное дыхание смерти, всепоглощающую чуму, пожирающую плоть, и кровь, дарующую вечную жизнь ценой тысяч жертв. Получите полный комплект, обрушьте на врагов истинную мощь Властелина Смерти и станьте легендой Азерота!"
								:
							warlock
								? "Подчини себе необузданную силу хаоса и испепеляющее пламя Скверны. Получите полный комплект, обрушьте на врагов адское пламя, энергию хаоса и станьте легендой Азерота!"
								:
							shaman
								? "Пробуди силу духов земли, огня, воды и воздуха. Прими благословение древних предков. Получите полный комплект, станьте воплощением могущества стихий и легендой Азерота!"
								:
							oneHandedWeapons
								? "Одноручное оружие, искусство смертоносной грации и невероятной скорости! Идеальный выбор тех, кто ценит скорость выше грубой силы. Каждый взмах клинка рождает вихрь молниеносных ударов, сметающий врагов. Неважно, что перед тобой полчища Плети или легионеры Пылающего Легиона скорость твоего клинка решает всё. Один искусный воин стоит целой армии!"
								:
							twoHandedWeapons
								? "Двуручное оружие, воплощение неудержимой мощи и сокрушительной силы. Идеальный выбор тех, кто верит, что лучшая защита это яростное нападение. Один удар решает исход битвы, а враги разлетаются в клочья от одного взмаха. Неважно, что перед тобой, полчища Плети или могучий инфернал Пылающего Легиона, двуручник сметёт всё на своём пути!"
								:
							rangeWeapons
								? "Оружие дальнего боя, искусство победы на дистанции. Идеальный выбор тех, кто предпочитает тактику грубой силе. Один точный выстрел решает исход битвы, враги падают, не успев приблизиться. Неважно, что перед тобой полчища Плети или легионеры Пылающего Легиона дистанция и меткость станут твоим преимуществом. Меткость не оставит врагам ни шанса, а дистанция превратится в непреодолимую пропасть!"
								:
							waterMounts
								? "Водные маунты, обитатели морей и океанов, могучие владыки глубин. Они обеспечат вам скорость морской бури и откроют тайны подводного мира. Покорите глубины Азерота!"
								:
							earthMounts
								? "Наземные маунты, обитатели пещер, могучие бегуны. Они обеспечат вам молниеносную скорость и превосходство в любом путешествии. Покорите бескрайние просторы Азерота!"
								:
							flyMounts
								? "Летающие маунты, властелины небес, повелители бескрайних воздушных просторов. Они обеспечат вам скорость ветра и абсолютное превосходство в воздухе. Покорите небеса Азерота!"
								: "Станьте легендой Азерота!"
						}
					</h3>
					<p className="announcement__text text-center">
						Сэкономьте свое время, приобретая предметы, валюту и
						достижения, чтобы играть на другом уровне
					</p>
				</div>
			</div>
		</section>
	);
};

export default Announcement;

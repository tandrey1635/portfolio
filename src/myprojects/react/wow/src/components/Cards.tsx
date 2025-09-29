import { Link } from "react-router";


const Card = ({home, raidsArmourWarrior}) => {

	const basePathImg = '/src/assets/img'

	/* Фото рейдовая броня гл стр */
	const warriorCardImg = `${basePathImg}/promo/bg/classes/garrosh-hellscrim.png`
	const druidCardImg = `${basePathImg}/promo/bg/classes/malfurion.png`
	const priestCardImg = `${basePathImg}/promo/bg/classes/velen.png`
	const mageCardImg = `${basePathImg}/promo/bg/classes/djaina-proudmoure.png`
	const monkCardImg = `${basePathImg}/promo/bg/classes/tjan-dju.png`
	const hunterCardImg = `${basePathImg}/promo/bg/classes/rexar.png`
	const demonHunterCardImg = `${basePathImg}/promo/bg/classes/illidan.png`
	const paladinCardImg = `${basePathImg}/promo/bg/classes/tirion-fordring.png`
	const rogueCardImg = `${basePathImg}/promo/bg/classes/valira-sangvinar.png`
	const deathKnightCardImg = `${basePathImg}/promo/bg/classes/lich-king.png`
	const warlockCardImg = `${basePathImg}/promo/bg/classes/guldan.png`
	const shamanCardImg = `${basePathImg}/promo/bg/classes/thrall.png`
	const awakenerCardImg = `${basePathImg}/promo/bg/classes/sarkareth.png`

	/* Фото оружие гл стр */
	const OneHandedWeaponsCardImg = `${basePathImg}/weapons/bg/one-handed.png`
	const TwoHandedWeaponsCardImg = `${basePathImg}/weapons/bg/two-handed.png`
	const RangeWeaponsCardImg = `${basePathImg}/weapons/bg/range.png`
	const LegendaryWeaponsCardImg = `${basePathImg}/weapons/bg/legendary.png`
	const ArtefactWeaponsCardImg = `${basePathImg}/weapons/bg/artefact.png`
	const DecorativeWeaponsCardImg = `${basePathImg}/weapons/bg/decorative.png`

	/* Фото броня гл стр */
	const CloaksCardImg = `${basePathImg}/armours/bg/cloak.png`
	const ShieldsCardImg = `${basePathImg}/armours/bg/shields.png`
	const FishingRodsCardImg = `${basePathImg}/armours/bg/fishing-rods.png`

	/* Фото маунты гл стр */
	const WaterMountsCardImg = `${basePathImg}/mounts/bg/water.png`
	const EarthMountsCardImg = `${basePathImg}/mounts/bg/earth.png`
	const FlyMountsCardImg = `${basePathImg}/mounts/bg/fly.png`


	/* Фото золото гл стр */
	const HordeGoldCardImg = `${basePathImg}/gold/bg/horde.png`
	const AllianceGoldCardImg = `${basePathImg}/gold/bg/alliance.png`


	/* Фото профессии гл стр */
	const AlchemyCardImg = `${basePathImg}/professions/bg/alchemy.png`
	const MiningCardImg = `${basePathImg}/professions/bg/mining.png`
	const EngineeringCardImg = `${basePathImg}/professions/bg/engineering.png`
	const LeatherworkingCardImg = `${basePathImg}/professions/bg/leatherworking.png`
	const BlacksmithingCardImg = `${basePathImg}/professions/bg/blacksmithing.png`
	const EnchantingCardImg = `${basePathImg}/professions/bg/enchanting.png`
	const InscriptionCardImg = `${basePathImg}/professions/bg/inscription.png`
	const TailoringCardImg = `${basePathImg}/professions/bg/tailoring.png`
	const SkinningCardImg = `${basePathImg}/professions/bg/skinning.png`
	const HerbalismCardImg = `${basePathImg}/professions/bg/herbalism.png`
	const JewelcraftingCardImg = `${basePathImg}/professions/bg/jewelcrafting.png`
	const ArchaeologyCardImg = `${basePathImg}/professions/bg/archaeology.png`
	const RidingCardImg = `${basePathImg}/professions/bg/riding.png`
	const CookingCardImg = `${basePathImg}/professions/bg/cooking.png`
	const FirstAidCardImg = `${basePathImg}/professions/bg/first-aid.png`
	const FishingCardImg = `${basePathImg}/professions/bg/fishing.png`
	const JunkyardTinkeringCardImg = `${basePathImg}/professions/bg/junkyard-tinkering.png`


	/* Фото pvp гл стр */
	const HonourCardImg = `${basePathImg}/pvp/bg/honour.png`
	const ArenaCardImg = `${basePathImg}/pvp/bg/arena.png`
	const RbgCardImg = `${basePathImg}/pvp/bg/rbg.png`


	/* Фото рейды гл стр */
	const ClassicCardImg = `${basePathImg}/raids/bg/temple-of-ahnqiraj.jpg`
	const BurningCrusadeCardImg = `${basePathImg}/raids/bg/black-temple.jpg`
	const WrathOfTheLichKingCardImg = `${basePathImg}/raids/bg/icecrown-citadel.jpg`
	const CataclysmCardImg = `${basePathImg}/raids/bg/firelands.jpg`
	const MistsOfPandariaCardImg = `${basePathImg}/raids/bg/throne-of-thunder.jpg`
	const WarlordOfDraenorCardImg = `${basePathImg}/raids/bg/blackrock-foundry.jpg`
	const LegionCardImg = `${basePathImg}/raids/bg/antorus-the-burning-throne.jpg`
	const BattleForAzerothCardImg = `${basePathImg}/raids/bg/nyalotha-the-waking-city.jpg`
	const ShadowlandsCardImg = `${basePathImg}/raids/bg/sanctum-of-domination.jpg`
	const DragonflightCardImg = `${basePathImg}/raids/bg/amirdrassil-the-dreams-hope.jpg`
	const WarWithinCardImg = `${basePathImg}/raids/bg/manaforge-omega.jpg`
	const MidnightCardImg = `${basePathImg}/raids/bg/midnight.jpg`
	const LastTitanCardImg = `${basePathImg}/raids/bg/last-titan.jpg`




	/* Фото достижения гл стр */
	const QuestsCardImg = `${basePathImg}/achievements/bg/quests.jpg`
	const EquipmentsCardImg = `${basePathImg}/achievements/bg/equipments.jpg`
	const MountsCardImg = `${basePathImg}/achievements/bg/mounts.jpg`
	const RaidsExplorerCardImg = `${basePathImg}/achievements/bg/raids-explorer.jpg`
	const LegacyCardImg = `${basePathImg}/achievements/bg/legacy.jpg`
	const GreatFeatsCardImg = `${basePathImg}/achievements/bg/great-feats.jpg`
	const WarcraftReforgedCardImg = `${basePathImg}/achievements/bg/warcraft-reforged.jpg`
	const WowCardImg = `${basePathImg}/achievements/bg/wow.jpg`
	const DiabloCardImg = `${basePathImg}/achievements/bg/diablo.jpg`
	const HearthstoneCardImg = `${basePathImg}/achievements/bg/hearthstone.jpg`
	const HeroesStormCardImg = `${basePathImg}/achievements/bg/heroes-of-the-storm.jpg`
	const StarcraftCardImg = `${basePathImg}/achievements/bg/starcraft.jpg`
	const OverwatchCardImg = `${basePathImg}/achievements/bg/overwatch.jpg`
	const WowCollectionEditionCardImg = `${basePathImg}/achievements/bg/wow-collection-editions.jpg`
	const DiabloCollectionEditionCardImg = `${basePathImg}/achievements/bg/diablo-collection-editions.jpg`


	const dollarImg = `${basePathImg}/gold/bg/dollar.png`
	const dollarAlt = '$'

	const goldImg = `${basePathImg}/gold/bg/gold.png`
	const goldAlt = 'gold-img'


	return (
		<section className="services">
			<div className="container">
				<div className="tab-content" id="pills-tabContent">
					{ home &&
						<>
							{/* Таб контент рейдовая броня */}
							<div className="tab-pane fade show active" id="pills-raids-armour">
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									<div className="card card-warrior">
										<Link to="raids-armours/warrior">
											<img src={warriorCardImg} className="card-img" alt="Комплекты рейдовой брони для воина" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="raids-armours/warrior">
												<h3 className="card-title card-title-warrior">Воин</h3>
											</Link>
											<p className="card-text card-text-warrior">Комплекты рейдовой брони для воина</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-warrior">от 100<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="raids-armours/warrior" className="card-btn card-btn-warrior">Подробнее</Link>
										</div>
									</div>

									<div className="card card-druid">
										<Link to="raids-armours/druid">
											<img src={druidCardImg} className="card-img" alt="Комплекты рейдовой брони для друида" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="raids-armours/druid">
												<h3 className="card-title card-title-druid">Друид</h3>
											</Link>
											<p className="card-text card-text-druid">Комплекты рейдовой брони для друида</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-druid">от 100<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="raids-armours/druid" className="card-btn card-btn-druid">Подробнее</Link>
										</div>
									</div>

									<div className="card card-priest">
										<Link to="raids-armours/priest">
											<img src={priestCardImg} className="card-img" alt="Комплекты рейдовой брони для жреца" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="raids-armours/priest">
												<h3 className="card-title card-title-priest">Жрец</h3>
											</Link>
											<p className="card-text card-text-priest">Комплекты рейдовой брони для жреца</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-priest">от 100<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="raids-armours/priest" className="card-btn card-btn-priest">Подробнее</Link>
										</div>
									</div>

									<div className="card card-mage">
										<Link to="raids-armours/mage">
											<img src={mageCardImg} className="card-img" alt="Комплекты рейдовой брони для мага" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="raids-armours/mage">
												<h3 className="card-title card-title-mage">Маг</h3>
											</Link>
											<p className="card-text card-text-mage">Комплекты рейдовой брони для мага</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-mage">от 100<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="raids-armours/mage" className="card-btn card-btn-mage">Подробнее</Link>
										</div>
									</div>

									<div className="card card-monk">
										<Link to="raids-armours/monk">
											<img src={monkCardImg} className="card-img" alt="Комплекты рейдовой брони для монаха" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="raids-armours/monk">
												<h3 className="card-title card-title-monk">Монах</h3>
											</Link>
											<p className="card-text card-text-monk">Комплекты рейдовой брони для монаха</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-monk">от 100<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="raids-armours/monk" className="card-btn card-btn-monk">Подробнее</Link>
										</div>
									</div>

									<div className="card card-hunter">
										<Link to="raids-armours/hunter">
											<img src={hunterCardImg} className="card-img" alt="Комплекты рейдовой брони для охотника" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="raids-armours/hunter">
												<h3 className="card-title card-title-hunter">Охотник</h3>
											</Link>
											<p className="card-text card-text-hunter">Комплекты рейдовой брони для охотника</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-hunter">от 100<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="raids-armours/hunter" className="card-btn card-btn-hunter">Подробнее</Link>
										</div>
									</div>

									<div className="card card-demon-hunter">
										<Link to="raids-armours/demon-hunter">
											<img src={demonHunterCardImg} className="card-img" alt="Комплекты рейдовой брони для охотника на демонов" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="raids-armours/demon-hunter">
												<h3 className="card-title card-title-demon-hunter">Охотник на демонов</h3>
											</Link>
											<p className="card-text card-text-demon-hunter">Комплекты рейдовой брони для охотника на демонов</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-demon-hunter">от 100<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="raids-armours/demon-hunter" className="card-btn card-btn-demon-hunter">Подробнее</Link>
										</div>
									</div>

									<div className="card card-paladin">
										<Link to="raids-armours/paladin">
											<img src={paladinCardImg} className="card-img" alt="Комплекты рейдовой брони для паладина" />
										</Link>
										<div className="card-body">
											<Link className="card-link paladin-link" to="raids-armours/paladin">
												<h3 className="card-title card-title-paladin">Паладин</h3>
											</Link>
											<p className="card-text card-text-paladin">Комплекты рейдовой брони для паладина</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-paladin">от 100<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="raids-armours/paladin" className="card-btn card-btn-paladin">Подробнее</Link>
										</div>
									</div>

									<div className="card card-awakener">
										<Link to="raids-armours/awakener">
											<img src={awakenerCardImg} className="card-img" alt="Комплекты рейдовой брони для пробудителя" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="raids-armours/awakener">
												<h3 className="card-title card-title-awakener">Пробудитель</h3>
											</Link>
											<p className="card-text card-text-awakener">Комплекты рейдовой брони для пробудителя</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-awakener">от 100<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="raids-armours/awakener" className="card-btn card-btn-awakener">Подробнее</Link>
										</div>
									</div>

									<div className="card card-rogue">
										<Link to="raids-armours/rogue">
											<img src={rogueCardImg} className="card-img" alt="Комплекты рейдовой брони для разбойника" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="raids-armours/rogue">
												<h3 className="card-title card-title-rogue">Разбойник</h3>
											</Link>
											<p className="card-text card-text-rogue">Комплекты рейдовой брони для разбойника</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-rogue">от 100<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="raids-armours/rogue" className="card-btn card-btn-rogue">Подробнее</Link>
										</div>
									</div>

									<div className="card card-death-knight">
										<Link to="raids-armours/death-knight">
											<img src={deathKnightCardImg} className="card-img" alt="Комплекты рейдовой брони для рыцаря Смерти" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="raids-armours/death-knight">
												<h3 className="card-title card-title-death-knight">Рыцарь Смерти</h3>
											</Link>
											<p className="card-text card-text-death-knight">Комплекты рейдовой брони для рыцаря смерти</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-death-knight">от 100<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="raids-armours/death-knight" className="card-btn card-btn-death-knight">Подробнее</Link>
										</div>
									</div>

									<div className="card card-warlock">
										<Link to="raids-armours/warlock">
											<img src={warlockCardImg} className="card-img" alt="Комплекты рейдовой брони для чернокнижника" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="raids-armours/warlock">
												<h3 className="card-title card-title-warlock">Чернокнижник</h3>
											</Link>
											<p className="card-text card-text-warlock">Комплекты рейдовой брони для чернокнижника</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-warlock">от 100<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="raids-armours/warlock" className="card-btn card-btn-warlock">Подробнее</Link>
										</div>
									</div>

									<div className="card card-shaman">
										<Link to="raids-armours/shaman">
											<img src={shamanCardImg} className="card-img" alt="Комплекты рейдовой брони для шамана" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="raids-armours/shaman">
												<h3 className="card-title card-title-shaman">Шаман</h3>
											</Link>
											<p className="card-text card-text-shaman">Комплекты рейдовой брони для шамана</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-shaman">от 100<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="raids-armours/shaman" className="card-btn card-btn-shaman">Подробнее</Link>
										</div>
									</div>
								</div>
							</div>

							{ /* Таб контент оружие */}
							<div className="tab-pane fade show active mt-5" id="pills-weapons">
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									<div className="card card-weapons card-weapons-one-handed">
										<Link to="weapons/one-handed">
											<img src={OneHandedWeaponsCardImg} className="card-img" alt="Одноручное Оружие" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="weapons/one-handed">
												<h3 className="card-title card-title-weapons card-title-weapons-one-handed">Одноручное Оружие</h3>
											</Link>
											<p className="card-text card-text-weapons card-text-weapons-one-handed">Закажите любое одноручное оружие на выбор</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-weapons card-price-weapons-one-handed">от 300<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="weapons/one-handed" className="card-btn card-btn-weapons card-btn-weapons-one-handed">Подробнее</Link>
										</div>
									</div>

									<div className="card card-weapons card-weapons-two-handed">
										<Link to="weapons/two-handed">
											<img src={TwoHandedWeaponsCardImg} className="card-img" alt="Двуручное Оружие" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="weapons/two-handed">
												<h3 className="card-title card-title-weapons card-title-weapons-two-handed">Двуручное Оружие</h3>
											</Link>
											<p className="card-text card-text-weapons card-text-weapons-two-handed">Закажите любое двуручное оружие на выбор</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-weapons card-price-weapons-two-handed">от 300<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="weapons/two-handed" className="card-btn card-btn-weapons card-btn-weapons-two-handed">Подробнее</Link>
										</div>
									</div>

									<div className="card card-weapons card-weapons-range">
										<Link to="weapons/range">
											<img src={RangeWeaponsCardImg} className="card-img" alt="Оружие дальнего боя" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="weapons/range">
												<h3 className="card-title card-title-weapons card-title-weapons-range">Оружие дальнего боя</h3>
											</Link>
											<p className="card-text card-text-weapons card-text-weapons-range">Закажите любое оружие дальнего боя на выбор</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-weapons card-price-weapons-range">от 300<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="weapons/range" className="card-btn card-btn-weapons card-btn-weapons-range">Подробнее</Link>
										</div>
									</div>

									<div className="card card-weapons card-weapons-legendary">
										<Link to="weapons/legendary">
											<img src={LegendaryWeaponsCardImg} className="card-img" alt="Легендарное Оружие" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="weapons/legendary">
												<h3 className="card-title card-title-weapons card-title-weapons-legendary">Легендарное Оружие</h3>
											</Link>
											<p className="card-text card-text-weapons card-text-weapons-legendary">Закажите любое легендарное оружие</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-weapons card-price-weapons-legendary">от 500<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="weapons/legendary" className="card-btn card-btn-weapons card-btn-weapons-legendary">Подробнее</Link>
										</div>
									</div>

									<div className="card card-weapons card-weapons-artefact">
										<Link to="weapons/artefact">
											<img src={ArtefactWeaponsCardImg} className="card-img" alt="Артефакты Legion" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="weapons/artefact">
												<h3 className="card-title card-title-weapons card-title-weapons-artefact">Артефакты Legion</h3>
											</Link>
											<p className="card-text card-text-weapons card-text-weapons-artefact">Закажите любое артефактное оружие</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-weapons card-price-weapons-artefact">от 800<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="weapons/artefact" className="card-btn card-btn-weapons card-btn-weapons-artefact">Подробнее</Link>
										</div>
									</div>

									<div className="card card-weapons card-weapons-decorative">
										<Link to="weapons/decorative">
											<img src={DecorativeWeaponsCardImg} className="card-img" alt="Декоративное Оружие" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="weapons/decorative">
												<h3 className="card-title card-title-weapons card-title-weapons-decorative">Декоративное оружие</h3>
											</Link>
											<p className="card-text card-text-weapons card-text-weapons-decorative">Закажите любое декоративное оружие</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-weapons card-price-weapons-decorative">от 1000<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="weapons/decorative" className="card-btn card-btn-weapons card-btn-weapons-decorative">Подробнее</Link>
										</div>
									</div>
								</div>
							</div>

							{/* Таб контент броня */}
							<div className="tab-pane fade show active mt-5" id="pills-armour">
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									<div className="card card-armours card-armours-shields">
										<Link to="armours/shields">
											<img src={ShieldsCardImg} className="card-img" alt="Щиты" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="armours/shields">
												<h3 className="card-title card-title-armours card-title-armours-shields">Щиты</h3>
											</Link>
											<p className="card-text card-text-armours card-text-armours-shields">Закажите любой щит на выбор</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-armours card-price-armours-shields">от 300<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="armours/shields" className="card-btn card-btn-armours card-btn-armours-shields">Подробнее</Link>
										</div>
									</div>

									<div className="card card-armours card-armours-cloak">
										<Link to="armours/cloaks">
											<img src={CloaksCardImg} className="card-img" alt="Плащи" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="armours/cloaks">
												<h3 className="card-title card-title-armours card-title-armours-cloak">Плащи</h3>
											</Link>
											<p className="card-text card-text-armours card-text-armours-cloak">Закажите любой плащ на выбор</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-armours card-price-armours-cloak">от 300<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="armours/cloaks" className="card-btn card-btn-armours card-btn-armours-cloak">Подробнее</Link>
										</div>
									</div>

									<div className="card card-armours card-armours-fishing-rods">
										<Link to="armours/fishing-rods">
											<img src={FishingRodsCardImg} className="card-img" alt="Удочки" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="armours/fishing-rods">
												<h3 className="card-title card-title-armours card-title-armours-fishing-rods">Удочки</h3>
											</Link>
											<p className="card-text card-text-armours card-text-armours-fishing-rods">Закажите любую удочку на выбор</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-armours card-price-armours-fishing-rods">от 300<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="armours/fishing-rods" className="card-btn card-btn-armours card-btn-armours-fishing-rods">Подробнее</Link>
										</div>
									</div>
								</div>
							</div>

							{/* Таб контент маунты */}
							<div className="tab-pane fade fade show active mt-5" id="pills-mounts" >
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									<div className="card card-mounts card-mounts-water">
										<Link to="mounts/water">
											<img src={WaterMountsCardImg} className="card-img" alt="Водные маунты" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="mounts/water">
												<h3 className="card-title card-title-mounts card-title-mounts-water">Водные</h3>
											</Link>
											<p className="card-text card-text-mounts card-text-mounts-water">Водные маунты, обитатели морей и океанов, могучие владыки глубин. Они обеспечат вам скорость морской бури и откроют тайны подводного мира. Покорите глубины Азерота!</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-mounts card-price-mounts-water">от 100<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="mounts/water" className="card-btn card-btn-mounts-water">Подробнее</Link>
										</div>
									</div>

									<div className="card card-mounts card-mounts-earth">
										<Link to="mounts/earth">
											<img src={EarthMountsCardImg} className="card-img" alt="Наземные маунты" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="mounts/earth">
												<h3 className="card-title card-title-mounts card-title-mounts-earth">Наземные</h3>
											</Link>
											<p className="card-text card-text-mounts card-text-mounts-earth">Наземные маунты, обитатели пещер, могучие бегуны. Они обеспечат вам молниеносную скорость и превосходство в любом путешествии. Покорите бескрайние просторы Азерота!</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-mounts card-price-mounts-earth">от 100<img className="dollar" src={dollarImg}  alt={dollarAlt} /></p>
											<Link to="mounts/earth" className="card-btn card-btn-mounts-earth">Подробнее</Link>
										</div>
									</div>

									<div className="card card-mounts card-mounts-fly">
										<Link to="mounts/fly">
											<img src={FlyMountsCardImg} className="card-img" alt="Летающие маунты" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="mounts/fly">
												<h3 className="card-title card-title-mounts card-title-mounts-fly">Летающие</h3>
											</Link>
											<p className="card-text card-text-mounts card-text-mounts-fly">Летающие маунты, властелины небес, повелители бескрайних воздушных просторов. Они обеспечат вам скорость ветра и абсолютное превосходство в воздухе. Покорите небеса Азерота!</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-mounts card-price-mounts-fly">от 100<img className="dollar" src={dollarImg}  alt={dollarAlt} /></p>
											<Link to="mounts/fly" className="card-btn card-btn-mounts-fly">Подробнее</Link>
										</div>
									</div>
								</div>
							</div>

							{/* Таб контент голд */}
							<div className="tab-pane fade fade show active mt-5" id="pills-gold">
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									<div className="card card-gold card-gold-horde">
										<Link to="gold/horde">
											<img src={HordeGoldCardImg} className="card-img" alt="Золото для игроков Орды" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="gold/horde">
												<h3 className="card-title card-title-gold card-title-gold-horde">Орда</h3>
											</Link>
											<p className="card-text card-text-gold card-text-gold-horde">Золото для игроков Орды. Любой сервер. За Орду!</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-gold card-price-gold-horde">от 1000<img className="gold" src={goldImg} alt={goldAlt} /></p>
											<Link to="gold/horde" className="card-btn card-btn-gold card-btn-gold-horde">Подробнее</Link>
										</div>
									</div>

									<div className="card card-gold card-gold-alliance">
										<Link to="gold/alliance">
											<img src={AllianceGoldCardImg} className="card-img" alt="Золото для игроков Альянса" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="gold/alliance">
												<h3 className="card-title card-title-gold card-title-gold-alliance">Альянс</h3>
											</Link>
											<p className="card-text card-text-gold card-text-gold-alliance">Золото для игроков Альянса. Любой сервер. За Альянс!</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-gold card-price-gold-alliance">от 1000<img className="gold" src={goldImg} alt={goldAlt} /></p>
											<Link to="gold/alliance" className="card-btn card-btn-gold card-btn-gold-alliance">Подробнее</Link>
										</div>
									</div>
								</div>
							</div>

							{/* Таб контент профессии */}
							<div className="tab-pane fade fade show active mt-5" id="pills-professions">
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									<div className="card card-professions card-alchemy">
										<Link to="professions/alchemy">
											<img src={AlchemyCardImg} className="card-img" alt="Алхимия" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="professions/alchemy">
												<h3 className="card-title card-title-professions card-title-alchemy">Алхимия</h3>
											</Link>
											<p className="card-text card-text-professions card-text-alchemy">С помощью алхимии можно создавать мощные зелья, настои и элексиры</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-professions card-price-alchemy">от 200<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="professions/alchemy" className="card-btn card-btn-professions card-btn-alchemy">Подробнее</Link>
										</div>
									</div>

									<div className="card card-professions card-mining">
										<Link to="professions/mining">
											<img src={MiningCardImg} className="card-img" alt="Горное дело" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="professions/mining">
												<h3 className="card-title card-title-professions card-title-mining">Горное дело</h3>
											</Link>
											<p className="card-text card-text-professions card-text-mining">Горное дело позволяет добывать руду во множестве мест по всему миру</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-professions card-price-mining">от 200<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="professions/mining" className="card-btn card-btn-professions card-btn-mining">Подробнее</Link>
										</div>
									</div>

									<div className="card card-professions card-engineering">
										<Link to="professions/engineering">
											<img src={EngineeringCardImg} className="card-img" alt="Инженерное дело" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="professions/engineering">
												<h3 className="card-title card-title-professions card-title-engineering">Инженерное дело</h3>
											</Link>
											<p className="card-text card-text-professions card-text-engineering">Инженеры превращают различные материалы в интересные и полезные гаджеты, необычные предметы и даже в эпические шлемы и очки, оружия дальнего боя и прицелы к ним</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-professions card-price-engineering">от 200<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="professions/engineering" className="card-btn card-btn-professions card-btn-engineering">Подробнее</Link>
										</div>
									</div>

									<div className="card card-professions card-leatherworking">
										<Link to="professions/leatherworking">
											<img src={LeatherworkingCardImg} className="card-img" alt="Кожевничество" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="professions/leatherworking">
												<h3 className="card-title card-title-professions card-title-leatherworking">Кожевничество</h3>
											</Link>
											<p className="card-text card-text-professions card-text-leatherworking">Ремесленная профессия, которая использует шкуры и кожу для изготовления доспехов и барабанов</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-professions card-price-leatherworking">от 200<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="professions/leatherworking" className="card-btn card-btn-professions card-btn-leatherworking">Подробнее</Link>
										</div>
									</div>

									<div className="card card-professions card-blacksmithing">
										<Link to="professions/blacksmithing">
											<img src={BlacksmithingCardImg} className="card-img" alt="Кузнечное дело" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="professions/blacksmithing">
												<h3 className="card-title card-title-professions card-title-blacksmithing">Кузнечное дело</h3>
											</Link>
											<p className="card-text card-text-professions card-text-blacksmithing">Ремесленная профессия которая использует различные металлы для изготовления пластинчатых доспехов, оружия и других полезных предметов</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-professions card-price-blacksmithing">от 200<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="professions/blacksmithing" className="card-btn card-btn-professions card-btn-blacksmithing">Подробнее</Link>
										</div>
									</div>

									<div className="card card-professions card-enchanting">
										<Link to="professions/enchanting">
											<img src={EnchantingCardImg} className="card-img" alt="Наложение чар" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="professions/enchanting">
												<h3 className="card-title card-title-professions card-title-enchanting">Наложение чар</h3>
											</Link>
											<p className="card-text card-text-professions card-text-enchanting">Наложение чар позволяет получать материалы для зачаровывания путем распыления брони необычного или лучшего качества и превращать их в постоянные улучшения для собственной брони или брони союзников</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-professions card-price-enchanting">от 200<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="professions/enchanting" className="card-btn card-btn-professions card-btn-enchanting">Подробнее</Link>
										</div>
									</div>

									<div className="card card-professions card-inscription">
										<Link to="professions/inscription">
											<img src={InscriptionCardImg} className="card-img" alt="Начертание" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="professions/inscription">
												<h3 className="card-title card-title-professions card-title-inscription">Начертание</h3>
											</Link>
											<p className="card-text card-text-professions card-text-inscription">Начертание позволяет создавать символы, свитки и карты с помощью чернил получаемых при измельчении трав</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-professions card-price-inscription">от 200<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="professions/inscription" className="card-btn card-btn-professions card-btn-inscription">Подробнее</Link>
										</div>
									</div>

									<div className="card card-professions card-tailoring">
										<Link to="professions/tailoring">
											<img src={TailoringCardImg} className="card-img" alt="Портняжное дело" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="professions/tailoring">
												<h3 className="card-title card-title-professions card-title-tailoring">Портняжное дело</h3>
											</Link>
											<p className="card-text card-text-professions card-text-tailoring">Ремесленная профессия которая использует различные ткани для создания брони, сумок, чародейских нитей и даже ковров-самолетов</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-professions card-price-tailoring">от 200<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="professions/tailoring" className="card-btn card-btn-professions card-btn-tailoring">Подробнее</Link>
										</div>
									</div>

									<div className="card card-professions card-skinning">
										<Link to="professions/skinning">
											<img src={SkinningCardImg} className="card-img" alt="Снятие шкур" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="professions/skinning">
												<h3 className="card-title card-title-professions card-title-skinning">Снятие шкур</h3>
											</Link>
											<p className="card-text card-text-professions card-text-skinning">Собирательная профессия, позволяющая снимать кожу, шкуры, чешуйки и панцири с убитых животных, драконов, нерубов и силитидов</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-professions card-price-skinning">от 200<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="professions/skinning" className="card-btn card-btn-professions card-btn-skinning">Подробнее</Link>
										</div>
									</div>

									<div className="card card-professions card-herbalism">
										<Link to="professions/herbalism">
											<img src={HerbalismCardImg} className="card-img" alt="Травничество" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="professions/herbalism">
												<h3 className="card-title card-title-professions card-title-herbalism">Травничество</h3>
											</Link>
											<p className="card-text card-text-professions card-text-herbalism">Собирательная профессия позволяющая собирать травы</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-professions card-price-herbalism">от 200<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="professions/herbalism" className="card-btn card-btn-professions card-btn-herbalism">Подробнее</Link>
										</div>
									</div>

									<div className="card card-professions card-jewelcrafting">
										<Link to="professions/jewelcrafting">
											<img src={JewelcraftingCardImg} className="card-img" alt="Ювелирное дело" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="professions/jewelcrafting">
												<h3 className="card-title card-title-professions card-title-jewelcrafting">Ювелирное дело</h3>
											</Link>
											<p className="card-text card-text-professions card-text-jewelcrafting">Ремесленная профессия с помощью которой можно создавать различные драгоценные камни, повышающие различные характеристики. Эти камни могут быть вставлены в экипировку</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-professions card-price-jewelcrafting">от 200<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="professions/jewelcrafting" className="card-btn card-btn-professions card-btn-jewelcrafting">Подробнее</Link>
										</div>
									</div>

									<div className="card card-professions card-archaeology">
										<Link to="professions/archaeology">
											<img src={ArchaeologyCardImg} className="card-img" alt="Археология" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="professions/archaeology">
												<h3 className="card-title card-title-professions card-title-archaeology">Археология</h3>
											</Link>
											<p className="card-text card-text-professions card-text-archaeology">Вторичная профессия позволяющая увидеть, что скрывают в себе глубины Азерота. Археологи должны путешествовать по всему миру в поисках фрагментов древних артефактов, которые содержат интереснейшие частицы истории мира</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-professions card-price-archaeology">от 200<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="professions/archaeology" className="card-btn card-btn-professions card-btn-archaeology">Подробнее</Link>
										</div>
									</div>

									<div className="card card-professions card-riding">
										<Link to="professions/riding">
											<img src={RidingCardImg} className="card-img" alt="Верховая езда" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="professions/riding">
												<h3 className="card-title card-title-professions card-title-riding">Верховая езда</h3>
											</Link>
											<p className="card-text card-text-professions card-text-riding">Пассивный навык, позволяющий использовать верховых животных для передвижения по всему миру. Чем выше навык верховой езды, тем быстрее ваши верховые животные могут передвигаться по миру</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-professions card-price-riding">от 200<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="professions/riding" className="card-btn card-btn-professions card-btn-riding">Подробнее</Link>
										</div>
									</div>

									<div className="card card-professions card-cooking">
										<Link to="professions/cooking">
											<img src={CookingCardImg} className="card-img" alt="Кулинария" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="professions/cooking">
												<h3 className="card-title card-title-professions card-title-cooking">Кулинария</h3>
											</Link>
											<p className="card-text card-text-professions card-text-cooking">Вторичная профессия, позволяющая комбинировать рыбу или мясо, превращая их во вкусную еду и напитки, восстанавливающие здоровье или ману, и дающие полезные боевые баффы</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-professions card-price-cooking">от 200<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="professions/cooking" className="card-btn card-btn-professions card-btn-cooking">Подробнее</Link>
										</div>
									</div>

									<div className="card card-professions card-first-aid">
										<Link to="professions/first-aid">
											<img src={FirstAidCardImg} className="card-img" alt="Первая помощь" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="professions/first-aid">
												<h3 className="card-title card-title-professions card-title-first-aid">Первая помощь</h3>
											</Link>
											<p className="card-text card-text-professions card-text-cooking">Вторичная профессия позволяющая превращать ткани в бинты. Очень полезна классам, у которых нет собственного лечащего заклинания</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-professions card-price-first-aid">от 200<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="professions/first-aid" className="card-btn card-btn-professions card-btn-first-aid">Подробнее</Link>
										</div>
									</div>

									<div className="card card-professions card-fishing">
										<Link to="professions/fishing">
											<img src={FishingCardImg} className="card-img" alt="Рыбная ловля" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="professions/fishing">
												<h3 className="card-title card-title-professions card-title-fishing">Рыбная ловля</h3>
											</Link>
											<p className="card-text card-text-professions card-text-fishing">Вторичная собирательная профессия, позволяющая рыбачить в различных водоемах по всему миру</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-professions card-price-fishing">от 200<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="professions/fishing" className="card-btn card-btn-professions card-btn-fishing">Подробнее</Link>
										</div>
									</div>

									<div className="card card-professions card-junkyard-tinkering">
										<Link to="professions/junkyard-tinkering">
											<img src={JunkyardTinkeringCardImg} className="card-img" alt="Кустарная механика" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="professions/junkyard-tinkering">
												<h3 className="card-title card-title-professions card-title-junkyard-tinkering">Кустарная механика</h3>
											</Link>
											<p className="card-text card-text-professions card-text-junkyard-tinkering">Паскал-К0Р0Л6, огромный железный робот, изготавливающий снаряжение, средства передвижения, игрушки, расходные материалы и другие полезные вещи в обмен на запчасти и аккумуляторы, которые можно добывать в Мехагоне. Также на острове можно находить чертежи новых предметов</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-professions card-price-junkyard-tinkering">от 200<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="professions/junkyard-tinkering" className="card-btn card-btn-professions card-btn-junkyard-tinkering">Подробнее</Link>
										</div>
									</div>
								</div>
							</div>

							{/* Таб контент pvp */}
							<div className="tab-pane fade fade show active mt-5" id="pills-pvp">
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									<div className="card card-pvp card-pvp-honor">
										<Link to="pvp/honour">
											<img src={HonourCardImg} className="card-img" alt="Очки чести" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="pvp/honour">
												<h3 className="card-title card-title-pvp card-title-honor">Честь</h3>
											</Link>
											<p className="card-text card-text-pvp card-text-honor">Очки чести необходимые для покупки PvP экипировки</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-pvp price-honor">от 100<img className="dollar" src={dollarImg} alt={goldAlt} /></p>
											<Link to="pvp/honour" className="card-btn card-btn-pvp card-btn-honor">Подробнее</Link>
										</div>
									</div>

									<div className="card card-pvp card-pvp-arena">
										<Link to="pvp/arena">
											<img src={ArenaCardImg} className="card-img" alt="Очки Арены" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="pvp/arena">
												<h3 className="card-title card-title-pvp card-title-arena">Арена</h3>
											</Link>
											<p className="card-text card-text-pvp card-text-arena">Очки Арены необходимые для покупки мощной и самой лучшей PvP экипировки</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-pvp price-arena">от 200<img className="dollar" src={dollarImg} alt={goldAlt} /></p>
											<Link to="pvp/arena" className="card-btn card-btn-pvp card-btn-arena">Подробнее</Link>
										</div>
									</div>

									<div className="card card-pvp card-pvp-rbg">
										<Link to="pvp/rbg">
											<img src={RbgCardImg} className="card-img" alt="Рейтинговые Поля Боя" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="pvp/rbg">
												<h3 className="card-title card-title-pvp card-title-rbg">Рейтинговые Поля Боя</h3>
											</Link>
											<p className="card-text card-text-pvp card-text-rbg">Рейтинговые бои для покупки уникальной PvP экипировки и званий таких как Гладиатор</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-pvp price-rbg">от 300<img className="dollar" src={dollarImg} alt={goldAlt} /></p>
											<Link to="pvp/rbg" className="card-btn card-btn-pvp card-btn-rbg">Подробнее</Link>
										</div>
									</div>
								</div>
							</div>





							{/* Таб контент рейды */}
							<div className="tab-pane fade fade show active mt-5" id="pills-raids">
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									<div className="card card-raids card-raids-classic">
										<Link to="raids/classic">
											<img src={ClassicCardImg} className="card-img card-img-raids" alt="Classic" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="raids/classic">
												<h3 className="card-title card-title-raids card-title-raids-classic">Classic</h3>
											</Link>
											<p className="card-text card-text-raids card-text-raids-classic">Закажите гарантированное прохождение любого рейда из дополнения <span className="card-text-raids-classic_color">Classic</span></p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-raids card-price-raids-classic">от 50<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="raids/classic" className="card-btn card-btn-raids card-btn-raids-classic">Подробнее</Link>
										</div>
									</div>

									<div className="card card-raids card-raids-burning-crusade">
										<Link to="raids/burning-crusade">
											<img src={BurningCrusadeCardImg} className="card-img card-img-raids" alt="The Burning Crusade" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="raids/burning-crusade">
												<h3 className="card-title card-title-raids card-title-raids-burning-crusade">The Burning Crusade</h3>
											</Link>
											<p className="card-text card-text-raids card-text-raids-burning-crusade">Закажите гарантированное прохождение любого рейда из дополнения <span className="card-text-raids-burning-crusade_color">The Burning Crusade</span></p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-raids card-price-raids-burning-crusade">от 100<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="raids/burning-crusade" className="card-btn card-btn-raids card-btn-raids-burning-crusade">Подробнее</Link>
										</div>
									</div>

									<div className="card card-raids card-raids-wrath-of-the-lich-king">
										<Link to="raids/wrath-of-the-lich-king">
											<img src={WrathOfTheLichKingCardImg} className="card-img card-img-raids" alt="Wrath of the Lich King" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="raids/wrath-of-the-lich-king">
												<h3 className="card-title card-title-raids card-title-raids-wrath-of-the-lich-king">Wrath of the Lich King</h3>
											</Link>
											<p className="card-text card-text-raids card-text-raids-wrath-of-the-lich-king">Закажите гарантированное прохождение любого рейда из дополнения <span className="card-text-raids-wrath-of-the-lich-king_color">Wrath of the Lich King</span></p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-raids card-price-raids-wrath-of-the-lich-king">от 150<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="raids/wrath-of-the-lich-king" className="card-btn card-btn-raids card-btn-raids-wrath-of-the-lich-king">Подробнее</Link>
										</div>
									</div>

									<div className="card card-raids card-raids-cataclysm">
										<Link to="raids/cataclysm">
											<img src={CataclysmCardImg} className="card-img card-img-raids" alt="Cataclysm" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="raids/cataclysm">
												<h3 className="card-title card-title-raids card-title-raids-cataclysm">Cataclysm</h3>
											</Link>
											<p className="card-text card-text-raids card-text-raids-cataclysm">Закажите гарантированное прохождение любого рейда из дополнения <span className="card-text-raids-cataclysm_color">Cataclysm</span></p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-raids card-price-raids-cataclysm">от 200<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="raids/cataclysm" className="card-btn card-btn-raids card-btn-raids-cataclysm">Подробнее</Link>
										</div>
									</div>

									<div className="card card-raids card-raids-mists-of-pandaria">
										<Link to="raids/mists-of-pandaria">
											<img src={MistsOfPandariaCardImg} className="card-img card-img-raids" alt="Mists of Pandaria" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="raids/mists-of-pandaria">
												<h3 className="card-title card-title-raids card-title-raids-mists-of-pandaria">Mists of Pandaria</h3>
											</Link>
											<p className="card-text card-text-raids card-text-raids-mists-of-pandaria">Закажите гарантированное прохождение любого рейда из дополнения <span className="card-text-raids-mists-of-pandaria_color">Mists of Pandaria</span></p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-raids card-price-raids-mists-of-pandaria">от 250<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="raids/mists-of-pandaria" className="card-btn card-btn-raids card-btn-raids-mists-of-pandaria">Подробнее</Link>
										</div>
									</div>

									<div className="card card-raids card-raids-warlords-of-draenor">
										<Link to="raids/warlords-of-draenor">
											<img src={WarlordOfDraenorCardImg} className="card-img card-img-raids" alt="Warlords of Draenor" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="raids/warlords-of-draenor">
												<h3 className="card-title card-title-raids card-title-raids-warlords-of-draenor">Warlords of Draenor</h3>
											</Link>
											<p className="card-text card-text-raids card-text-raids-warlords-of-draenor">Закажите гарантированное прохождение любого рейда из дополнения <span className="card-text-raids-warlords-of-draenor_color">Warlords of Draenor</span></p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-raids card-price-raids-warlords-of-draenor">от 300<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="raids/warlords-of-draenor" className="card-btn card-btn-raids card-btn-raids-warlords-of-draenor">Подробнее</Link>
										</div>
									</div>

									<div className="card card-raids card-raids-legion">
										<Link to="raids/legion">
											<img src={LegionCardImg} className="card-img card-img-raids" alt="Legion" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="raids/legion">
												<h3 className="card-title card-title-raids card-title-raids-legion">Legion</h3>
											</Link>
											<p className="card-text card-text-raids card-text-raids-legion">Закажите гарантированное прохождение любого рейда из дополнения <span className="card-text-raids-legion_color">Legion</span></p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-raids card-price-raids-legion">от 350<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="raids/legion" className="card-btn card-btn-raids card-btn-raids-legion">Подробнее</Link>
										</div>
									</div>

									<div className="card card-raids card-raids-battle-for-azeroth">
										<Link to="raids/battle-for-azeroth">
											<img src={BattleForAzerothCardImg} className="card-img card-img-raids" alt="Battle for Azeroth" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="raids/battle-for-azeroth">
												<h3 className="card-title card-title-raids card-title-raids-battle-for-azeroth">Battle for Azeroth</h3>
											</Link>
											<p className="card-text card-text-raids card-text-raids-battle-for-azeroth">Закажите гарантированное прохождение любого рейда из дополнения <span className="card-text-raids-battle-for-azeroth_color">Battle for Azeroth</span></p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-raids card-price-raids-battle-for-azeroth">от 400<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="raids/battle-for-azeroth" className="card-btn card-btn-raids card-btn-raids-battle-for-azeroth">Подробнее</Link>
										</div>
									</div>

									<div className="card card-raids card-raids-shadowlands">
										<Link to="raids/shadowlands">
											<img src={ShadowlandsCardImg} className="card-img card-img-raids" alt="Shadowlands" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="raids/shadowlands">
												<h3 className="card-title card-title-raids card-title-raids-shadowlands">Shadowlands</h3>
											</Link>
											<p className="card-text card-text-raids card-text-raids-shadowlands">Закажите гарантированное прохождение любого рейда из дополнения <span className="card-text-raids-shadowlands_color">Shadowlands</span></p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-raids card-price-raids-shadowlands">от 500<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="raids/shadowlands" className="card-btn card-btn-raids card-btn-raids-shadowlands">Подробнее</Link>
										</div>
									</div>

									<div className="card card-raids card-raids-dragonflight">
										<Link to="raids/dragonflight">
											<img src={DragonflightCardImg} className="card-img card-img-raids" alt="Dragonflight" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="raids/dragonflight">
												<h3 className="card-title card-title-raids card-title-raids-dragonflight">Dragonflight</h3>
											</Link>
											<p className="card-text card-text-raids card-text-raids-dragonflight">Закажите гарантированное прохождение любого рейда из дополнения <span className="card-text-raids-dragonflight_color">Dragonflight</span></p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-raids card-price-raids-dragonflight">от 550<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="raids/dragonflight" className="card-btn card-btn-raids card-btn-raids-dragonflight">Подробнее</Link>
										</div>
									</div>

									<div className="card card-raids card-raids-war-within">
										<Link to="raids/war-within">
											<img src={WarWithinCardImg} className="card-img card-img-raids" alt="The War Within" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="raids/war-within">
												<h3 className="card-title card-title-raids card-title-raids-war-within">The War Within</h3>
											</Link>
											<p className="card-text card-text-raids card-text-raids-war-within">Закажите гарантированное прохождение любого рейда из дополнения <span className="card-text-raids-war-within_color">The War Within</span></p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-raids card-price-raids-war-within">от 600<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="raids/war-within" className="card-btn card-btn-raids card-btn-raids-war-within">Подробнее</Link>
										</div>
									</div>

									<div className="card card-raids card-raids-midnight">
										<Link to="raids/midnight">
											<img src={MidnightCardImg} className="card-img card-img-raids" alt="Midnight" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="raids/midnight">
												<h3 className="card-title card-title-raids card-title-raids-midnight">Midnight</h3>
											</Link>
											<p className="card-text card-text-raids card-text-raids-midnight">Закажите гарантированное прохождение любого рейда из дополнения <span className="card-text-raids-midnight_color">Midnight</span></p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-raids card-price-raids-midnight">от 800<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="raids/midnight" className="card-btn card-btn-raids card-btn-raids-midnight">Подробнее</Link>
										</div>
									</div>

									<div className="card card-raids card-raids-last-titan">
										<Link to="raids/last-titan">
											<img src={LastTitanCardImg} className="card-img card-img-raids" alt="The Last Titan" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="raids/last-titan">
												<h3 className="card-title card-title-raids card-title-raids-last-titan">The Last Titan</h3>
											</Link>
											<p className="card-text card-text-raids card-text-raids-last-titan">Закажите гарантированное прохождение любого рейда из дополнения <span className="card-text-raids-last-titan_color">The Last Titan</span></p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-raids card-price-raids-last-titan">от 1000<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="raids/last-titan" className="card-btn card-btn-raids card-btn-raids-last-titan">Подробнее</Link>
										</div>
									</div>
								</div>
							</div>




							{/* Таб контент достижения */}
							<div className="tab-pane fade fade show active mt-5" id="pills-achievements">
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									<div className="card card-achievements card-achievements-quests">
										<Link to="achievements/quests">
											<img src={QuestsCardImg} className="card-img card-img-achievements" alt="Задания" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="achievements/quests">
												<h3 className="card-title card-title-achievements card-title-achievements-quests">Задания</h3>
											</Link>
											<p className="card-text card-text-achievements card-text-achievements-quest">Закажите выполнение всех заданий</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-achievements card-price-achievements-quests">от 1000<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="achievements/quests" className="card-btn card-btn-achievements card-btn-achievements-quests">Подробнее</Link>
										</div>
									</div>

									<div className="card card-achievements card-achievements-max-equipments">
										<Link to="achievements/equipments">
											<img src={EquipmentsCardImg} className="card-img card-img-achievements" alt="Экипировка 1000 уровня" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="achievements/equipments">
												<h3 className="card-title card-title-achievements card-title-achievements-max-equipments">Экипировка 1000 уровня</h3>
											</Link>
											<p className="card-text card-text-achievements card-text-achievements-max-equipments">Закажите выполнение достижения на сбор экипировки 1000 уровня</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-achievements card-price-achievements-max-equipments">от 1000<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="achievements/equipments" className="card-btn card-btn-achievements card-btn-achievements-max-equipments">Подробнее</Link>
										</div>
									</div>

									<div className="card card-achievements card-achievements-max-mounts">
										<Link to="achievements/mounts">
											<img src={MountsCardImg} className="card-img card-img-achievements" alt="1000 маунтов" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="achievements/mounts">
												<h3 className="card-title card-title-achievements card-title-achievements-max-mounts">1000 маунтов</h3>
											</Link>
											<p className="card-text card-text-achievements card-text-achievements-max-mounts">Закажите сбор 1000 средств передвижений</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-achievements card-price-achievements-max-mounts">от 1000<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="achievements/mounts" className="card-btn card-btn-achievements card-btn-achievements-max-mounts">Подробнее</Link>
										</div>
									</div>

									<div className="card card-achievements card-achievements-raids-explorer">
										<Link to="achievements/raids-explorer">
											<img src={RaidsExplorerCardImg} className="card-img card-img-achievements" alt="Исследователь рейдов" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="achievements/raids-explorer">
												<h3 className="card-title card-title-achievements card-title-achievements-raids-explorer">Исследователь рейдов</h3>
											</Link>
											<p className="card-text card-text-achievements card-text-achievements-raids-explorer">Закажите прохождение всех рейдов и любой рейдовой экипировки</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-achievements card-price-achievements-raids-explorer">от 1000<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="achievements/raids-explorer" className="card-btn card-btn-achievements card-btn-achievements-raids-explorer">Подробнее</Link>
										</div>
									</div>

									<div className="card card-achievements card-achievements-legacy">
										<Link to="achievements/legacy">
											<img src={LegacyCardImg} className="card-img card-img-achievements" alt="Наследие" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="achievements/legacy">
												<h3 className="card-title card-title-achievements card-title-achievements-legacy">Наследие</h3>
											</Link>
											<p className="card-text card-text-achievements card-text-achievements-legacy">Добавить описание</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-achievements card-price-achievements-legacy">от 1000<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="achievements/legacy" className="card-btn card-btn-achievements card-btn-achievements-legacy">Подробнее</Link>
										</div>
									</div>

									<div className="card card-achievements card-achievements-great-feats">
										<Link to="achievements/great-feats">
											<img src={GreatFeatsCardImg} className="card-img card-img-achievements" alt="Великие подвиги" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="achievements/great-feats">
												<h3 className="card-title card-title-achievements card-title-achievements-great-feats">Великие подвиги</h3>
											</Link>
											<p className="card-text card-text-achievements card-text-achievements-great-feats">Закажите выполнение любых великих подвигов</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-achievements card-price-achievements-great-feats">от 1000<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="achievements/great-feats" className="card-btn card-btn-achievements card-btn-achievements-great-feats">Подробнее</Link>
										</div>
									</div>

									<div className="card card-achievements card-achievements-warcraft-reforged">
										<Link to="achievements/warcraft-reforged">
											<img src={WarcraftReforgedCardImg} className="card-img card-img-achievements" alt="Годовщина Warcraft Reforged" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="achievements/warcraft-reforged">
												<h3 className="card-title card-title-achievements card-title-achievements-warcraft-reforged">Годовщина Warcraft 3 Reforged</h3>
											</Link>
											<p className="card-text card-text-achievements card-text-achievements-warcraft-reforged">Определите судьбу мира Warcraft</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-achievements card-price-achievements-warcraft-reforged">от 1000<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="achievements/warcraft-reforged" className="card-btn card-btn-achievements card-btn-achievements-warcraft-reforged">Подробнее</Link>
										</div>
									</div>

									<div className="card card-achievements card-achievements-wow">
										<Link to="achievements/wow">
											<img src={WowCardImg} className="card-img card-img-achievements" alt="Годовщина World of Warcraft" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="achievements/wow">
												<h3 className="card-title card-title-achievements card-title-achievements-wow">Годовщина World of Warcraft</h3>
											</Link>
											<p className="card-text card-text-achievements card-text-achievements-wow">Добавить описание</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-achievements card-price-achievements-wow">от 1000<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="achievements/wow" className="card-btn card-btn-achievements card-btn-achievements-wow">Подробнее</Link>
										</div>
									</div>

									<div className="card card-achievements card-achievements-diablo">
										<Link to="achievements/diablo">
											<img src={DiabloCardImg} className="card-img card-img-achievements" alt="Годовщина Diablo" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="achievements/diablo">
												<h3 className="card-title card-title-achievements card-title-achievements-diablo">Годовщина Diablo</h3>
											</Link>
											<p className="card-text card-text-achievements card-text-achievements-diablo">Нет никакого коровьего уровня</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-achievements card-price-achievements-diablo">от 1000<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="achievements/diablo" className="card-btn card-btn-achievements card-btn-achievements-diablo">Подробнее</Link>
										</div>
									</div>

									<div className="card card-achievements card-achievements-hearthstone">
										<Link to="achievements/hearthstone">
											<img src={HearthstoneCardImg} className="card-img card-img-achievements" alt="Годовщина Hearthstone" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="achievements/hearthstone">
												<h3 className="card-title card-title-achievements card-title-achievements-hearthstone">Годовщина Hearthstone</h3>
											</Link>
											<p className="card-text card-text-achievements card-text-achievements-hearthstone">Hearthstone: Heroes of Warcraft</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-achievements card-price-achievements-hearthstone">от 1000<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="achievements/hearthstone" className="card-btn card-btn-achievements card-btn-achievements-hearthstone">Подробнее</Link>
										</div>
									</div>

									<div className="card card-achievements card-achievements-heroes-of-the-storm">
										<Link to="achievements/heroes-storm">
											<img src={HeroesStormCardImg} className="card-img card-img-achievements" alt="Годовщина Heroes of the Storm" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="achievements/heroes-storm">
												<h3 className="card-title card-title-achievements card-title-achievements-heroes-of-the-storm">Годовщина Heroes of the Storm</h3>
											</Link>
											<p className="card-text card-text-achievements card-text-achievements-heroes-of-the-storm">Heroes of the Storm: MOBA по-новому</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-achievements card-price-achievements-heroes-of-the-storm">от 1000<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="achievements/heroes-storm" className="card-btn card-btn-achievements card-btn-achievements-heroes-of-the-storm">Подробнее</Link>
										</div>
									</div>

									<div className="card card-achievements card-achievements-starcraft">
										<Link to="achievements/starcraft">
											<img src={StarcraftCardImg} className="card-img card-img-achievements" alt="Годовщина StarCraft" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="achievements/starcraft">
												<h3 className="card-title card-title-achievements card-title-achievements-starcraft">Годовщина StarCraft</h3>
											</Link>
											<p className="card-text card-text-achievements card-text-achievements-starcraft">Да здравствует StarCraft</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-achievements card-price-achievements-starcraft">от 1000<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="achievements/starcraft" className="card-btn card-btn-achievements card-btn-achievements-starcraft">Подробнее</Link>
										</div>
									</div>

									<div className="card card-achievements card-achievements-overwatch">
										<Link to="achievements/overwatch">
											<img src={OverwatchCardImg} className="card-img card-img-achievements" alt="Годовщина Overwatch" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="achievements/overwatch">
												<h3 className="card-title card-title-achievements card-title-achievements-overwatch">Годовщина Overwatch</h3>
											</Link>
											<p className="card-text card-text-achievements card-text-achievements-overwatch">Будущее за которе стоит бороться</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-achievements card-price-achievements-overwatch">от 1000<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="achievements/overwatch" className="card-btn card-btn-achievements card-btn-achievements-overwatch">Подробнее</Link>
										</div>
									</div>

									<div className="card card-achievements card-achievements-wow-collection-edition">
										<Link to="achievements/wow-collection-editions">
											<img src={WowCollectionEditionCardImg} className="card-img card-img-achievements" alt="Годовщина World of Warcraft" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="achievements/wow-collection-editions">
												<h3 className="card-title card-title-achievements card-title-achievements-wow-collection-edition">Коллекционные издания World of Warcraft</h3>
											</Link>
											<p className="card-text card-text-achievements card-text-achievements-wow-collection-edition">Добавить описание</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-achievements card-price-achievements-wow-collection-edition">от 1000<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="achievements/wow-collection-editions" className="card-btn card-btn-achievements card-btn-achievements-wow-collection-edition">Подробнее</Link>
										</div>
									</div>

									<div className="card card-achievements card-achievements-diablo-collection-edition">
										<Link to="achievements/diablo-collection-editions">
											<img src={DiabloCollectionEditionCardImg} className="card-img card-img-achievements" alt="Годовщина Diablo" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="achievements/diablo-collection-editions">
												<h3 className="card-title card-title-achievements card-title-achievements-diablo-collection-edition">Коллекционные издания Diablo</h3>
											</Link>
											<p className="card-text card-text-achievements card-text-achievements-diablo-collection-edition">Добавить описание</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-achievements card-price-achievements-diablo-collection-edition">от 1000<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="achievements/diablo-collection-editions" className="card-btn card-btn-achievements card-btn-achievements-diablo-collection-edition">Подробнее</Link>
										</div>
									</div>
								</div>
							</div>
						</>
					}

					{ raidsArmourWarrior &&

						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{/* Таб контент Огненные Недра */}
							<div className="card card-tiers card-warrior">
								<a href="../buy/raids-armours/molten-core.html">
									<img src="../../img/services/bg/armour/warrior/Battlegear-of-Might.png" className="card-img card-img-tiers" alt="Броня Мощи" />
								</a>
								<div className="card-body">
									<a className="card-link" href="../buy/raids-armours/molten-core.html">
										<h3 className="card-title card-title-tiers">Броня Мощи</h3>
									</a>
									<p className="card-text card-text-tiers">Первый комплект брони для воина из рейда 60-го уровня Огненные Недра дополнения classNameic. Повелитель Огня будет повержен! Очищение огнем пройдено!</p>
								</div>
								<div className="card-footer d-flex justify-content-between align-items-center">
									<p className="card-price card-price-tiers">от 100<img className="dollar" src={dollarImg} alt="dollar" /></p>
									<a href="../buy/raids-armours/molten-core.html" className="card-btn card-btn-tiers">Подробнее</a>
								</div>
							</div>

							{/* Таб контент Логово Крыла Тьмы */}
							<div className="card card-tiers card-warrior">
								<a href="../buy/raids-armours/blackwing-lair.html">
									<img src="../../img/services/bg/armour/warrior/Battlegear-of-Wrath.png" className="card-img card-img-tiers" alt="Броня Гнева" />
								</a>
								<div className="card-body">
									<a className="card-link" href="../buy/raids-armours/blackwing-lair.html">
										<h3 className="card-title card-title-tiers">Броня Гнева</h3>
									</a>
									<p className="card-text card-text-tiers">Второй комплект брони для воина из рейда 60-го уровня Логово Крыла Тьмы дополнения classNameic. Лорд Черной Горы будет повержен! Теперь у вас невероятная сила!</p>
								</div>
								<div className="card-footer d-flex justify-content-between align-items-center">
									<p className="card-price card-price-tiers">от 100<img className="dollar" src={dollarImg} alt="dollar" /></p>
									<a href="../buy/raids-armours/blackwing-lair.html" className="card-btn card-btn-tiers">Подробнее</a>
								</div>
							</div>

							{/* Таб контент Храм Анкиража */}
							<div className="card card-tiers card-warrior">
								<a href="../buy/raids-armours/temple-of-ahnqiraj.html">
									<img src="../../img/services/bg/armour/warrior/Conquerors-Battlegear.png" className="card-img card-img-tiers" alt="Броня Завоевателя" />
								</a>
								<div className="card-body">
									<a className="card-link" href="../buy/raids-armours/temple-of-ahnqiraj.html">
										<h3 className="card-title card-title-tiers">Броня Завоевателя</h3>
									</a>
									<p className="card-text card-text-tiers">Комплект брони для воина 2.5 из рейда 60-го уровня Храм Ан'Киража дополнения classNameic. Владыка Ан'Киража будет повержен! Вы еще не мертвы!</p>
								</div>
								<div className="card-footer d-flex justify-content-between align-items-center">
									<p className="card-price card-price-tiers">от 100<img className="dollar" src={dollarImg} alt="dollar" /></p>
									<a href="../buy/raids-armours/temple-of-ahnqiraj.html" className="card-btn card-btn-tiers">Подробнее</a>
								</div>
							</div>
						</div>
					}
				</div>
			</div>
		</section>
	)
}


export default Card
const Footer = () => {
	const currentYear = new Date().getFullYear()

	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<div className="footer-dropdown d-inline-block">
						<button className="footer__btn dropdown-toggle">Русский</button>
						<div className="dropdown-menu dropdown-menu-footer">
							<a className="dropdown-item" href="#">Русский</a>
							<a className="dropdown-item" href="#">English</a>
						</div>
					</div>

					<div className="footer__top mt-5 d-flex justify-content-center flex-wrap gap-3">
						<div className="footer__img">
							<img className="footer__photo" src="/src/assets/icons/logo/logo-classic.png" alt="World of Warcraft Classic" />
						</div>

						<div className="footer__img">
							<img className="footer__photo" src="/src/assets/icons/logo/logo-burning-crusade.png" alt="World of Warcraft Burning Crusade" />
						</div>

						<div className="footer__img">
							<img className="footer__photo" src="/src/assets/icons/logo/logo-wrath-of-the-lich-king.png" alt="World of Warcraft Wrath of the Lich King" />
						</div>

						<div className="footer__img">
							<img className="footer__photo" src="/src/assets/icons/logo/logo-cataclysm.png" alt="World of Warcraft Cataclysm" />
						</div>

						<div className="footer__img">
							<img className="footer__photo" src="/src/assets/icons/logo/logo-mist-of-pandaria.png" alt="World of Warcraft Mist of Pandaria" />
						</div>

						<div className="footer__img">
							<img className="footer__photo" src="/src/assets/icons/logo/logo-warlords-of-draenor.png" alt="World of Warcraft Warlords of Draenor" />
						</div>

						<div className="footer__img">
							<img className="footer__photo" src="/src/assets/icons/logo/logo-legion.png" alt="World of Warcraft Legion" />
						</div>

						<div className="footer__img">
							<img className="footer__photo" src="/src/assets/icons/logo/logo-bfa.png" alt="World of Warcraft Battle for Azeroth" />
						</div>

						<div className="footer__img">
							<img className="footer__photo" src="/src/assets/icons/logo/logo-shadowland.png" alt="World of Warcraft Shadowland" />
						</div>

						<div className="footer__img">
							<img className="footer__photo" src="/src/assets/icons/logo/logo-dragonflight.png" alt="World of Warcraft Dragonflight" />
						</div>

						<div className="footer__img">
							<img className="footer__photo" src="/src/assets/icons/logo/logo-war-within.png" alt="World of Warcraft The War Within" />
						</div>

						<div className="footer__img">
							<img className="footer__photo" src="/src/assets/icons/logo/logo-midnight.png" alt="World of Warcraft Midnight" />
						</div>

						<div className="footer__img">
							<img className="footer__photo" src="/src/assets/icons/logo/logo-last-titan.png" alt="World of Warcraft The Last Titan" />
						</div>
					</div>

					<div className="footer__bottom mt-5">
						<p className="footer__copyright text-center">&copy; WowForAll Все права защищены {currentYear}</p>
					</div>
				</div>
			</div>
		</footer>
	)
}


export default Footer
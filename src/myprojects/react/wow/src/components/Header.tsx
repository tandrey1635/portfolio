import { Link } from "react-router";


const Header = () => {
	return (
		<>
			<header className="header__top"></header>

			<header className="header pt-5">
				<div className="container">
					<div className="burger-btn d-flex justify-content-end">
						<button className="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent">
							<span className="navbar-toggler-icon"></span>
							<span className="navbar-toggler-icon"></span>
							<span className="navbar-toggler-icon"></span>
						</button>
					</div>

					<nav className="navbar navbar-expand-lg navbar-light flex-wrap flex-column flex-lg-row">
						<Link className="navbar-brand" to="/">
							<img src="/src/assets/icons/logo/logo-last-titan.png" alt="logo" />
						</Link>
						<ul className="navbar-nav mx-auto">
							<li className="nav-item">
								<Link className="nav-link" to="https://worldofwarcraft.com/ru-ru/">Офицальный сайт World of Warcraft</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="https://www.noob-club.ru/">Гайды</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="https://raider.io/">Рейтинг</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="https://www.wowprogress.com/">Лучшие игроки</Link>
							</li>
						</ul>
						<div className="collapse navbar-collapse mx-auto" id="navbarSupportedContent">
							<form className="form-inline nav-form my-2 my-lg-0">
								<input className="form-control col-10 col-lg-12 mx-auto" type="search" placeholder="Поиск" />
							</form>
							<ul className="navbar-nav mx-auto">
								<li className="nav-item dropdown">
									<Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" data-toggle="dropdown">Рубли (&#8381;)</Link>
									<div className="dropdown-menu dropdown-menu-header">
										<a className="dropdown-item" href="#">Рубли (&#8381;)</a>
										<a className="dropdown-item" href="#">Доллары (&#36;)</a>
										<a className="dropdown-item" href="#">Евро (&#8364;)</a>
									</div>
								</li>
							</ul>
							<div className="modal__open d-flex justify-content-center">
								<button className="nav__btn nav__btn-enter" data-toggle="modal" data-target="#modal-enter">Войти</button>
								<button className="nav__btn" data-toggle="modal" data-target="#modal">Зарегистрироваться</button>
							</div>
						</div>
					</nav>
				</div>
			</header>
		</>
	)
}


export default Header
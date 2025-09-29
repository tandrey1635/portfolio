const WhyWe = () => {
	return (
		<section className="why__we">
			<div className="container">
				<div className="why__we__info py-3 px-2 mt-5">
					<h2 className="why__we__header text-center">Почему Мы</h2>
					<div className="why__we__box__info">
						<div className="why__we__items mt-lg-5 d-flex flex-column flex-lg-row justify-content-between">
							<div className="why__we__list mt-5 mt-lg-0">
								<img className="why__we__img" src="/src/assets/icons/ok.svg" alt="ok" />
								<h3 className="why__we__title">Самые низкие цены. Без посредников!</h3>
							</div>
							<div className="why__we__list mt-5 mt-lg-0">
								<img className="why__we__img" src="/src/assets/icons/communication.svg" alt="communication" />
								<h3 className="why__we__title">Общайтесь с исполнителями напрямую до оформления заказа</h3>
							</div>
							<div className="why__we__list mt-5 mt-lg-0">
								<img className="why__we__img" src="/src/assets/icons/community.svg" alt="community" />
								<h3 className="why__we__title">Опытная и дружелюбная служба поддержки всегда поможет</h3>
							</div>
							<div className="why__we__list mt-5 mt-lg-0">
								<img className="why__we__img" src="/src/assets/icons/protection.svg" alt="protection" />
								<h3 className="why__we__title">Мы пускаем только исполнителей, которые используют все меры предосторожности для безопасности вашего аккаунта</h3>
							</div>
							<div className="why__we__list mt-5 mt-lg-0">
								<img className="why__we__img" src="/src/assets/icons/money.svg" alt="money" />
								<h3 className="why__we__title">100% гарантия возврата средств на случай, если услуга не доставлена</h3>
							</div>
							<div className="why__we__list mt-5 mt-lg-0">
								<img className="why__we__img" src="/src/assets/icons/law.svg" alt="law" />
								<h3 className="why__we__title">Наша собственная система арбитража поможет решить спорные ситуации</h3>
							</div>
						</div>
					</div>
				</div>
				<p className="why__we__text my-5">Прокачка в WoW помогает игрокам получить все, что оказывается недоступным по разным причинам. Одним игрокам не хватает времени на фарм, другие не играют в гильдиях, но хотят лучший гир. Причин много, а желания одни. Для этого и существует WowForAll — наш подход изменил представление о бустинге WoW. Как торговая площадка мы позволяем продавцам размещать свои услуги на собственных условиях. Это снижает цену — ведь посредников между продавцом и покупателем нет. Как итог: с WowForAll вы экономите свое время по самой честной цене. А если вас не устроили имеющиеся предложения, создайте Аукцион на своих условиях. Пусть наши продавцы сами поборются за него и предложат лучшую цену. Всё что нужно — пройти базовую регистрацию, пополнить баланс удобным способом и выбрать исполнителя. WowForAll выступит гарантом сделки, останется только наслаждаться результатом.</p>
			</div>
		</section>
	);
};

export default WhyWe

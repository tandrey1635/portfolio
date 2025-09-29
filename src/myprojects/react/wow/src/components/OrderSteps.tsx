const OrderSteps = () => {
	return (
		<section className="order__steps py-5">
		<div className="container">
			<div className="order__steps__info" id="how-its-work">
				<h2 className="order__steps__header text-center">Шаги оформления заказа</h2>
				<div className="order__steps__box__info">
					<div className="order__steps__step mt-5 d-flex justify-content-between flex-column flex-xl-row">
						<div className="order__steps__list">
							<img className="order__steps__img" src="/src/assets/icons/registrations.svg" alt="registrations" />
							<h3 className="order__steps__title">1. Регистрация</h3>
							<p className="order__steps__text">Зарегистрируйтесь бесплатно и получите скидку на первый заказ</p>
						</div>
						<div className="order__steps__list">
							<img className="order__steps__img" src="/src/assets/icons/details.svg" alt="details" />
							<span className="br"></span>
							<h3 className="order__steps__title">2. Детали</h3>
							<p className="order__steps__text">Пообщайтесь с исполнителем до оплаты, чтобы уточнить все детали</p>
						</div>
						<div className="order__steps__list">
							<img className="order__steps__img" src="/src/assets/icons/payment.svg" alt="payment" />
							<span className="br"></span>
							<h3 className="order__steps__title">3. Оплата</h3>
							<p className="order__steps__text">Оформите заказ и оплатите его</p>
						</div>
						<div className="order__steps__list">
							<img className="order__steps__img" src="/src/assets/icons/implementation.svg" alt="implementation" />
							<span className="br"></span>
							<h3 className="order__steps__title">4. Выполнениe</h3>
							<p className="order__steps__text">Дождитесь, пока исполнитель завершит заказ</p>
						</div>
						<div className="order__steps__list">
							<img className="order__steps__img" src="/src/assets/icons/confirmation.svg" alt="confirmation" />
							<span className="br"></span>
							<h3 className="order__steps__title">5. Подтверждение</h3>
							<p className="order__steps__text">Подтвердите выполнение заказа. Исполнитель получит деньги лишь после этого</p>
						</div>
						<div className="order__steps__list">
							<img className="order__steps__img" src="/src/assets/icons/feedback.svg" alt="feedback" />
							<span className="br"></span>
							<h3 className="order__steps__title">6. Отзыв</h3>
							<p className="order__steps__text">Оставьте отзыв о работе исполнителя, чтобы помочь другим сделать правильный выбор</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	);
};

export default OrderSteps

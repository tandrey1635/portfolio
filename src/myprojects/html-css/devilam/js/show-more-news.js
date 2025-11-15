const showMore = () => {
	const showMoreBtn = document.querySelector('.btn_news_show-more')
	const cardsItem = document.querySelectorAll('.news__item')

	let showCard = 3
	const step = 3

	const hideCardsItem = () => {
		cardsItem.forEach(card => {
			card.classList.add('news__item__hide')
		});
	}

	const showCardsItem = (start, end) => {
		Array.from(cardsItem).slice(start, end).forEach(card => {
			card.classList.remove('news__item__hide')
		});
	}

	const updateCard = () => {
		showCard += step

		if (showCard >= cardsItem.length) {
			showMoreBtn.classList.add('hide-btn')
		}

	}

	hideCardsItem()
	showCardsItem(0, showCard)

	showMoreBtn.addEventListener('click', (e)=> {
		e.preventDefault()

		showCardsItem(showCard, showCard + step)
		updateCard()
	})
}


showMore()
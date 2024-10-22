const popup = document.querySelector('.popup')
const promoBlock = document.querySelector('.promo')

const mainMenu = document.querySelector('.main__menu')


if (popup.style.display == 'block') {
    promoBlock.style.background = 'rgba(0, 0, 0, 0.5)'
    document.body.style.overflow = 'hidden'
}

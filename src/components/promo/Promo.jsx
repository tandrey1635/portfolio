import './Promo.sass'


import MainHeader from '../main-header/MainHeader'
import PortfolioText from '../portfolio-text/PortfolioText'


const Promo = () => {
    return(
        <div className="promo__wrapper">
            <MainHeader title={'Привет, меня зовут'} name={'Андрей'}/>
            <PortfolioText maintext text={'Я начинающий Frontend разработчик из города Москва это сайт портфолио моих работ'}/>
        </div>
    )
    
}


export default Promo
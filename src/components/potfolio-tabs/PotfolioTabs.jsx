import './PotfolioTabs.sass'

const PortfolioTabs = (props) => {
    return(
        <ul className="portfolio__tabs">
            <li className={props.all ? "portfolio__tabs__items active" : "portfolio__tabs__items"} onClick={props.all}>Все</li>
            <li className={props.html ? "portfolio__tabs__items active" : "portfolio__tabs__items"} onClick={props.html}>Html/Css</li>
            <li className={props.active ? "portfolio__tabs__items active" : "portfolio__tabs__items"} onClick={props.bootstrap}>Bootstrap</li>
            <li className={props.active ? "portfolio__tabs__items active" : "portfolio__tabs__items"} onClick={props.javascript}>Js</li>
            <li className={props.active ? "portfolio__tabs__items active" : "portfolio__tabs__items"}>React</li>
        </ul>
    )
}


export default PortfolioTabs
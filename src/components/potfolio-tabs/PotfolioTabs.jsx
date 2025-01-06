import './PotfolioTabs.sass'


const PortfolioTabs = (props) => {

    return(
        <ul className="portfolio__tabs">
            <li className={props.tabAll ? "portfolio__tabs__items active" : "portfolio__tabs__items"} onClick={props.all}>Все</li>
            <li className={props.tabHtml ? "portfolio__tabs__items active" : "portfolio__tabs__items"} onClick={props.html}>Html/Css</li>
            <li className={props.tabBootstrap ? "portfolio__tabs__items active" : "portfolio__tabs__items"} onClick={props.bootstrap}>Bootstrap</li>
            <li className={props.tabJavascript ? "portfolio__tabs__items active" : "portfolio__tabs__items"} onClick={props.javascript}>Js</li>
            <li className={props.tabReact ? "portfolio__tabs__items active" : "portfolio__tabs__items"} onClick={props.react}>React</li>
        </ul>
    )
}


export default PortfolioTabs
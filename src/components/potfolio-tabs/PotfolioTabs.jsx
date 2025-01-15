import './PotfolioTabs.sass'


const PortfolioTabs = (props) => {

    return(
        <ul className="portfolio__tabs">
            <li className={props.tabAll ? "portfolio__tabs__items portfolio__tabs__items_all" : "portfolio__tabs__items"} onClick={props.all}>
                <span className={props.tabHtml ? "portfolio__tabs__items_span portfolio__tabs__items_span" : "portfolio__tabs__items_span"}>Все</span>
            </li>
            <li className="portfolio__tabs__items portfolio__tabs__items_html" onClick={props.html}>
                <span className={props.tabHtml ? "portfolio__tabs__items_span portfolio__tabs__items_span_html" : "portfolio__tabs__items_span"}>Html/Css</span>
            </li>
            <li className="portfolio__tabs__items portfolio__tabs__items_bootstrap" onClick={props.bootstrap}>
                <span className={props.tabBootstrap ? "portfolio__tabs__items_span portfolio__tabs__items_span_bootstrap" : "portfolio__tabs__items_span"}>Bootstrap</span>
            </li>
            <li className="portfolio__tabs__items portfolio__tabs__items_javascript" onClick={props.javascript}>
                <span className={props.tabJavascript ? "portfolio__tabs__items_span portfolio__tabs__items_span_javascript" : "portfolio__tabs__items_span"}>Js</span>
            </li>
            <li className="portfolio__tabs__items portfolio__tabs__items_react" onClick={props.react}>
                <span className={props.tabReact ? "portfolio__tabs__items_span portfolio__tabs__items_span_react" : "portfolio__tabs__items_span"}>React</span>
            </li>
        </ul>
    )
}


export default PortfolioTabs
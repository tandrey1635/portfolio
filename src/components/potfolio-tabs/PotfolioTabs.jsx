import './PotfolioTabs.sass'


const PortfolioTabs = (props) => {

    return(
        <ul className="portfolio__tabs">
            <li className="portfolio__tabs__items portfolio__tabs__items_all" onClick={props.all}>
                <span className={props.tabAll ? "portfolio__tabs__items_span portfolio__tabs__items_span_all" : "portfolio__tabs__items_span"}>Все</span>
            </li>
            <li className="portfolio__tabs__items portfolio__tabs__items_html" onClick={props.html}>
                <span className={props.tabHtml ? "portfolio__tabs__items_span portfolio__tabs__items_span_html" : "portfolio__tabs__items_span"}>Html/Css</span>
            </li>
            <li className="portfolio__tabs__items portfolio__tabs__items_bootstrap" onClick={props.bootstrap}>
                <span className={props.tabBootstrap ? "portfolio__tabs__items_span portfolio__tabs__items_span_bootstrap" : "portfolio__tabs__items_span"}>Bootstrap</span>
            </li>
            <li className="portfolio__tabs__items portfolio__tabs__items_javascript" onClick={props.javascript}>
                <span className={props.tabJavascript ? "portfolio__tabs__items_span portfolio__tabs__items_span_javascript" : "portfolio__tabs__items_span"}>Js/Ts</span>
            </li>
            <li className="portfolio__tabs__items portfolio__tabs__items_react" onClick={props.react}>
                <span className={props.tabReact ? "portfolio__tabs__items_span portfolio__tabs__items_span_react" : "portfolio__tabs__items_span"}>React/Redux</span>
            </li>
            {props.bitrix && 
                <li className="portfolio__tabs__items portfolio__tabs__items_bitrix" onClick={props.bitrix}>
                <span className={props.tabBitrix ? "portfolio__tabs__items_span portfolio__tabs__items_span_bitrix" : "portfolio__tabs__items_span"}>Bitrix/Bitrix24</span>
            </li>
            }
        </ul>
    )
}


export default PortfolioTabs
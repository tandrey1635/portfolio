import './PortfolioItems.sass'

const PortfolioItems = (props) => {

    
    return(
        <article className={props.html ? "portfolio__items portfolio__items_html" : props.bootstrap ? "portfolio__items portfolio__items_bootstrap" : "portfolio__items"}>
            <div className="portfolio__img">
                <a href={props.preview} className="portfolio__preview__photo-link" data-fancybox="galleryLandingPage">
                    <img className="portfolio__photo" src={props.preview} alt={props.alt}/>
                    {/* <img data-fancybox="galleryLandingPage" data-src="img/devices-img/landing-page/1920.webp" alt={props.alt}/>
                    <img data-fancybox="galleryLandingPage" data-src="img/devices-img/landing-page/1024.webp" alt={props.alt}/>
                    <img data-fancybox="galleryLandingPage" data-src="img/devices-img/landing-page/768.webp" alt={props.alt}/>
                    <img data-fancybox="galleryLandingPage" data-src="img/devices-img/landing-page/320.webp" alt={props.alt}/> */}
                </a>
            </div>
            <div className={props.html ? "portfolio__descriptions portfolio__descriptions_html" : "portfolio__descriptions"}>
                <h2 className="portfolio__subheader">{props.subheader}</h2>
                <p className="portfolio__text">{props.text}</p>
            </div>
            <div className="portfolio__block__link">
                <a 
                    href={props.url} 
                    className={props.html ? "portfolio__link portfolio__link_html" : "portfolio__link"} target="_blank">Ссылка
                </a>
                {props.project && 
                    <a 
                        href={props.github} 
                        className={props.html ? "portfolio__link portfolio__link_html" : "portfolio__link"} target="_blank">GitHub
                    </a>
                }
            </div>
        </article>
    )
}


export default PortfolioItems
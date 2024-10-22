import './PortfolioItems.sass'

const PortfolioItems = (props) => {
    return(
        <article className="portfolio__items">
            <div className="portfolio__img">
                <a href={props.preview} className="portfolio__preview__photo-link" data-fancybox="galleryLandingPage">
                    <img className="portfolio__photo" src={props.preview} alt={props.alt}/>
                    {/* <img data-fancybox="galleryLandingPage" data-src="img/devices-img/landing-page/1920.webp" alt={props.alt}/>
                    <img data-fancybox="galleryLandingPage" data-src="img/devices-img/landing-page/1024.webp" alt={props.alt}/>
                    <img data-fancybox="galleryLandingPage" data-src="img/devices-img/landing-page/768.webp" alt={props.alt}/>
                    <img data-fancybox="galleryLandingPage" data-src="img/devices-img/landing-page/320.webp" alt={props.alt}/> */}
                </a>
            </div>
            <div className="portfolio__descriptions">
                <h2 className="portfolio__subheader">{props.subheader}</h2>
                <p className="portfolio__text">{props.text}</p>
            </div>
            <div className="portfolio__block__link">
                <a href="myprojects/html-css/landing-page/index.html" className="portfolio__link" target="_blank">Ссылка</a>
                {props.project && <a href={props.github} className="portfolio__link" target="_blank">GitHub</a> }
            </div>
        </article>
    )
}


export default PortfolioItems
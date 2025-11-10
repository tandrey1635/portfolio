import './PortfolioItems.sass'

const PortfolioItems = (props) => {

    return(
        <article
            className={props.html ? "portfolio__items portfolio__items_html"
                : props.bootstrap ? "portfolio__items portfolio__items_bootstrap"
                : props.javascript ? "portfolio__items portfolio__items_javascript"
                : props.react ? "portfolio__items portfolio__items_react"
                : props.sertificate_html ? "portfolio__items portfolio__items_sertificate portfolio__items_sertificate_html"
                : props.sertificate_bootstrap ? "portfolio__items portfolio__items_sertificate portfolio__items_sertificate_bootstrap"
                : props.sertificate_javascript ? "portfolio__items portfolio__items_sertificate portfolio__items_sertificate_javascript"
                : props.sertificate_react ? "portfolio__items portfolio__items_sertificate portfolio__items_sertificate_react"
                : props.sertificate_bitrix ? "portfolio__items portfolio__items_sertificate portfolio__items_sertificate_bitrix"
                : props.sertificate ? "portfolio__items portfolio__items_sertificate"
                : "portfolio__items"
            }>
            <div className="portfolio__img">
                <a href={props.preview} className="portfolio__preview__photo-link" data-fancybox="galleryLandingPage">
                    <img className="portfolio__photo" src={props.preview} alt={props.alt}/>
                    {/* <img data-fancybox="galleryLandingPage" data-src="img/devices-img/landing-page/1920.webp" alt={props.alt}/>
                    <img data-fancybox="galleryLandingPage" data-src="img/devices-img/landing-page/1024.webp" alt={props.alt}/>
                    <img data-fancybox="galleryLandingPage" data-src="img/devices-img/landing-page/768.webp" alt={props.alt}/>
                    <img data-fancybox="galleryLandingPage" data-src="img/devices-img/landing-page/320.webp" alt={props.alt}/> */}
                </a>
            </div>
            <div
                className={props.html ? "portfolio__descriptions portfolio__descriptions_html"
                : props.bootstrap ? "portfolio__descriptions portfolio__descriptions_bootstrap"
                : props.javascript ? "portfolio__descriptions portfolio__descriptions_javascript"
                : props.react ? "portfolio__descriptions portfolio__descriptions_react"
                : props.sertificate_html ? "portfolio__descriptions portfolio__descriptions_sertificate_html"
                : props.sertificate_bootstrap ? "portfolio__descriptions portfolio__descriptions_sertificate_bootstrap"
                : props.sertificate_javascript ? "portfolio__descriptions portfolio__descriptions_sertificate_javascript"
                : props.sertificate_react ? "portfolio__descriptions portfolio__descriptions_sertificate_react"
                : props.sertificate_bitrix ? "portfolio__descriptions portfolio__descriptions_sertificate_bitrix"
                : props.sertificate ? "portfolio__descriptions portfolio__descriptions_sertificate"
                : "portfolio__descriptions"}>
                <h2 className="portfolio__header">{props.header}</h2>
                <p className="portfolio__text">{props.description}</p>
            </div>
            <div className="portfolio__block__link">
                {props.project &&
                    <a
                        href={props.url}
                        className={props.html ? "portfolio__link portfolio__link_html"
                        : props.bootstrap ? "portfolio__link portfolio__link_bootstrap"
                        : props.javascript ? "portfolio__link portfolio__link_javascript"
                        : props.react ? "portfolio__link portfolio__link_react"
                        : "portfolio__link"} target="_blank">Ссылка
                    </a>
                }
                {props.project &&
                    <a
                        href={props.github}
                        className={props.html ? "portfolio__link portfolio__link_html"
                        : props.bootstrap ? "portfolio__link portfolio__link_bootstrap"
                        : props.javascript ? "portfolio__link portfolio__link_javascript"
                        : props.react ? "portfolio__link portfolio__link_react"
                        : "portfolio__link"} target="_blank">GitHub
                    </a>
                }
            </div>
        </article>
    )
}


export default PortfolioItems
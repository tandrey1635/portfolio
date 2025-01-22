import './TechnologyItems.sass'

const TechnologyItems = (props) =>{
    
    return(
        <>
            <article className="technology__item">
                <div className="technology__description">
                    <div className="technology__img">{props.img}</div>
                    <div className={props.html ? "technology__percent technology__percent_html" 
                    : props.css ? "technology__percent technology__percent_css"
                    : props.javascript ? "technology__percent technology__percent_javascript"
                    : props.bitrix ? "technology__percent technology__percent_bitrix"
                    : props.design ? "technology__percent technology__percent_design"
                    : "technology__percent"}>{props.percent}</div>
                </div>  
                <div className="technology__progressbar">
                    <div 
                        className={props.html ? "technology__mainline technology__mainline_html" 
                        : props.css ? "technology__mainline technology__mainline_css"
                        : props.javascript ? "technology__mainline technology__mainline_javascript"
                        : props.bitrix ? "technology__mainline technology__mainline_bitrix"
                        : props.design ? "technology__mainline technology__mainline_design"
                        : "technology__mainline"} 
                        style={props.style}></div>
                    <div className="technology__sideline"></div>
                </div>
            </article>  
        </>
    )
}

export default TechnologyItems
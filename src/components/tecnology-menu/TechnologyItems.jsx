import './TechnologyItems.sass'

const TechnologyItems = (props) =>{
    
    return(
        <>
            <article className="technology__item">
                <div className="technology__description">
                    <div className="technology__img">{props.img}</div>
                    <div className="technology__percent">{props.percent}</div>
                </div>  
                <div className="technology__progressbar">
                    <div className="technology__mainline" style={props.style}></div>
                    <div className="technology__sideline"></div>
                </div>
            </article>  
        </>
    )
}

export default TechnologyItems
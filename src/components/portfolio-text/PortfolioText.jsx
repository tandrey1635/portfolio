
import './PortfolioText.sass'

const PortfolioText = (props) =>{
    return(
        <p className={props.maintext ? "section__main__text" : "section__text"}>{props.text}</p>
    )

}


export default PortfolioText
import './SectionHeader.sass'

const SectionHeader = (props) => {
    return(
        <h2 className={props.margin ? "section__header section__header_margin" : "section__header"} >{props.title}</h2>
    )
    
}


export default SectionHeader
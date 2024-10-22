import './MainHeader.sass'

const SectionHeader = (props) => {
    return(
        <h1 className="main__header">{props.title} <span className="main__header_span">{props.name}</span></h1>
    )
    
}


export default SectionHeader
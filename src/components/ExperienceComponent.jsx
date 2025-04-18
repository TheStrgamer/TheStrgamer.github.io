import "../assets/Experience.css"
function ExperienceComponent({title, text, image, link}) {

    return (
        <div>
        <h3>{title}</h3>
        <a className="experience-link" href={link}>
        <div className="experience">
            <img src={image}/>
            <div className="experience-text">
            <p>{text}</p>
            </div>

        </div>
        </a>
        </div>
    )

}
export default ExperienceComponent
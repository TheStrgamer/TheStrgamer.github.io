import "../assets/Experience.css"
function ExperienceComponent({title, text, image}) {

    return (
        <div>
        <h3>{title}</h3>
        <div className="experience">
            <img src={image}/>
            <div className="text">
            <p>{text}</p>
            </div>

        </div>
        </div>
    )

}
export default ExperienceComponent
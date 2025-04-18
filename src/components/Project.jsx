import ImageSlider from "./ImageSlider"
import LinkImage from "./LinkImage"
import "../assets/Project.css"

function Project({ images, title, text, ghlink, itchlink }) {

    const links = [];
    if (ghlink) {
        for (let i = 0; i<ghlink.length; i++) {
            links.push(<LinkImage link={ghlink[i]} image="logos/git.svg" />)
        }
    } else {
        links.push(<LinkImage link={itchlink} image="logos/itch.svg" />)
    }
    return (
        <div className="project">
            <div className="projectHeader">
                <h2>{title}</h2>
                <div className="link">
                    {links}
                </div>
            </div>

            <div className="projectContainer">
                <ImageSlider images={images} />
                <div className="text">
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default Project
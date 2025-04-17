import ImageSlider from "./ImageSlider"
import LinkImage from "./LinkImage"
import "../assets/Project.css"

function Project({ images, title, text, ghlink }) {
    return (
        <div className="project">
            <div className="projectHeader">
                <h2>{title}</h2>
                <div className="link">
                    <LinkImage link={ghlink} image="git.svg" />
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
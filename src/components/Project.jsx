import ImageSlider from "./ImageSlider"
import LinkImage from "./LinkImage"
import { useNavigate } from "react-router-dom";
import "../assets/Project.css"




function Project({ images, title, text, ghlink, itchlink, demopath }) {
    const navigate = useNavigate();

    const openDemo = () => {
        navigate(`/demo?src=${encodeURIComponent("/demo_builds/"+demopath)}`);
    };

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
            {demopath && <button className="demoButton" onClick={openDemo}>Demo</button>}

        </div>
    )
}

export default Project
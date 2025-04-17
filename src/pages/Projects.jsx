import ImageSlider from "../components/ImageSlider"
function Projects() {
    return(
        <>
        <h2>Projects</h2>
        <div className="content">
        <ImageSlider images={["Baines.png", "dante.jpg", "vergil.png"]} />
        </div>
        </>
    )
}
export default Projects
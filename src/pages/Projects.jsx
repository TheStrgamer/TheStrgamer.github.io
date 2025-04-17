import ImageSlider from "../components/ImageSlider"
function Projects() {
    return(
        <>
        <h1>Projects</h1>
        <div className="content">
        <ImageSlider images={["Baines.png", "dante.jpg", "vergil.png"]} />
        </div>
        </>
    )
}
export default Projects
import ImageSlider from "../components/ImageSlider"
function Experience() {
    return(
        <>
        <h2>Experience</h2>
        <div className="content">
        <ImageSlider images={["Baines.png", "dante.jpg", "vergil.png"]} />
        </div>
        </>
    )
}
export default Experience
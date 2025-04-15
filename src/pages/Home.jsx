import ImageSlider from "../components/ImageSlider"
function Home() {
    return(
        <>
        <h2>Home</h2>
        <ImageSlider images={["Baines.png", "dante.jpg", "vergil.png"]} />
        </>
    )
}
export default Home
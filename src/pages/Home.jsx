import ImageSlider from "../components/ImageSlider"
import Technologies from "../components/Technologies"
function Home() {
    return(
        <>
        <h2>Konrad Øye Seime</h2>
        <div className="content">
          <ImageSlider images={["me.jpg", "hold.jpg", "jump.jpg", "climb.jpg"]} />
          <div className="text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </div>
          <Technologies/>
        </div>
        </>
    )
}
export default Home
import ImageSlider from "../components/ImageSlider"
import Technologies from "../components/Technologies"
function Home() {
    return(
        <>
        <h1>Konrad Øye Seime</h1>
        <div className="content">
          <ImageSlider images={["me.jpg", "nm1.jpg", "tur.jpg", "hold.jpg", "cogi2.png", "hand.jpg", "nm2.jpg", "cogi1.JPG"]} />
          <div className="text">
            <p>Mitt navn er Konrad Øye Seime, og jeg studerer <a href="https://www.ntnu.no/studier/bidata">Dataingeniør bachelor</a> ved NTNU Trondheim.
              På fritiden liker jeg å jobbe med ulike prosjekter, og delta i ulike studentverv. Jeg er bland annet medlem i Cogito NTNU, styremedlem i Make NTNU og er med i NTNUI Calisthenics. Jeg deltok i nm i streetworkout i 2025, og fikk 6. plass i strength and endurance.
              Jeg har alltid likt problemløsing, og fikk en interesse for programmering når vi begynte med dette det første året av videregående skole. Siden har jeg brukt mye fritid på å jobbe med diverse prosjekter. 
              Jeg begynte også litt med spillutvikling, for det meste i Unity, og er tidligere medlem av Immerse NTNU, som var en studentforening som drev med dette.
             </p>
          </div>
          <Technologies/>
        </div>
        </>
    )
}
export default Home
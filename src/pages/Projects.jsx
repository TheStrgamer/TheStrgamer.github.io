import ImageSlider from "../components/ImageSlider"
import Project from "../components/Project"
function Projects() {
    return(
        <>
        <h1>Projects</h1>
        <div className="content">
        <Project images={["text_image_project/main.png", "text_image_project/used_seed_3349.png", "text_image_project/encrypt_text.png", "text_image_project/encrypt_file.png", "text_image_project/decrypt_text.png"]} 
        title="Text/File to image" 
        text="Dette prosjektet går ut på å gjøre tekst eller filer om til bilder, og tilbake. Disse kan krypteres med et seed, der man må kryptere og dekryptere med samme seed for å få brukbart resultat. Isteden for å bruke verdiene til tegn eller byte direkte, brukes seed til å gi en ny tilfeldig verdi basert på den gamle, noe som gjør det vanskeligere å dekryptere uten riktig seed.  Dette prosjektet startet som en ide jeg jobbet med på videregående, som jeg senere bygde på nytt etter jeg hadde fått mer erfaring."
        ghlink="https://github.com/TheStrgamer/Text-as-image"/>
                
        <Project images={["image_3d_project/gui.png", "image_3d_project/model.png"]} 
        title="Image to 3d" 
        text="Dette prosjektet startet da jeg ville finne ut om man kunne 3d printe bilder. Bilder konverteres til 3d modeller der hver piksel bestemmer posisjonen til ett punkt i modellen. Man kan endre reduction factor for å redusere størrelsen på bildet, hvis modellen blir for kompleks for sliceren."
        ghlink="https://github.com/TheStrgamer/3d_image_model"/>

        <Project images={["fnan_project/screen1.png", "fnan_project/table.png", "fnan_project/door.png", "fnan_project/dead.png"]} 
        title="Five nights at NRK" 
        text="Ett av spillene jeg har jobbet med i Unity. Spillet er en parodi av Five nights at freddys, som har ulike varianter av Fantorangen som fiendene man møter på. Dette er en av mine tidligste programmeringsprosjekter, som jeg fullførte mens jeg gikk på videregående skole."
        itchlink="https://strgamer.itch.io/five-nights-at-nrk"/>
        </div>
        </>
    )
}
export default Projects
import ImageSlider from "../components/ImageSlider"
import Project from "../components/Project"
function Projects() {
    return(
        <>
        <h1>Prosjekter</h1>
        <div className="content">
            <Project images={["text_image_project/main.png", "text_image_project/used_seed_3349.png", "text_image_project/encrypt_text.png", "text_image_project/encrypt_file.png", "text_image_project/decrypt_text.png"]} 
            title="Text/File to image" 
            text="Dette prosjektet går ut på å gjøre tekst eller filer om til bilder, og tilbake. Disse kan krypteres med et seed, der man må kryptere og dekryptere med samme seed for å få brukbart resultat. Isteden for å bruke verdiene til tegn eller byte direkte, brukes seed til å gi en ny tilfeldig verdi basert på den gamle, noe som gjør det vanskeligere å dekryptere uten riktig seed.  Dette prosjektet startet som en ide jeg jobbet med på videregående, som jeg senere bygde på nytt etter jeg hadde fått mer erfaring."
            ghlink={["https://github.com/TheStrgamer/Text-as-image"]}/>

            <Project images={["marching_image/cpp_image.png", "marching_image/cpp_model.png", "marching_image/me_image.png", "marching_image/me_model.png", "marching_image/shape_image.png", "marching_image/shape_model.png"]} 
            title="Marching image" 
            text="Marching image er et prosjekt som kom av at jeg ville 3d printe logoer, uten å måtte trace dem selv. Programmet lar deg mappe et bilde til to eller flere farger, for å redusere antall farger. Du kan da eksportere en eller flere av disse fargene som flate 3d modeller. Modellene blir laged ved å bruke en modifisert versjon av marching squares."
            ghlink={["https://github.com/TheStrgamer/Marching-Image"]}
            demopath="marching_image/"/>

            <Project images={["chaos_game_project/barnsley.png", "chaos_game_project/julia1.png", "chaos_game_project/julia2.png", "chaos_game_project/custom.png", "chaos_game_project/custom1.png", "chaos_game_project/image.png", "chaos_game_project/imagem.png", "chaos_game_project/imange.png"]} 
            title="Chaos Game" 
            text="Sluttprosjektet i faget Programmering 2. Dette prosjektet var et samarbeidsprosjekt med gruppe på 2, og oppgaven var å lage en applikasjon som kunne lage og vise fraktaler. Applikasjonen bruker javafx for GUI, og kan generere både Chaos game fraktaler og Julia set. Chaos game fraktalene går ut på å velge en tilfeldig transformasjon på koordinatene som skaper et mønster. Julia set går ut på å regne verdien for hver piksel basert på komplekse tall som lager settet. Fraktalene kan tilpasses, eller tilfeldig genereres, og man kan selv velge fargen de vises i. Transformasjonene kan lagres og lastes fra fil, og fraktalene kan lastes ned som bilde."
            ghlink={["https://github.com/TheStrgamer/Chaos-Game"]}/>

            <Project images={["gronttorget_project/main.png", "gronttorget_project/loginmain.png", "gronttorget_project/seller.png", "gronttorget_project/chat.png", "gronttorget_project/chat2.png", "gronttorget_project/akseptert.png", "gronttorget_project/admin.png"]} 
            title="Grønttorget" 
            text="Frivillig prosjekt i faget Full stack applikasjonsutvikling. Prosjektet var et gruppeprosjekt med 4 personer, og gikk ut på lage et nettmarked der man kan kjøpe og selge ting. Prosjektet har en front end laget med Vue, og back end laget med Spring boot. Nettsiden lar deg logge inn og registrere bruker, legge ut ting for salg, og kjøpe ting. Man kan forhandle pris via en websocket chat med selgeren, og kjøpe for en billigere pris hvis selgeren godtar. Admin brukere har tilgang til ett admin panel for å legge til kategorier, og slette brukere eller innlegg."
            ghlink={["https://github.com/TheStrgamer/Fullstack-Frontend", "https://github.com/TheStrgamer/Fullstack-Backend"]}/>

            <Project images={["systemutvikling/home.png", "systemutvikling/hus.png", "systemutvikling/lager.png", "systemutvikling/login.png", "systemutvikling/mail.png", "systemutvikling/nyhet.png", "systemutvikling/admin.png"]} 
            title="Krisefikser" 
            text="Sluttprosjektet i faget Systemutvikling 2. Prosjektet var ett gruppeprosjekt med gruppe på 8 personer, som skulle etterligne arbeidslivet. Målet var å bruke scrum til å lage en web applikasjon som kunne hjelpe nordmenn med beredskap. Produktet har funksjonalitet for å se nyheter hentet fra politiloggen, registrere bruker, og lage husstand med personer og lager, som lar deg vite hvor lenge dine ressurser varer. Når man lager bruker får man epost om å bekrefte eposten, så denne kan brukes til å resette passord. Vi lagde også et interaktivt kart som lar deg finne veibeskrivelse til nærmeste tilfluktsrom, se krisesoner, og siste posisjon til andre i husstanden. Admin brukere kan også legge til soner på kartet, legge til og oppdatere nyheter, og kategorier."
            ghlink={["https://github.com/chrihb/idatt2106_frontend_backup", "https://github.com/Josus101/idatt2106_backend_backup"]}/>

            <Project images={["pong/img1.png", "pong/img2.png"]} 
            title="Nettverksprogrammering - Pong" 
            text="Dette prosjektet ble gjort som frivillig prosjekt i faget Nettverksprogrammering, og vi var en gruppe på 2 personer. Prosjektet er en multiplayer versjon av Pong, der vi skulle implementere prediction, interpolation, og reconciliation for å demonstrere hvordan man kan gjøre opp for manglende informasjon, og høy latency i for eksempel et multiplayer spill. Vi valgte å lage pong med en server klient arkitektur. Koden ble skrevet i C++, og brukte docker til backend. Klientene kan da skru de ulike protokollene av og på, og simulere latency for å demonstrere hvordan protokollene funker. Man kan også bruke et web grensesnitt for å endre hvor mange oppdateringer serveren sender i sekundet"
            ghlink={["https://github.com/Josus101/idatt2104-prosjekt"]}/>

            <Project images={["image_3d_project/gui.png", "image_3d_project/model.png"]} 
            title="Image to 3d" 
            text="Dette prosjektet startet da jeg ville finne ut om man kunne 3d printe bilder. Bilder konverteres til 3d modeller der hver piksel bestemmer posisjonen til ett punkt i modellen. Man kan endre reduction factor for å redusere størrelsen på bildet, hvis modellen blir for kompleks for sliceren."
            ghlink={["https://github.com/TheStrgamer/3d_image_model"]}/>


            <Project images={["fnan_project/screen1.png", "fnan_project/table.png", "fnan_project/door.png", "fnan_project/dead.png"]} 
            title="Five nights at NRK" 
            text="Ett av spillene jeg har jobbet med i Unity. Spillet er en parodi av Five nights at freddys, som har ulike varianter av Fantorangen som fiendene man møter på. Dette er en av mine tidligste programmeringsprosjekter, som jeg fullførte mens jeg gikk på videregående skole."
            itchlink={["https://strgamer.itch.io/five-nights-at-nrk"]}/>
        </div>
        </>
    )
}
export default Projects
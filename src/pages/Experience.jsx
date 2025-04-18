import ImageSlider from "../components/ImageSlider"
import ExperienceComponent from "../components/ExperienceComponent"
function Experience() {

    const experience = [
        <ExperienceComponent
        title="Make NTNU"
        text="Make NTNU er et studentdrevet verksted som er åpent for alle studenter og ansatte ved NTNU. Jeg ble med i Dev-teamet i starten av 2024, og tok over som teamleder i 2025. I perioden 2024–2025 var jeg varamedlem i styret, og i 2025 ble jeg styremedlem gjennom min rolle som leder for Dev-teamet. Verkstedets nettside er bygget med Django, og som teamleder har jeg ansvar for å vedlikeholde og deploye endringer til serveren. Igjennom dette vervet har jeg lært mye om hvordan man bruker Django, utvikler og vedlikeholder nettsidet, og bruker Git som samarbeidsverktøy."
        image="make.png"
        link="https://makentnu.no/"
        />,
        <ExperienceComponent
        title="Cogito NTNU"
        text="Cogito NTNU er et studentverv som fokuserer på kunstig intelligens. Cogito har både interne prosjekter, og kurs som er åpne for alle. Jeg ble med i Jarvis prosjektet i høsten 2024. Jarvis prosjektet gikk ut på å lage en KI assistent som kunne minne om Jarvis fra Iron. I dette prosjektet fikk jeg hovedansvar for Speech to text delen, som skulle la deg snakke med assistenten. Igjennom dette vervet har jeg lært mye om ulike KI modeller, og hvordan man kan bruke dem."
        image="cogito.png"
        link="https://www.cogito-ntnu.no/"
        />
    ];

    return(
        <>
        <h1>Experience</h1>
        <div className="content">
            {experience}
        </div>
        </>
    )
}
export default Experience
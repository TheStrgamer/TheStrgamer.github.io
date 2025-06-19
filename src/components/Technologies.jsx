import "../assets/Technologies.css"
function Technologies() {

    const images = ["cpp.png", "django.png", "Vue.png", "java.webp", "js.webp", "python.webp", "unity.png","typescript.png","cs.png", "react.png"]
    const titles = ["C++","Django","Vue","Java","Javascript","Python","Unity","Typescript","C#", "React"]

    const logos = []
    for (let i = 0; i < images.length; i++) {
        logos.push(<img src={"logos/"+images[i]} className="logo" title={titles[i]} />)
    }

    return (
        <div className="techContainer">
        <h2>Teknologier</h2>
        <div className="technologies">
            {logos}
        </div>
        </div>
    )
}
export default Technologies

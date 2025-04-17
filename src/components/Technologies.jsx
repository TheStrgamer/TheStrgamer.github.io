import "../assets/Technologies.css"
function Technologies() {

    const images = ["cpp.png", "django.png", "Vue.png", "java.webp", "js.webp", "python.webp", "unity.png","typescript.png","cs.png"]
    const titles = ["C++","Django","Vue","Java","Javascript","Python","Unity","Typescript","C#"]

    const logos = []
    for (let i = 0; i < images.length; i++) {
        logos.push(<img src={images[i]} className="logo" title={titles[i]} />)
    }

    return (
        <div className="techContainer">
        <h2>Technologies</h2>
        <div className="technologies">
            {logos}
        </div>
        </div>
    )
}
export default Technologies

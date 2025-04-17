import LinkImage from "./LinkImage"
import "../assets/Footer.css"
function Footer() {

    const git = <LinkImage link="https://github.com/TheStrgamer" image="git.svg"/>
    const linkedin = <LinkImage link="https://www.linkedin.com/in/konrad-%C3%B8ye-seime-b288a6295/" image="linkedin.svg"/>

    return (
        <>
        <div className="footer">
            {git}
            {linkedin}
        </div>
        </>
    )
}
export default Footer
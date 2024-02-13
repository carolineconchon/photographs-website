import "../styles/landing.css"
import bee from "../images/bee.jpg"
function Landing() {
    return (
        <div className="landing">
            <div className="title">
                <p className="title1">Soledad</p>
                <p className="title2"> Photographie</p>
            </div>
            <div class="polaroid">
                <img src={bee} alt="bee photograph"/>
            </div>
        </div>
    )
}
export default Landing;
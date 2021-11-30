import "./about.scss"
import "../../global.scss";
export default function About() {
    return (
        <div className="about" id="about">
            <div className="container">
                <img loading="lazy" src="assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg" alt=""  className="about_picture"/>
                <h2 className="subtitle">My Name is Carlos Orozco</h2>
                <p className="about_copy">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officiis tempore et dolorem architecto dicta officia, repellendus, nobis dolores maiores est necessitatibus porro accusamus rem ipsa quia? Voluptatibus, dolores nemo.
                </p>
                <a href="/" className="about_cta">Contact Now</a>

            </div>
        </div>
    )
}

import "./footer.scss"
import {YouTube ,WhatsApp ,Facebook} from "@material-ui/icons";
export default function Footer() {
    return (
        <div className="footer" id="contact">
            <div className="container footer_grid">
                <nav className="nav nav-footer">
                    <a href="/" className="nav_items nav_items-footer">Home</a>
                    <a href="#about" className="nav_items nav_items-footer">About</a>
                    <a href="#skills" className="nav_items nav_items-footer">Skills</a>
                    <a href="#portfolio" className="nav_items nav_items-footer">Portfolio</a>
                </nav>

                <section className="footer_contact">
                    <h3 className="footer_title">Contact</h3>
                    <div className="footer_icons">
                        <span className="footer_container-icons">
                            <a href="#" className="footer-icon"><YouTube  /></a>
                        </span>
                        <span className="footer_container-icons">
                            <a href="#" className="footer-icon"><WhatsApp /></a>
                        </span>
                        <span className="footer_container-icons">
                            <a href="#" className="footer-icon"><Facebook /></a>
                        </span>
                    </div>
                </section>
            </div>
            
        </div>
    )
}

import footerImg from "../src/assets/img/e2expoimage.jpg";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import '../components/Footer.css'



export default function Footer(){
    return <>
    <footer>
        <div className="footerText">
            <img src={footerImg} alt="Company Logo" />
            <p>E2Expo is a platform dedicated to environmental and energy sectors, operating under the umbrella of Clixoo. Based in Chennai, Tamil Nadu, India, E2Expo focuses on providing insights, resources, and networking opportunities for professionals and organizations in the environmental and energy industries. ​</p>
        </div>

        <div className="footerQuickLinks">
            <h3>Quick Links</h3>
            <Link to={'/'}>Home</Link>
            <Link to={'/events'}>Events</Link>
            <Link to={'/expo'}>Expo</Link>
            <Link to={'/product'}>Product Lanunch</Link>
            <Link to={'/'}>Contact Us</Link>
        </div>

        <div className="footerContact">
            <h3>Contact Information</h3>
            <h6>e2Expo</h6>
            <p>Nungambakkam,TamilNadu, India</p>
            <p><a href="tel:+91 9811913376"><FaPhoneAlt /> +91-9811913376</a></p>
            <p><a href="mailto: e2expo.com"><IoMdMail /> e2expo.com</a></p>
        </div>
    </footer>

    <div className="copyWrite">
            <p>Copyright © 2025 E2Expo. All rights reserved</p>
    </div>
    </>

}
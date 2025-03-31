import Nav from "../components/Nav";
import Footer from "../components/Footer";
import brand from '../src/assets/img/e2expologo.png';
import { FaEarthAmericas } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import HomeBox from "../components/HomeBox";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function Home(){


    return <div>
        <Nav/>

        <div className="homePage">
            <div className="homePageText">
                <h1>Welcome<br/>to<br/>e2Expo</h1>
                <h3>Exhibit Connect Engage</h3>
            </div>

            <div className="homePageImg">
                    <img src={brand} alt="Brand Logo" />
            </div>
        </div>

        <div className="aimsBox">
         <FaEarthAmericas />
         <p>E2Expo aims to accelerate clean energy and environmental solutions in India by providing a powerful online showcase for businesses, products, events, and more.</p>
        </div>

        <HomeBox />

        <div className="highlightsContainer">
        <div className="homeHighlights">
            <h1><FaStar /> Highlights</h1>

            <p>Stay updated with the latest innovations and breakthroughs in sustainability.</p>

            <ul>
                <li><Link to={'/highlights'}>15 Eco Friendly Tech Startups in India (2022)</Link></li>

                <li><Link to={'/highlights'}>Renewable Energy and Climate Change</Link></li>

                <li><Link to={'/highlights'}>Environmental Challenges and Solutions in world</Link></li>
            </ul>

            <Link className="btnExporeMore" to={'/highlights'}>Expore More <FaArrowRight /></Link>
        </div>
        </div>

        <Footer />
    </div>
}
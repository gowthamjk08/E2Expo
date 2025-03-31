import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "./Expo.css";
import ExpoBox from "../components/ExpoBox";
import { FaUsers } from "react-icons/fa";


export default function Expo(){
    return <div className="expoContainer">
        <Nav/>
            <div className="expoHero Hero">
                <h1>E2EXPO - E2Expo</h1>
                <h2>Innovative & Sustainable Exhibitions</h2>
                <h3>Showcasing the latest innovations in clean energy, sustainability, and emerging technologies.</h3>
            </div>

            <div className="expoTitle Title">
                <h1><FaUsers /><span> e2Expo - Exhibitors</span></h1>
                <p>Discover top exhibitors showcasing the latest innovations</p>
            </div>
            
            <ExpoBox/>
        <Footer/>
    </div>
} 
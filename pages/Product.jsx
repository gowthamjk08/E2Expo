import Nav from "../components/Nav";
import Footer from "../components/Footer";
import './Product.css';
import { FaUsers } from "react-icons/fa";
import ProductBox from "../components/ProductBox";


export default function Product(){

    return <div className="productContainer">
        <Nav/>
        <div className="Hero productHero">
                <h1>PRODUCT LAUNCHES - E2Expo</h1>
                <h2>Latest & Most Innovative Solutions</h2>
                <h3>Explore cutting-edge products revolutionizing energy, mobility, and sustainability.</h3>
        </div>

            <div className="productTitle Title">
                <h1><FaUsers /><span> e2Expo - Exhibitors</span></h1>
                <p>Discover top exhibitors showcasing the latest innovations</p>
            </div>
        <ProductBox/>
        
        <Footer/>
    </div>
}
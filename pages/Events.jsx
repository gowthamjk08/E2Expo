import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import "../pages/Events.css";
import EventsBox from "../components/EventsBox";
import folder from '../src/assets/img/folders.png'
import Footer from '../components/Footer.jsx'


export default function Events(){
    return <main>
      <Nav/>
      <div className="eventsBanner">
            <h2>EVENTS - e2Expo</h2>
            <h3>India Energy & Environment Events Listing</h3>
            <p>Listing of clean energy, sustainable events, conferences, trade shows, workshops and training sessions.</p>
      </div>

      <div className="filterContainer">
        <div className="filterEvent">
              <h3>Filter By</h3>
              <h4>Types of Events</h4>
              <select>
                <option>All Events</option>
                <option>Conference</option>
                <option>Exhibition</option>
                <option>Discussion Meeting</option>
              </select>
        </div>

        <div className="filterLocation">
        <h3>Filter By</h3>
              <h4>Cities</h4>
              <select >
                <option>All Cities</option>
                <option>Andhra Pradesh </option>
                <option>Arunachal Pradesh </option>
                <option>Assam </option>
                <option>Bihar </option>
                <option>Chhattisgarh </option>
                <option>Goa </option>
                <option>Gujarat </option>
                <option>Haryana </option>
                <option>Himachal Pradesh </option>
                <option>Jharkhand </option>
                <option>Karnataka </option>
                <option>Kerala </option>
                <option>Madhya Pradesh </option>
                <option>Maharashtra </option>
                <option>Manipur </option>
                <option>Meghalaya </option>
                <option>Mizoram </option>
                <option>Nagaland </option>
                <option>Odisha </option>
                <option>Punjab</option>
                <option>Rajasthan </option>
                <option>Sikkim </option>
                <option>Tamil Nadu </option>
                <option>Telangana </option>
                <option>Tripura </option>
                <option>Uttar Pradesh </option>
                <option>Uttarakhand </option>
                <option>West Bengal </option>
              </select>
        </div>

        <div className="filterImg">
                <img src={folder} /> 
                <Link to={'/events'}> Archives</Link>
        </div>
      </div>

        <EventsBox/>

        <Footer/>
        
    </main>
}
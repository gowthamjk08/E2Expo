import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import './EventsBox.css'


export default function EventsBox(){
    let datas = [
        {
            link:"/",
            src : "https://e2expo.com/uploads/Low_Co.jpg",
            title : "Sustainability Fair 3.0",
            date: "April 9, 2025 to April 10, 2025",
            loc:"New",
            venue:"Sustainablity Cluster, School of Advanced Engineering",
            description:"Sustainablity Cluster Integrates Civil and HSE Enginnering ,...",
            links:"Low Carbon Constrction Materials | Solid waste Management | Energy Efficent Buildings"
        },

        {
            link:"/",
            src : "https://e2expo.com/uploads/Events.jpg",
            title : "India Green Networks Summit 2025",
            date: "April 11, 2025 to April 11, 2025",
            loc:"Tamil Nadu",
            description:"The summit focuses on eco-friendly, energy-efficient, and sustainable telecom networks, bringing together industry leaders, policymakers, and innov..",
            links:"Low Carbon Construction Materials | Energy Efficient Buildings"
        },

        {
            link:"/",
            src : "https://e2expo.com/uploads/Corporate_Carbon.jpg",
            title : "EcoStride 2.0",
            date: "April 13, 2025 to April 13, 2025",
            loc:"Bhubaneswar",
            description:"EcoStride 2.0 is not just a marathon; it’s a movement towards a cleaner, greener, and healthier future. Organized by Subhashree Gro...",
            links:"Multi-stakeholder Collaboration | Low Carbon Lifestyles | Reducing Non-CO2 Industrial & Agricultural Emissions"
        },

        {
            link:"/",
            src : "https://e2expo.com/uploads/Events.jpg",
            title : "Go Green Expo at C-Summit 2025",
            date: " April 15, 2025 to April 17, 2025",
            loc:"Punjab",
            venue:"Venue: Lovely Professional University, Punjab",
            description:"Go Green Expo at C-Summit 2025...",
            links:"Electric Mobility | Advanced Materials | Solid Waste Managements"
        },

        {
            link:"/",
            src : "https://e2expo.com/uploads/D_for_Decarb.jpg",
            title : "RideAsia EV",
            date: " April 18, 2025 to April 20, 2025",
            loc:" New Delhi",
            description:"RideAsia-Ev is a flagship event on E-Vehicles Industry of India. May it be E-vehicles like E-scooter, E-Bike, E-rickshaw, Golf carts or E-Vehicle c...",
            links:"Electric Mobility | Product Use Efficiency | Battery Storage"
        },

        {
            link:"/",
            src : "https://e2expo.com/uploads/Low_Carbon.jpg",
            title : "Advancing the Global Sustainability Narrative: Business, Policy, and Societal Imperatives",
            date: "  April 24, 2025 to April 26, 2025 ",
            loc:" Bengaluru",
            description:"The conference is expected to attract a diverse range of attendees, including faculty from B-Schools, sustainability executives and professionals, ...",
            links:"Climate Finance | Digital for Decarbonization | Utility Scale Solar PV"
        },

        {
            link:"/",
            src : "https://e2expo.com/uploads/Smart_Farming.jpg",
            title : "RenewX 2025",
            date: "  April 25, 2025 to April 27, 2025",
            loc:" Chennai",
            description:"Organized by Informa Markets, RenewX is a platform built to accelerate the growth of the South Indian Renewable Energy and Electric Vehicle Market,...",
            links:"Water Use Efficiency | Low Carbon Food | Smart Farming"
        },

        {
            link:"/",
            src : "https://e2expo.com/uploads/Green_hydrogen.jpg",
            title : "Cold Chain Asia 2025",
            date: " May 6, 2025 to May 8, 2025",
            loc:"Srinagar",
            description:"The Cold Chain Asia Expo in Srinagar offers significant strategic advantages. Situated in the heart of Kashmir, Srinagar...",
            links:"Electric Mobility | Product Use Efficiency | Energy Efficient Industrial Equipment"
        },

        {
            link:"/",
            src : "https://e2expo.com/uploads/D_for_Decarb.jpg",
            title : "Green Energy India Expo 2025",
            date: " May 8, 2025 to May 10, 2025 ",
            loc:" Kolkata",
            description:"The Green Energy India Expo is a pivotal gathering that catalyzes discussions on renewable energy, encourages the development of new ideas, and pro...",
            links:"Electric Mobility | Battery Storage | Green hydrogen"
        },
        
        {
            link:"/",
            src : "https://e2expo.com/uploads/Multi-stake.jpg",
            title : "World Environment Conference & Expo",
            date: "  June 4, 2025 to June 7, 2025",
            loc:"Noida",
            description:"World Environment Conference 2023, themed around Save Nature, Save Future will provide an ideal opportunity to discuss and debate ...",
            links:"Solid Waste Management | Energy Efficient Buildings | Green hydrogen"
        },

        {
            link:"/",
            src : "https://e2expo.com/uploads/EnergyBuilding.jpg",
            title : "World Environment Conference & Expo",
            date: " June 12, 2025 to June 12, 2025",
            loc:"Coimbatore",
            description:"The solar industry in India is set for unprecedented expansion and has opened enormous opportunities for manufacturers, solution providers and prod...",
            links:"Battery Storage | Green hydrogen | Hydro Power"
        },

        {
            link:"/",
            src : "https://e2expo.com/uploads/Low_Co.jpg",
            title : "Sustainability Fair 3.0",
            date: "April 9, 2025 to April 10, 2025",
            loc:"New",
            venue:"Sustainablity Cluster, School of Advanced Engineering",
            description:"Sustainablity Cluster Integrates Civil and HSE Enginnering ,...",
            links:"Low Carbon Constrction Materials | Solid waste Management | Energy Efficent Buildings"
        },

        {
            link:"/",
            src : "https://e2expo.com/uploads/Events.jpg",
            title : "India Green Networks Summit 2025",
            date: "April 11, 2025 to April 11, 2025",
            loc:"Tamil Nadu",
            description:"The summit focuses on eco-friendly, energy-efficient, and sustainable telecom networks, bringing together industry leaders, policymakers, and innov..",
            links:"Low Carbon Construction Materials | Energy Efficient Buildings"
        },

        {
            link:"/",
            src : "https://e2expo.com/uploads/Corporate_Carbon.jpg",
            title : "EcoStride 2.0",
            date: "April 13, 2025 to April 13, 2025",
            loc:"Bhubaneswar",
            description:"EcoStride 2.0 is not just a marathon; it’s a movement towards a cleaner, greener, and healthier future. Organized by Subhashree Gro...",
            links:"Multi-stakeholder Collaboration | Low Carbon Lifestyles | Reducing Non-CO2 Industrial & Agricultural Emissions"
        },

        {
            link:"/",
            src : "https://e2expo.com/uploads/Events.jpg",
            title : "Go Green Expo at C-Summit 2025",
            date: " April 15, 2025 to April 17, 2025",
            loc:"Punjab",
            venue:"Venue: Lovely Professional University, Punjab",
            description:"Go Green Expo at C-Summit 2025...",
            links:"Electric Mobility | Advanced Materials | Solid Waste Managements"
        },

        {
            link:"/",
            src : "https://e2expo.com/uploads/D_for_Decarb.jpg",
            title : "RideAsia EV",
            date: " April 18, 2025 to April 20, 2025",
            loc:" New Delhi",
            description:"RideAsia-Ev is a flagship event on E-Vehicles Industry of India. May it be E-vehicles like E-scooter, E-Bike, E-rickshaw, Golf carts or E-Vehicle c...",
            links:"Electric Mobility | Product Use Efficiency | Battery Storage"
        },

        {
            link:"/",
            src : "https://e2expo.com/uploads/Low_Carbon.jpg",
            title : "Advancing the Global Sustainability Narrative: Business, Policy, and Societal Imperatives",
            date: "  April 24, 2025 to April 26, 2025 ",
            loc:" Bengaluru",
            description:"The conference is expected to attract a diverse range of attendees, including faculty from B-Schools, sustainability executives and professionals, ...",
            links:"Climate Finance | Digital for Decarbonization | Utility Scale Solar PV"
        },

        {
            link:"/",
            src : "https://e2expo.com/uploads/Smart_Farming.jpg",
            title : "RenewX 2025",
            date: "  April 25, 2025 to April 27, 2025",
            loc:" Chennai",
            description:"Organized by Informa Markets, RenewX is a platform built to accelerate the growth of the South Indian Renewable Energy and Electric Vehicle Market,...",
            links:"Water Use Efficiency | Low Carbon Food | Smart Farming"
        },

        {
            link:"/",
            src : "https://e2expo.com/uploads/Green_hydrogen.jpg",
            title : "Cold Chain Asia 2025",
            date: " May 6, 2025 to May 8, 2025",
            loc:"Srinagar",
            description:"The Cold Chain Asia Expo in Srinagar offers significant strategic advantages. Situated in the heart of Kashmir, Srinagar...",
            links:"Electric Mobility | Product Use Efficiency | Energy Efficient Industrial Equipment"
        },

        {
            link:"/",
            src : "https://e2expo.com/uploads/D_for_Decarb.jpg",
            title : "Green Energy India Expo 2025",
            date: " May 8, 2025 to May 10, 2025 ",
            loc:" Kolkata",
            description:"The Green Energy India Expo is a pivotal gathering that catalyzes discussions on renewable energy, encourages the development of new ideas, and pro...",
            links:"Electric Mobility | Battery Storage | Green hydrogen"
        },
        
        {
            link:"/",
            src : "https://e2expo.com/uploads/Multi-stake.jpg",
            title : "World Environment Conference & Expo",
            date: "  June 4, 2025 to June 7, 2025",
            loc:"Noida",
            description:"World Environment Conference 2023, themed around Save Nature, Save Future will provide an ideal opportunity to discuss and debate ...",
            links:"Solid Waste Management | Energy Efficient Buildings | Green hydrogen"
        },

        {
            link:"/",
            src : "https://e2expo.com/uploads/EnergyBuilding.jpg",
            title : "World Environment Conference & Expo",
            date: " June 12, 2025 to June 12, 2025",
            loc:"Coimbatore",
            description:"The solar industry in India is set for unprecedented expansion and has opened enormous opportunities for manufacturers, solution providers and prod...",
            links:"Battery Storage | Green hydrogen | Hydro Power"
        }

    ]


    return <div className="eventsBoxContainer">
        {
            datas.map((cur) => <Link to={cur.link}>
            <div className="eventsBox">
                <div className="eventsBoxImg">
                    <img src={cur.src} />
                </div>

                <div className="eventsBoxText">
                    <h2>{cur.title}</h2>
                    <h3>📅{cur.date} | 📌 {cur.loc}</h3>
                   <h4>{cur.venue && cur.venue}</h4> 
                    <p>{cur.description}</p>
                    <Link> {cur.links} </Link>

                </div>

                <div className="eventsbtn">
                    <button><FaArrowRight /> </button>
                </div>
            </div>
            </Link>)
        }
    </div>
}
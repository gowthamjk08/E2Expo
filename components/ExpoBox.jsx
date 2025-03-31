import { FaSuitcase } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import './ExpoBox.css';


export default function ExpoBox(){
    let data = [
        {
            title:"GREW ONE",
            content:"GREW Energy Pvt. Ltd. specializes in designing and implementing large-scale Ground Mount Solar Solutions on unused land, maximizing energy production efficiency. Their Rooftop Solar Solutions cater to commercial, industrial, and institutional clients, helping reduce electricity costs while ensuring a strong return on investment. They also develop Floating Solar Plants, which utilize water bodies to overcome land constraints, enhance energy efficiency, and expedite deployment. Additionally, their Asset Management Services provide comprehensive maintenance and technical support to ensure optimal performance and longevity of solar assets.",
            loc:"Gujarat"
        },

        {
            title:"BioBizz",
            content:"At BioBiz, we are keen to capitalize on India’s rich biodiversity and the availability of large amounts of biomass residues to develop a sustainable bio-economy and attractive business opportunities.",
            loc:"Chennai"
        },

        {
            title:"Solar mango",
            content:"Solar Mango provides effective, expert guidance for the adoption of solar energy for all user segments – from Watts to Gigawatts, from off-grid to rooftop solar to large-scale solar farms.",
            loc:"Chennai"
        },

        {
            title:"Clidemy",
            content:"Each of the stakeholder segments is critical for effective climate action.The goal of the 8S framework is to use strong drivers to move.",
            loc:"Chennai"
        }
    ]

    return <div className="expoBoxContainer">
            {
               data.map((cur)=>
                <div className="expoBox">
                    <h2><FaSuitcase /> {cur.title}</h2>
                    <p>{cur.content}</p>
                    <h6><FaLocationDot /> {cur.loc}</h6>
                    <button>Read More</button>
                </div>)
            }
    </div>
}
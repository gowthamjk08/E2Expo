import { FaBoxOpen } from "react-icons/fa6";
import { FaDiamond } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { FaTicketSimple } from "react-icons/fa6";
import { Link } from "react-router-dom";
import '../components/HomeBox.css';


export default function HomeBox(){

        let data = [
            {
                icon:<FaBoxOpen />,
                title:"Product Launches",
                list:["AquaGreen Technologies","GreenTech Solutions","Solar mango"],
                link:"/product"
            },
            {
                icon:<FaRocket />,
                title:"Expo",
                list:["BioBizz","Solar mango","Clidemy"],
                link:"/product"
            },
            {
                icon:<FaTicketSimple />,
                title:"Events",
                list:["Sustainability Fair 3.0","India Green Networks Summit 2025","EcoStride 2.0"],
                link:"/product"
            }
        ]

    return <div className="homeBoxContainer">
        {
            data.map((cur,index)=><div className="homeBox" key={index}>
                <Link to={cur.link} className="titleLink">{cur.icon} {cur.title}</Link>
                <ul>
                    {
                        cur.list.map((curList)=> <li><FaDiamond /> <Link>{curList}</Link> </li>)
                    }
                </ul>
                <Link to={cur.link} className="btnViewMore">View More <FaArrowRight /></Link>
                </div>)
        }        

    </div>
}
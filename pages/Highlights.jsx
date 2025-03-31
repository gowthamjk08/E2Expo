import Nav from "../components/Nav";
import Footer from "../components/Footer";


export default function Highlights(){
    let data = [
        {
            title:"15 Eco Friendly Tech Startups in India (2022)",
            onwer:"by admin | Mar 25, 2025 | Uncategorized",
            content:"With environmental concerns increasing every day, there is a dire need to channel some efforts towards saving the environment and preventing it from further deterioration. Environmental startups aim at sustainably targeting environmental issues. It is a win-win..."
        },

        {
            title:"Renewable Energy Takes Center Stage: A Look at Recent Developments ",
            onwer:"by admin | Mar 25, 2025 | Uncategorized",
            content:"The renewable energy sector continues to surge forward, with ambitious targets and innovative technologies shaping the future of power generation. Here's a glimpse at some recent news and trends:  Global Growth and Expansion: Record Installations:The..."
        },

        {
            title:"Renewable Energy and Climate Change",
            onwer:"by admin | Mar 25, 2025 | Uncategorized",
            content:"India's Renewable Energy Growth: India is making strides in renewable energy, with solar and wind leading the way.  India's Net-Zero Target: India aims for net-zero emissions by 2070, with key targets of 500 GW renewable energy by 2030 and a 45% reduction in GHG.."
        },

        {
            title:"Environmental Challenges and Solutions in world",
            onwer:"by admin | Mar 25, 2025 | Uncategorized",
            content:"Air Pollution:A study projects losses in India's solar power potential due to air pollution and climate change.  Climate Change:Climate change-driven drought and worsening farmer distress are issues nationwide.  Circular Economy:India's recycling industry is expected..."
        },

        {
            title:"Renewable Energy and India’s Goals",
            onwer:"by admin | Mar 25, 2025 | Uncategorized",
            content:"Renewable Energy Growth:India is rapidly expanding its renewable energy capacity, with solar and wind leading the way.  Net-Zero Target:India aims for net-zero emissions by 2070, with key targets of 500 GW renewable energy by 2030 and a 45% reduction in GHG emissions..."
        },

        {
            title:"Climate Highlights: Key Updates on Our Changing World",
            onwer:"by admin | Mar 25, 2025 | Uncategorized",
            content:"Introduction The climate is shifting, and the latest reports show both challenges and progress in our efforts to mitigate its effects. From record-breaking temperatures to groundbreaking innovations in clean energy, here are the key climate highlights you need to..."
        },

    ]

    return <div>
        <Nav/>
        <div className="highlightspage">
            {
                data.map((cur)=><div className="highlights">
                    <h3>{cur.title}</h3>
                    <h6>{cur.onwer}</h6>
                    <p>{cur.content}</p>
                </div>)
            }
        </div>

        <Footer/>
    </div>
}
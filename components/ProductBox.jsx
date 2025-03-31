import './ProductBox.css'

export default function ProductBox(){
    let data = [
        {
            path:"https://e2expo.com/uploads/KENT-water-purifier.jpg",
            title:"Eco-Friendly Water Purifier",
            content:"A chemical-free water purification system using natural filtration and IoT monitoring."
        },

        {
            path:"https://e2expo.com/uploads/photo-1521405924368-64c5b84bec60.jpeg",
            title:"Autonomous Delivery Drone",
            content:"A next-generation delivery drone capable of autonomous navigation, package delivery, and real-time tracking."
        },

        {
            path:"https://e2expo.com/uploads/photo-1558449028-b53a39d100fc.jpg",
            title:"Smart Energy Meter",
            content:"Advanced IoT-based energy monitoring system for homes and businesses"
        },

    ]

    return <div className="productBoxContainer">
            {
                data.map((cur) => <div className="productBox">
                    <div className="productImg">
                        <img src={cur.path} />
                    </div>

                    <div className="productText">
                        <h2>{cur.title}</h2>
                        <p>{cur.content}</p>
                        <button>Read More</button>
                    </div>
                </div>)
            }
    </div>
}
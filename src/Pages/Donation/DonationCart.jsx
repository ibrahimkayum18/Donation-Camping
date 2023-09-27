import { Link } from "react-router-dom";


const DonationCart = ({ donation }) => {
    const {id, image, title, color, bg_color, category, category_color,price} = donation || {}
    return (
        <div style={{background: bg_color}} className="flex items-center rounded-lg">
            <div className="">
                <img className="h-[200px] w-[220px] rounded-lg" src={image} alt="" />
            </div>
            <div className="p-5 space-y-2">
            <button style={{background: category_color, color: color}}  className="py-1 px-3 border rounded ">{category}</button>
            <h2 style={{color: color}} className="card-title">{title}</h2>
            <h2 style={{color: color}} className="card-title">${price}</h2>
            <Link to={`/details/${id}`}>
            <button
            style={{ background: color }}
            className="btn border-none text-white font-medium"
          >View Details</button>
            </Link>
            </div>
        </div>
    );
};

export default DonationCart;
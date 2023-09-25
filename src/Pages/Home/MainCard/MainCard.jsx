import { Link } from "react-router-dom";

const MainCard = ({ donation }) => {
//   console.log(donation);
  const {id, image, category, title, color, category_color, bg_color } =
    donation || {};
  return (
    <Link to={`/details/${id}`}>
      <div style={{background: bg_color}} className="card bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>

        <div  className="p-5">
          <div className=" ">
            <button style={{background: category_color, color: color}}  className="py-1 px-3 border rounded ">{category}</button>
          </div>
          <div className="">
            <h2 style={{color: color}} className="card-title">{title}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MainCard;

import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  //   const [eachPhone, setEachPhone] = useState([])
  const [eachPhone, setEachPhone] = useState([]);
  const { image, title, color, price, description } =
    eachPhone || {};

  const params = useParams();
  const id = parseInt(params.id);
  const donations = useLoaderData();
  useEffect(() => {
    const findDonation = donations?.find((donation) => donation.id === id);
    if (findDonation) {
      setEachPhone(findDonation);
    }
  }, [donations, id]);

  const handleAddToDonations = () => {

    console.log('clicked');
    const localData = [];

    const detailsData = JSON.parse(localStorage.getItem('donation'))
    console.log(detailsData);
    if (!detailsData == []) {
        const setData = localStorage.setItem('donation', JSON.stringify(eachPhone))
        localData.push(setData)
        console.log(localData);
        
    }

    
  }

  return (
    <div className="w-[90%] mx-auto lg:relative">
      <div className="w-full mt-10">
        <img className="w-full " src={image} alt="" />
        <div className="py-5 lg:py-14 lg:pl-14 lg:bg-[#00000082] lg:absolute  lg:bottom-[213px] left-0 right-0">
          <button
          onClick={handleAddToDonations}
            style={{ background: color }}
            className="btn border-none text-white font-medium"
          >
            Donate ${price}
          </button>
        </div>
      </div>
      <div className="space-y-10 pt-10">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Details;

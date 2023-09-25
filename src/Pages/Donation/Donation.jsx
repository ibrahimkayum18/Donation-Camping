import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
import DonationCart from "./DonationCart";

const Donation = () => {
  const [allDonation, setAllDonation] = useState([]);
  const [noData, setNoData] = useState("");
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("donation"));
    if (getData) {
        setAllDonation(getData);
    }else{
        setNoData("No Data Found")
    }
    
  }, []);
  return (
    <div className="mt-10">
        <div className="text-center">
        {noData ? (
          <p className="text-1xl font-bold text-gray-500 mt-64 ">{noData}!!</p>
        ) : (
          <div></div>
        )}
      </div>
      <div className="grid lg:grid-cols-2 gap-5">
        {isShow
          ? allDonation.map((donation) => (
              <DonationCart
                key={donation.id}
                donation={donation}
              ></DonationCart>
            ))
          : allDonation
              .slice(0, 4)
              .map((donation) => (
                <DonationCart
                  key={donation.id}
                  donation={donation}
                ></DonationCart>
              ))}
      </div>
      <div className="text-center my-10">
        {allDonation.length > 4 && (
          <button onClick={() => setIsShow(!isShow)} className="btn btn-primary">
            {!isShow ? "Show More" : "Show Less"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Donation;

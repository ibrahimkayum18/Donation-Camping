import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import StatisticsCart from "./StatisticsCharts";

const Statistics = () => {
  const [allSelectedDonation, setAllSelectedDonation] = useState(0);
  const [donation, setDonation] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const allDonations = useLoaderData();
  const allDonationLength = allDonations.length;

  useEffect(() => {
    const selectedDonations = JSON.parse(localStorage.getItem("donation"));
    if (selectedDonations) {
      setAllSelectedDonation(selectedDonations.length);
      const totalDonation = (allSelectedDonation / allDonationLength) * 100;
      setDonation(totalDonation);
      const remainingDonation = 100 - donation;
      setRemaining(remainingDonation);
    }
  }, [allDonationLength, donation, allSelectedDonation]);
  console.log(remaining, donation);

  return (
    <div className="w-[100%] mx-auto">
      <div className="lg:flex justify-center text-3xl font-bold gap-10 my-10">
        <h2>
          Remaining Donation:{" "}
          <span className="text-[#FF444A]">{remaining.toFixed(2)}%</span>{" "}
        </h2>
        <h2>
          Your Total Donation:{" "}
          <span className="text-[#00C49F]">{donation.toFixed(2)}%</span>{" "}
        </h2>
      </div>
      <div className="grid lg:grid-cols-2 gap-4 lg:gap-10">
        <div className="w-full mx-auto">
          <StatisticsCart
            donation={donation}
            remaining={remaining}
          ></StatisticsCart>
        </div>
        <div className="ml-36 lg:ml-0">
          <img
            className="w-[300px] h-[300px] lg:mt-24 lg:ml-28"
            src="https://i.ibb.co/YTNM3kj/dn.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Statistics;

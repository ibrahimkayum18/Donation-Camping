import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";



const Statistics = () => {
  const [allSelectedDonation, setAllSelectedDonation] = useState(0);
  const [donation, setDonation] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const allDonations = useLoaderData();
  const allDonationLength = allDonations.length;

  useEffect(() => {
    const selectedDonations = JSON.parse(localStorage.getItem("donation"));
    if(selectedDonations){
      setAllSelectedDonation(selectedDonations.length);
      const totalDonation =  allSelectedDonation / allDonationLength  * 100;
      console.log(totalDonation);
      setDonation(totalDonation);
      const remainingDonation = 100 - donation;
      setRemaining(remainingDonation)
    }
  }, [allDonationLength,donation, allSelectedDonation]);




  return (
    <div>
      <h2>All donation list: {donation} </h2>
      <h2>Selected donation: {remaining} </h2>
    </div>
  );
};

export default Statistics;

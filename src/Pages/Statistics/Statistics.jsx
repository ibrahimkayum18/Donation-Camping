import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

const Statistics = () => {
  const [allSelectedDonation, setAllSelectedDonation] = useState([]);
  const allDonations = useLoaderData();

  useEffect(() => {
    const selectedDonations = JSON.parse(localStorage.getItem("donation"));
    setAllSelectedDonation(selectedDonations);
  }, []);
let selectedDonations =allSelectedDonation.length / allDonations.length * 100;
let remainingDonation = 100 - selectedDonations;

const data = [
    { name: 'Remaining', value: {remainingDonation} },
    { name: 'Total', value: {selectedDonations} },
  ];
  return (
    <div>
      <h2 className="text-3xl">Total Price: {selectedDonations} </h2>
      <h2 className="text-3xl">Selected Price: {remainingDonation} </h2>
      <div>
      <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default Statistics;

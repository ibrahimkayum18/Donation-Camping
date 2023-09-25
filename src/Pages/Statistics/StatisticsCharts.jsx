
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";
import { Pie } from 'react-chartjs-2';

const StatisticsCart = ({ remaining, total }) => {

    const data = [
        { name: 'Remaining', value: {remaining} },
        { name: 'Total', value: {total} },
      ];

  return (
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
  );
};

export default StatisticsCart;

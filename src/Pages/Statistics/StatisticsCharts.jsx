
import autoprefixer from 'autoprefixer';
import { PieChart, Pie, Legend, Sector, Cell, ResponsiveContainer } from 'recharts';


const StatisticsCart = ({ remaining, donation }) => {

  const data = [
    { name: 'Remaining', value: remaining? remaining : 100 },
    { name: 'Your Donation', value: donation? donation : 0 },
];
const Values = [remaining , donation]
const COLORS = ['#FF444A', '#00C49F'];

const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        // const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = remaining;
        const y = donation;

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">{x}
            {`${(Values.length ).toFixed(1)}%`}
        </text>
    );
};

return (
    <>
        <div className="text-center">
            <div className="row d-flex justify-content-center text-center">
                <div className="col-md-8">
                <PieChart width={600} height={600}>
                        <Legend width={500} height={15} layout="horizontal" verticalAlign="top" align="top" />
                            <Pie
                                data={data}
                                cx="50%"
                                cy="40%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={160}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index % Values.length}`} fill={COLORS[index % COLORS.length]}  />
                                ))}
                            </Pie>
                            
                        </PieChart>
                </div>
            </div>
        </div>
    </>
)
};

export default StatisticsCart;

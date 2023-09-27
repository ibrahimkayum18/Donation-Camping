
import { PieChart, Pie, Legend, Sector, Cell, ResponsiveContainer } from 'recharts';


const StatisticsCart = ({ remaining, donation }) => {

  const data = [
    { name: 'Remaining-', value: remaining? remaining : 100 },
    { name: 'Your Donation', value: donation? donation : 0 },
];
const Values = [remaining , donation]
const COLORS = ['#FF444A', '#00C49F'];

const renderCustomizedLabel = ({ cx,donation, remaining, percent, index }) => {
    const x = remaining;
    const y = donation;

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(Values.length ).toFixed(1)}%`}
        </text>
    );
};

return (
    <>
        <div className="">
            <div className="row d-flex justify-content-center text-center">
                <div className="col-md-8">
                    <ResponsiveContainer width={450} height={450} className="text-center">
                        <PieChart width={500} height={500}>
                            
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index % Values.length}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Legend width={400} height={15} layout="horizontal" verticalAlign="bottom" align="bottom" />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    </>
)
};

export default StatisticsCart;

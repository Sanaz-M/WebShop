import { PieChart, Pie, Cell} from 'recharts';
  
  
const ChannelPieChart = () => {

const data = [
  {name: 'Direct Search', percentage: 12},
  {name: 'Facebook', percentage: 38},
  {name: 'Instagram', percentage: 50}
  
];

const COLORS = ['#1b9b5c', '#0088FE', '#d40064'];
  
return (
        <PieChart width={200} height={200}>
          <Pie
        data={data}
        cx={100}
        cy={100}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="percentage"
      >
          {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
        </PieChart>
);
}
  
export default ChannelPieChart;
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";


const UserChart = ({ title, data, dataKey, grid }) => {

    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#b3b0b1" />
                    <Line type="monotone" dataKey={dataKey} stroke="rgb(213 183 201)" />
                    <Tooltip />

                    {grid && <CartesianGrid stroke="rgb(131 131 131 / 58%)" strokeDasharray="5 5" />}
                </LineChart>
            </ResponsiveContainer>
            <h6 className="mt-3 low-opacity">2021
                Monthly report
            </h6>
        </div>
    );
}

export default UserChart

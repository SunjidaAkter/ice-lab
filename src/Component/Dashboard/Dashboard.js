import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, BarChart, Legend, Bar, Pie, PieChart } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];
    return (
        <div className='conatiner'>
            <p className='heading orange-color'>ANALYSIS</p>
            <div className='d-flex justify-content-evenly'>
                <div className=''>
                    <p className='headings coffy-color my-4'>Month Wise Sell</p>
                    <p className='normal orange-color mb-3 '>Line Chart</p>
                    <div className='d-flex justify-content-center'>
                        <LineChart width={500} height={300} data={data} margin={{ top: 5, right: 0, bottom: 5, left: 0 }}>
                            <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                        </LineChart>
                    </div>
                </div>

                <div className=''>
                    <p className='headings coffy-color my-4'>Investment VS Revenue</p>
                    <p className='normal orange-color mb-3'>Area Chart</p>
                    <div className='d-flex justify-content-center'>
                        <AreaChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 10,
                                right: 0,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="investment" stroke="#82ca9d" fillOpacity={1} fill="url(#colorUv)" />
                            <Area type="monotone" dataKey="revenue" stroke="#8884d8" fillOpacity={1} fill="url(#colorPv)" />
                        </AreaChart>
                    </div>

                </div>
            </div>
            <div className='d-flex justify-content-evenly mt-5'>
                <div className=''>
                    <p className='headings coffy-color my-4'>Investment VS Revenue</p>
                    <p className='normal orange-color mb-3 '>Bar Chart</p>
                    <div className='d-flex justify-content-center'>
                        <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="investment" fill="#8884d8" />
                            <Bar dataKey="revenue" fill="#82ca9d" />
                        </BarChart>
                    </div>
                </div>

                <div className=''>
                    <p className='headings coffy-color my-4'>Month Wise Sell</p>
                    <p className='normal orange-color mb-3'>Pie Chart</p>
                    <div className='d-flex justify-content-center'>
                        <PieChart width={300} height={400}>
                            <Pie
                                dataKey="sell"
                                startAngle={180}
                                endAngle={0}
                                data={data}
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#8884d8"
                                label
                            />

                        </PieChart>
                    </div>

                </div>
            </div>
        </div>



    );
};

export default Dashboard;
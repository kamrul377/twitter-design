import React, { useEffect, useState } from 'react'
import Chart from "react-apexcharts";

const Charts = () => {

    const [data, setData] = useState([])

    const categorys = ['1991', 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, '2000'];

    let catg = []

    data.map(d => {
        catg.push(d.name)
    }); 

    console.log(catg)






    const data1 = [30, 40, 45, 50, 49, 60, 70, 91, 100, 50];
    const data2 = [50, 60, 70, 100, 120, 130, 300, 200, 120, 40];
    const data3 = [50, 60, 100, 200, 120, 130, 300, 90, 120, 40];



    useEffect(() => {
        const res = fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()).then((data) => setData(data))
    }, [])


    console.log(data)

    const [chartState, setchartState] = useState({
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: categorys
            }
        },
        series: [
            {
                name: "series-1",
                data: data1
            },
            {
                name: "series-2",
                data: data2
            },
            {
                name: "series-2",
                data: data3
            }
        ]
    })
    return (
        <div className='grid md:grid-cols-2 bg-gray-700 gap-4'>

            <Chart className="bg-white dark:bg-gray-800"
                options={chartState.options}
                series={chartState.series}
                type="bar"
                width="100%"
            />
            <Chart className="bg-white"
                options={chartState.options}
                series={chartState.series}
                type="line"
                width="100%"
            />
            <Chart className="bg-white"
                options={chartState.options}
                series={chartState.series}
                type="radar"
                width="100%"
            />
            <Chart className="bg-white"
                options={chartState.options}
                series={chartState.series}
                type="scatter"
                width="100%"
            />
            <Chart className="bg-white"
                options={chartState.options}
                series={chartState.series}
                type="heatmap"
                width="100%"
            />
            <Chart className="bg-white"
                options={chartState.options}
                series={chartState.series}
                type="area"
                width="100%"
            />

        </div>
    )
}

export default Charts
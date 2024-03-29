import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';
function LineGraph() {
    const [data, setData] = useState({});
    // https://disease.sh/v3/covid-19/historical/all?lastdays=120

    useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
            .then(response => response.json()).then((data) => {
                console.log(data);
            });
    }, []);

    const buildChartData = (data,casesType='cases') => {
        const chartData = [];
        let lastDataPoint;

        data.cases.forEach((date) => {
            if (lastDataPoint) {
                const newDataPoint = {
                    x: date, y: data[casesType][date] - lastDataPoint
                }
                chartData.push(newDataPoint);
            } lastDataPoint = data[casesType][date];
        })
        return chartData;
    }

    return (
        <div><h1>Im a graph</h1></div>
    )
}

export default LineGraph
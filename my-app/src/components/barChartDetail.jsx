import React, { useEffect, useRef, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Cat Temperament',
        },
    },
};

const labels = ['Affection', 'Child-Friendly', 'Energy', 'Intelligence'];

export default function BarChartDetails(props) {
    const chartRef = useRef(null);
    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const catData =
    {
        affection: props.cat.affection_level,
        childFriendliness: props.cat.child_friendly,
        energy: props.cat.energy_level,
        intelligence: props.cat.intelligence,
    }

    const data = {
        labels,
        // chartData
        datasets: [
            {
                label: 'Cat Temperament',
                data: [catData.affection, catData.childFriendliness, catData.energy, catData.intelligence,],
            },
        ],
    };
    
    useEffect(() => {
        const chart = chartRef.current;
        console.log(chart);

        if (!chart) {
            return;
        }

        const chartData = {
            ...data,
            datasets: data.datasets.map(dataset => ({
                ...dataset,
                backgroundColor: createBackgroundGradient(chart.ctx, chart.chartArea),
            }))
        }
        setChartData(chartData);
    }, [])


    function createBackgroundGradient(ctx, chartArea) {
        const gradientBg = ctx.createLinearGradient(chartArea.left, 0, chartArea.right, 0)

        gradientBg.addColorStop(0, '#CAD2C5');
        gradientBg.addColorStop(0.2, '#84A98C');
        gradientBg.addColorStop(0.4, '#52796F');
        gradientBg.addColorStop(0.6, '#354F52');
        gradientBg.addColorStop(0.8, '#2F3E46');

        return gradientBg;
    }

    return (
        <Bar ref={chartRef} id="chart-cat" options={options} data={chartData} />
    )
}

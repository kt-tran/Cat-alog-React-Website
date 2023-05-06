import React, { useEffect, useRef, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';


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
            text: 'Qualities',
        },
    },
    scales: {
        y: {
            max: 5,
            min: 0,
            ticks: {
                stepSize: 1
            }
        }
    }
};

const labels = ['Adaptability', 'Affection', 'Child Friendly', 'Dog Friendly', 'Energy', 'Grooming Ability', 'Health issues', 'Intelligence', 'Shedding level',
    'Social Needs', 'Stranger Friendly', 'Vocal'];

export default function BarChartDetails(props) {
    const chartRef = useRef(null);
    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const catData =
    {
        adaptability: props.cat.adaptability,
        affection: props.cat.affection_level,
        childFriendliness: props.cat.child_friendly,
        dogFriendliness: props.cat.dog_friendly,
        energy: props.cat.energy_level,
        grooming: props.cat.grooming,
        health_issues: props.cat.health_issues,
        intelligence: props.cat.intelligence,
        shedding_level: props.cat.shedding_level,
        social_needs: props.cat.social_needs,
        stranger_friendly: props.cat.stranger_friendly,
        vocalisation: props.cat.vocalisation
    }

    
    useEffect(() => {
        const chart = chartRef.current;
        const data = {
            labels,
            // chartData
            datasets: [
                {
                    label: 'Qualities',
                    data: [catData.adaptability, catData.affection, catData.childFriendliness, catData.dogFriendliness, catData.energy, catData.grooming, catData.health_issues,
                    catData.intelligence, catData.shedding_level, catData.social_needs, catData.stranger_friendly, catData.vocalisation],
                },
            ],
        };

        console.log('here');

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
    },[
        catData.adaptability, 
        catData.affection, 
        catData.childFriendliness, 
        catData.dogFriendliness, 
        catData.energy, 
        catData.grooming, 
        catData.health_issues,
        catData.intelligence, 
        catData.shedding_level, 
        catData.social_needs, 
        catData.stranger_friendly, 
        catData.vocalisation
    ])


    function createBackgroundGradient(ctx, chartArea) {
        const gradientBg = ctx.createLinearGradient(chartArea.left, 0, chartArea.right, 0)

        gradientBg.addColorStop(0, '#CAD2C5');
        gradientBg.addColorStop(0.25, '#84A98C');
        gradientBg.addColorStop(0.5, '#52796F');
        gradientBg.addColorStop(0.75, '#354F52');
        gradientBg.addColorStop(1, '#2F3E46');

        return gradientBg;
    }

    return (
        <Bar ref={chartRef} id="chart-cat" options={options} data={chartData} />
    )
}

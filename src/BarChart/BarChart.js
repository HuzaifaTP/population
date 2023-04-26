import React from 'react';
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
import './BarChart.css'

function BarChart({ data }) {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );
    const youngAdults = data.filter(person => person.age <= 35);
    const adults = data.filter(person => person.age >= 36 && person.age <= 50);
    const seniors = data.filter(person => person.age >= 51);

    const chartData = {
        labels: ['Young Adults', 'Adults', 'Seniors'],
        datasets: [
            {
                label: 'Number of People',
                data: [youngAdults.length, adults.length, seniors.length],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                width:1
            },
        ],
    };

    const chartOptions = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                        stepSize: 1,
                    },
                },
            ],
        },
    };

    return (
        <div className = 'bar-chart'>
            <h2>Age statistics</h2>
            <Bar height={300} data={chartData} options={chartOptions} />
        </div>
    );
}

export default BarChart;

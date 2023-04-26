import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './PieChart.css'
function PieChart({ data }) {
    ChartJS.register(ArcElement, Tooltip, Legend);

    const femaleCount = data.filter(person => person.gender === 'f').length;
    const maleCount = data.filter(person => person.gender === 'm').length;

    const chartData = {
        labels: ['Female', 'Male'],
        datasets: [
            {
                data: [femaleCount, maleCount],
                backgroundColor: ['#FF6384', '#36A2EB'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB'],
            }
        ]
    };

    return (
        <div className="pie-chart">
            <h2>Female to Male Ratio</h2>
            <Pie data={chartData}/>
        </div>
    );
}

export default PieChart;

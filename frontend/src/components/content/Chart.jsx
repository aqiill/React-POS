import React from "react";
import Chart from 'chart.js/auto';
import { Bar } from "react-chartjs-2";

const data = {
  labels: ['Today'],
    datasets: [{
      label: 'Ultra Milk',
      data: [10],
      backgroundColor: '#FE9D9D',
      borderColor: '#FE9D9D',
      borderWidth: 1
    },
    {
      label: 'Indomie',
      data: [8],
      backgroundColor: '#FE9D9D',
      borderColor: '#FE9D9D',
      borderWidth: 1
    },
    {
      label: 'Ice Cream',
      data: [6],
      backgroundColor: '#FE9D9D',
      borderColor: '#FE9D9D',
      borderWidth: 1
    }, 
  ],
};

const BarChart = () => (
  <>
    <Bar 
        options= {{
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }],
            xAxes: [{
              gridLines: {
                display: false
              },
              ticks: {
                display: false
              },
              barPercentage: 0.6,
              categoryPercentage: 0.9
            }]
          }
        }}
        data={data} 
      />
  </>
);

export default BarChart;
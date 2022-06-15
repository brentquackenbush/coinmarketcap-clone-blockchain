import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart } from 'chart.js/auto'

const randomPoints = []

for( var i = 0; i < 11; i++) {
    randomPoints[i] = new Array(10)
    for(var j = 0; j < 11; j++) {
        randomPoints[i][j] = Math.floor(Math.random() * 100) + 1
    }
}

const getRandomPoints = () => {
    const rndInt = Math.floor(Math.random() * 4) + 1
    return randomPoints[rndInt] 
}

const data = {
    labels: [
        '12:00 A.M.',
        '2:00 A.M.',
        '4:00 A.M.',
        '6:00 A.M.',
        '8:00 A.M.',
        '12:00 P.M.',
        '2:00 P.M.',
        '4:00 P.M.',
        '6:00 P.M.',
        '8:00 P.M.',
        '10:00 P.M.',
    ],
    datasets: [
        {
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'red',
            borderColor: '#3773f5',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyl: 'miter',
            pointBorderColor: '#3773f5',
            pointBackgroundColor: '3773f5',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#3773f5',
            pointHoverBorderColor: '#3773f5',
            pointRadius: 1,
            pointHitRadius:10,
            data: getRandomPoints(),
        },
    ],
}

const options = {
    plugins: {
        legend: {
            display:false,
        }
    }
}

const Graph = () => {
    return (
        <Line data={data} options={options} width={400} height={150} />
    )
}

export default Graph
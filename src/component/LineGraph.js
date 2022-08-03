import React from 'react';
import {Line} from 'react-chartjs-2';
import {Chart as ChartJS, registerables} from 'chart.js';
ChartJS.register(...registerables);

function LineGraph(props){
  const data={
    labels: props.label.map(l=>l.substring(0, 10)),
  
    datasets: [
        {
    id:1,
    label: 'My First dataset',
    
    fill: false,
    
    lineTension: 0.1,
    
    backgroundColor:'rgba(75,192,192,8.4)',
    
    borderColor: 'rgba(75,192,192,1)',
    
    borderCapstyle: 'butt',
    
    borderDash: [],
    
    borderDashOffset: 0.0,
    
    borderJoinStyle: 'miter',
    
    pointBorderColor: 'rgba(75,192,192,1)',
    
    pointBackgroundColor: '#fff',
    
    pointBorderWidth: 1,
    
    pointHoverRadius: 5,
    
    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    
    pointHoverBorderColor: 'rgba(220,220,220,1)', pointHoverBorderWidth: 2,
    
    pointRadius: 1,
    
    pointHitRadius: 10,
    
    data:  props.yAxis
    }
    ]
    }
  return (
    <div style={{width: '60%', height: '6o%',margin: '50px auto' }}>
      <Line datasetIdKey='id'
        data ={data}
/>
        </div>
  )
}

export default LineGraph
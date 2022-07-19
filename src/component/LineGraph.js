import React from 'react';
import {Line} from 'react-chartjs-2';
const data={
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','august', 'september', 'october', 'november', 'december',],

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
  
  data: [65, 59, 80, 81, 56, 55, 40],
  }
  ]
  }
function LineGraph(){
  return (
    <div>
        <Line datasetIdKey='id'
        data ={data}
/>
        </div>
  )
}

export default LineGraph
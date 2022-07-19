import React from 'react'
import {Doughnut} from 'react-chartjs-2';
const data={
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        { backgroundColor:[
            'red','blue','black','pink','purple','green','yellow',
        ],
        data: [65, 59, 80, 81, 56, 55, 40],
        }]
};
function Doughnutchart() {
  return (
    <div><h1>Doughnut</h1>
    <Doughnut data={data}/>
     </div>
  );
}

export default Doughnutchart
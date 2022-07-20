import React from 'react'
import Card from './component/Card';

 const CovidSummary=(props)=> {
    const{
        TotalConfirmed,
        TotalRecovered,
        TotalDeath,
        counrty,
    }=props;
  return (
    <div>
        <h1>{counrty===""?'World Wide Corona Report':'country'}</h1>
         <div style={{display: 'flex', justifyContent: 'center'}}>
      <Card><span> Total Confirmed</span><br/><span>{TotalConfirmed}</span></Card>
      <Card><span> Total Recovered</span><br/><span>{TotalRecovered}</span></Card>
      <Card><span>Total Death</span><br/><span>{TotalDeath}</span></Card>
     </div>
    </div>
  )
}
export default CovidSummary;
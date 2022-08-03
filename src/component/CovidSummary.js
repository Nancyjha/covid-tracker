import React from 'react'
import Card from './Card';
const CovidSummary = (props) => {
  const {
    TotalConfirmed,
    TotalRecovered,
    TotalDeaths,
    
  } = props;
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card><span> Total Confirmed</span><br /><span>{TotalConfirmed}</span></Card>
        <Card><span> Total Recovered</span><br /><span>{TotalRecovered}</span></Card>
        <Card><span>Total Death</span><br /><span>{TotalDeaths}</span></Card>
      </div>
    </div>
  )
}
export default CovidSummary;
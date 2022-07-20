import React from 'react';
import { useEffect } from 'react';
import CovidSummary from './component/CovidSummary';
import LineGraph from './component/LineGraph';
import axios from './axios';
function App() {
  useEffect(() => {
    axios.get(`/summary`).then(res => { console.log(res); }).catch(err => { console.log(err) })
  }, []);

  return (
    <div>

      <CovidSummary
        TotalConfirmed={0}
        TotalRecovered={0}
        TotalDeath={0}
        counrty={'INDIA'}
      />
      <LineGraph />

    </div>
  )
}

export default App


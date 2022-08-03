import React from "react";
import { useState, useEffect } from "react";
import CovidSummary from "./component/CovidSummary";
import LineGraph from "./component/LineGraph";
import axios from "./axios";
function App() {
  const [totalConfirmed, setTotalConfirmed] = useState(0);
  const [totalDeaths, setTotalDeaths] = useState(0);
  const [loading, setLoading] = useState(true);
  const [covidSummary, setCovidSummary] = useState({});
  const[days, setDays] = useState(7);
  const[country, setCountry] = useState('');
  const[coronaCountAr, setCoronaCountAr] = useState([]);
  const[label,setLabel]=useState([]);
  useEffect(() => {
    setLoading(true);
    console.log(loading);
    axios
      .get(`/summary`)
      .then((res) => {
        if (res.status === 200) { 
          setTotalConfirmed(res.data.Global.TotalConfirmed);
          setTotalDeaths(res.data.Global.TotalDeaths);
          setCovidSummary(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      }).finally(    ()=>    setLoading(false)
      );
  }, []);
const formatDate=(date)=>{
  const d= new Date(date);
  const year = d.getFullYear();
  const month = `0${d.getMonth()+1}`.slice(-2);
  const _date = d.getDate();
  return `${year} ${month} ${_date}`;
}

  const countryHandler=(e)=>{
    const country= e.target.value;
        setCountry(country);
    
  }
  const daysHandler=(e)=>{
  setDays(e.target.value);
  }
  const onButtonClick=()=>{
    const d= new Date();
    const to= formatDate(d)
    const from =formatDate(d.setDate(d.getDate()-days))
    getCoronaReportByDateRange(country,from,to);
  };
  const getCoronaReportByDateRange=(countrySlug, from , to)=>{
    const endpoint=`/country/${countrySlug}/status/confirmed?from=${from}T00:00:00Z&to=${to}T00:00:00Z`
    axios.get(endpoint.replaceAll(" ","-"))
    .then(res=>{
      console.log(res.data);
      const yAxisCoronaCount= res.data.map(d=>d.Cases);
      const xAxisLabel=res.data.map(d=>d.Date);
      const covidDetails =covidSummary.Countries.find(country=>country.Slug===countrySlug);
      setTotalConfirmed(covidDetails.TotalConfirmed)
      setTotalDeaths(covidDetails.TotalDeaths)
      setCoronaCountAr(yAxisCoronaCount)
      setLabel(xAxisLabel)
    })
    .catch(err=>{ console.error(err); 
  })
}
  return (
    (loading)?<h1 style={{ textAlign: "center" }}>Getting the data from api</h1>:
    <div>
     {country===''? <h1 style={{ textAlign: "center" }}>World Wide Corona Report</h1>:<h1 style={{ textAlign: "center" }}>{`${country.charAt(0).toUpperCase()}${country.slice(1)}`}</h1>}

      <CovidSummary
        TotalConfirmed={totalConfirmed === 0 ? 584358167 : totalConfirmed}
        TotalDeaths={totalDeaths === 0 ? 6423934 : totalDeaths}
        counrty={"INDIA"}
      />
      <div style={{ textAlign: "center" ,marginTop:"16px"}}>
        <select value={country} onChange={countryHandler}>
          {covidSummary.Countries &&
            covidSummary.Countries.map((country) => (
              <option key={country.Slug} value={country.Slug}>
                {country.Country}
              </option>
            ))}
        </select>
        <select value={days} onChange={daysHandler}>
          <option value='7'>Last 7 days</option>
          <option value='30'>Last 30 days</option>
          <option value='90'>Last 90 days</option>
        </select>
        <button onClick={onButtonClick}>Submit</button>
      </div>
      <LineGraph 
      yAxis={coronaCountAr}
      label={label}
      />
    </div>
  );
}
export default App;

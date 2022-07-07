import { FormControl, MenuItem, Select, Table, Card, CardContent } from '@material-ui/core';
import './App.css';
import React, { useState } from 'react';
import { useEffect } from 'react';
import InfoBox from './InfoBox';
import Map from './Map';
function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});
  useEffect(() => {
    // The code inside here will run once 
    // when the component loads and not again

    const getCountriesData = async () => {
      //sending request async
      await fetch("https://disease.sh/v3/covid-19/countries").then(
        (response) => response.json()).then((data) => {
          const countries = data.map((country) => (
            {
              name: country.country,
              value: country.countryInfo.iso2
            }
          ));
          setCountries(countries);
     
        });
    };
    getCountriesData();// handling asynchronous peace of data
  }, [

  ]);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;

   setCountry(countryCode);

    const url = countryCode === "worldwide" ? "https://disease.sh/v3/covid-19/all" :
      `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url).then((response) => response.json()).then((data) =>
     {
      setCountry(countryCode);

      // All of the data...
      // from the country response 
      setCountryInfo(data);
    });
  };

  console.log("COUNTRY INFO >>>", countryInfo);

  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>COVID-19 tracker</h1>
          <FormControl className='app__dropdown'>
            <Select variant="outlined" onChange={onCountryChange} value={country}>
              {/* <MenuItem value="worldwide">worldwide</MenuItem>
            <MenuItem value="worldwide">Option 2</MenuItem>
            <MenuItem value="worldwide">Option 3</MenuItem>
            <MenuItem value="worldwide">Option 4</MenuItem> */}
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {
                countries.map((country) => (<MenuItem value={country.value}>{country.name}</MenuItem>))
              }
            </Select>
          </FormControl>
        </div>
        {/*Header */}
        {/*Title + Select input dropdown field */}
        <div className='app__stats'>
          <InfoBox title='Coronavirus Cases' cases={countryInfo.todayCases} total={countryInfo.cases} />
          <InfoBox title='Recovered' cases={countryInfo.todayRecovered} total={countryInfo.recovered} />
          <InfoBox title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths} />
          {/* InfoBoxs */}

          {/* InfoBoxs */}
          {/* InfoBoxs */}


          {/* Table */}
          {/* Map */}
        </div>

        <Map />
      </div>


      <Card className='app__right'>
        <CardContent>
          <h3>Live Cases by Country</h3>
          <h3>Worldwide new cases</h3>
        </CardContent>
      </Card>

    </div>
  );
}

export default App;

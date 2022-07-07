import { FormControl, MenuItem, Select } from '@material-ui/core';
import './App.css';
import React, { useState } from 'react';
import { useEffect } from 'react';
function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // The code inside here will run once 
    // when the component loads and not again

    const getCountriesData = async () => {
      //sending request async
      await fetch("https://disease.sh/v3/covid-19/countries").then(
        (response) => response.json()).then((data)=>{
          const countries = data.map((country) => (
            {
              name: country.country,
              value:country.countryInfo.iso2
            }
          ));
          setCountries(countries);
        });
    };
    getCountriesData();// handling asynchronous peace of data
  }, [

  ]);

  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 tracker</h1>
        <FormControl className='app__dropdown'>
          <Select variant="outlined" value="abc">
            {/* <MenuItem value="worldwide">worldwide</MenuItem>
            <MenuItem value="worldwide">Option 2</MenuItem>
            <MenuItem value="worldwide">Option 3</MenuItem>
            <MenuItem value="worldwide">Option 4</MenuItem> */}

            {
              countries.map((country) => (<MenuItem value={country.value}>{country.name}</MenuItem>))
            }
          </Select>
        </FormControl>
      </div>
      {/*Header */}
      {/*Title + Select input dropdown field */}


      {/* InfoBoxs */}
      {/* InfoBoxs */}
      {/* InfoBoxs */}


      {/* Table */}
      {/* Map */}
    </div>
  );
}

export default App;

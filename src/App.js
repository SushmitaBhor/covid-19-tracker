import { FormControl, MenuItem, Select } from '@material-ui/core';
import './App.css';
import React, { useState } from 'react';
function App() {
  const [countries, setCountries] = useState(["USA", "UK", "INDIA"]);
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
              countries.map((country) => (<MenuItem value={country}>{country}</MenuItem>))
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

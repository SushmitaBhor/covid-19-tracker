import { FormControl, MenuItem,Select } from '@material-ui/core';
import './App.css';
import React from 'react';
function App() {
  return (
    <div className="app">
 <div className="app__header"></div>

    
     <h1>COVID-19 tracker</h1>
    <FormControl className='app__dropdown'>
      <Select variant="outlined" value="abc">
<MenuItem value="worldwide">worldwide</MenuItem>
<MenuItem value="worldwide">Option 2</MenuItem>
<MenuItem value="worldwide">Option 3</MenuItem>
<MenuItem value="worldwide">Option 4</MenuItem>
      </Select>
    </FormControl>
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

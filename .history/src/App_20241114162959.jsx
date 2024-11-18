import { useEffect, useState } from 'react'
import './App.css'
import Countries from './components/Countries';

function App() {

  const [countries, setCountries] = useState([]);
  const url = "https://restcountries.com/v3.1/all";

  async function fetchData() {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();

    setCountries(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Countries of the World</h1>
      <div>
        <div>
          <input type='checkbox'/>
          <label>Alphabetically</label>
        </div>
        <div>
          <p>Top 10</p>
          <br/>
          <input type='checkbox'/>
          <label>by population</label>
          <br/>
          <input type='checkbox'/>
          <label>by area</label>
        </div>
        <div>
          <p>By continent</p>
          <br/>
          <section>
            <option></option>
          </section>
        </div>
      </div>
      <Countries countries={countries}/>
    </div>
  );
}

export default App

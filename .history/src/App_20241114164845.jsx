import { useEffect, useState } from 'react'
import './App.css'
import Countries from './components/Countries';

function App() {

  const [countries, setCountries] = useState([]);
  const [isSorted, setIsSorted] = useState(false);
  const url = "https://restcountries.com/v3.1/all";

  async function fetchData() {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();

    setCountries(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const displayedCountries = isSorted
  ? [...countries].sort((a, b) => a.name.common.localeCompare(b.name.common))
  : countries;

  return (
    <div>
      <h1>Countries of the World</h1>
      <div className='wrap'>
        <h2>Filter & Sort</h2>
        <div className='filter_container'>
          <div>
            <input type='checkbox'checked={isSorted} onChange={() => setIsSorted(!isSorted)}/>
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
            <select>
              <option>All</option>
            </select>
          </div>
          <div>
            <p>By subregion</p>
            <select>
              <option>Choose region</option>
            </select>
          </div>
        </div>
      </div>
      <Countries countries={displayedCountries}/>
    </div>
  );
}

export default App

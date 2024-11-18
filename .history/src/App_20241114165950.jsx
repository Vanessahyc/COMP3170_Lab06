import { useEffect, useState } from 'react'
import './App.css'
import Countries from './components/Countries';

function App() {

  const [countries, setCountries] = useState([]);
  const [isSorted, setIsSorted] = useState(false);
  const [topByPopulation, setTopByPopulation] = useState(false);
  const [topByArea, setTopByArea] = useState(false);
  const [selectedContinent, setSelectedContinent] = useState("All");
  const [selectedSubregion, setSelectedSubregion] = useState("All");
  const url = "https://restcountries.com/v3.1/all";

  async function fetchData() {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();

    setCountries(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const uniqueContinents = [...new Set(countries.map(country => country.continents[0]))];
  const uniqueSubregions = [...new Set(countries.map(country => country.subregion).filter(Boolean))];


  let displayedCountries = [...countries];


  if (isSorted) {
    displayedCountries = displayedCountries.sort((a, b) => 
      a.name.common.localeCompare(b.name.common)
    );
  }

  if (topByPopulation) {
    displayedCountries = displayedCountries
      .sort((a, b) => b.population - a.population)
      .slice(0, 10); // Top 10 by population
  } else if (topByArea) {
    displayedCountries = displayedCountries
      .sort((a, b) => b.area - a.area)
      .slice(0, 10); // Top 10 by area
  }

  if (selectedContinent !== "All") {
    displayedCountries = displayedCountries.filter(country => country.continents[0] === selectedContinent);
  }

  if (selectedSubregion !== "All") {
    displayedCountries = displayedCountries.filter(country => country.subregion === selectedSubregion);
  }

  return (
    <div>
      <h1>Countries of the World</h1>
      <div className='wrap'>
        <h2>Filter & Sort</h2>
        <div className='filter_container'>
          <div>
            <input type='checkbox' checked={isSorted} onChange={() => setIsSorted(!isSorted)}/>
            <label>Alphabetically</label>
          </div>
          <div>
            <p>Top 10</p>
            <br/>
            <input type='checkbox' checked={topByPopulation} onChange={() => {
                setTopByPopulation(!topByPopulation);
                setTopByArea(false); // Disable area sorting when population sorting is active
              }}/>
            <label>by population</label>
            <br/>
            <input type='checkbox' checked={topByArea} 
              onChange={() => {
                setTopByArea(!topByArea);
                setTopByPopulation(false); // Disable population sorting when area sorting is active
              }}/>
            <label>by area</label>
          </div>
          <div>
            <p>By continent</p>
            <br/>
            <select value={selectedContinent} 
              onChange={(e) => setSelectedContinent(e.target.value)}>
              <option value="All">All</option>
              {
                uniqueContinents.map(continent => (
                  <option key={continent} value={continent}>{continent}</option>
                ))
              }
            </select>
          </div>
          <div>
            <p>By subregion</p>
            <select value={selectedSubregion} onChange={(e) => selectedSubregion(e.target.value)}>
              <option>Choose region</option>
              {
                uniqueSubregions.map(subregion => (
                  <option key={subregion} value={subregion}>{subregion}</option>
                ))
              }
            </select>
          </div>
        </div>
      </div>
      <Countries countries={displayedCountries}/>
    </div>
  );
}

export default App

import { useEffect, useState } from 'react'
import './App.css'
import Countries from './components/Countries';

function App() {

  const [countries, setCountries] = useState([]);
  const url = "https://restcountries.com/v3.1/all";

  // useEffect(() => {
  //   fetch('https://restcountries.com/v3.1/all')
  //     .then(response => response.json())
  //     .then(data => {
  //       setCountries(data);
  //     })
  //     .catch(error => console.error('Error fetching countries', error));
  // }, []);

  async function fetchData() {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();

    setCountries(data);
  }

  return (
    <div>
      <h1>Countries of the World</h1>
      <Countries countries={fetchData}/>
    </div>
  );
}

export default App

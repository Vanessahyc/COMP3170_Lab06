import { useEffect, useState } from 'react'
import './App.css'
import Countries from './components/Countries';

function App() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        setCountries(data);
      })
      .catch(error => console.error('Error fetching countries', error));
  }, []);

  return (
    <div>
      <h1>Countries of the World</h1>
      <Countries countries={countries}/>
    </div>
  );
}

export default App

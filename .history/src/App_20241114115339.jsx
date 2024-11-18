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

  async function fetchData(url) {
    let response, data;

    try {
      response = await fetch(url);
      data = await response.json();
      

    } catch(e) {
      console.error(e.message);
    }
  }

  function handleFetch(e) {
    e.preventDefault();
    fetchData(url);
  }


  return (
    <div>
      <h1>Countries of the World</h1>
      <button onClick={handleFetch}></button>
      <Countries countries={countries}/>
    </div>
  );
}

export default App

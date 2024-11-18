import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
  })

  return (
    <>
      start here!
    </>
  )
}

export default App

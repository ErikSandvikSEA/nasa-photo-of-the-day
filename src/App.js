import React, { useState, useEffect } from "react";
import axios from 'axios'
import APODImage from './components/APODImage'
import Footer from './components/Footer'
import "./App.css";

const userAPIKey = 'QfI7Bijw7eKPRWJrrF8l6BArJjKy5DlDNQpkZDFz'
const apodUrl = 'https://api.nasa.gov/planetary/apod'


function App() {
  const [nasaData, setNasaData] = useState(null)
  


  useEffect(() => {
    axios.get(`${apodUrl}?api_key=${userAPIKey}`)
  .then( response => {
    console.log('working')
    console.log(response.data)
    setNasaData(response.data)
  })
  .catch(err => {
    console.log('error')
  })
  }  , []
)

 

  return (
    <div className="App">
      <header>
        {/* header info */}
      </header>

      <section className="body">
        <h2></h2>
      {
        nasaData && <APODImage imageUrl={nasaData.url}/>
      }
        <div className='component component2'>
        {/* explanation */}
        </div>
      </section>

      <footer>
        {
          nasaData && <Footer copyright={nasaData.copyright} date={nasaData.date} hdUrl={nasaData.hdurl}/>
        }
      </footer>
    
    </div>
  );
}

export default App;

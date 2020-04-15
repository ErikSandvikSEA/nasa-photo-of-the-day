import React, { useState, useEffect } from "react";
import axios from 'axios'
import Header from './components/Header'
import APODImage from './components/APODImage'
import Explanation from './components/Explanation'
import Footer from './components/Footer'

import "./App.css";

const userAPIKey = 'QfI7Bijw7eKPRWJrrF8l6BArJjKy5DlDNQpkZDFz'
const apodUrl = 'https://api.nasa.gov/planetary/apod'

const App = () => {
  const [nasaData, setNasaData] = useState(null)

  
  useEffect(() => {
    axios.get(`${apodUrl}?api_key=${userAPIKey}`)
      .then(response => {
        console.log('working')
        console.log(response.data)
        setNasaData(response.data)
      })
      .catch(err => {
        console.log('error')
      })
  }, []
  )


  return (
    <div className="App">
      <header>
        {/* header info */}
        {
          nasaData && <Header imageTitle={nasaData.title} />
        }
      </header>

      <section className="body">
        {
          nasaData && <APODImage imageUrl={nasaData.url} />
        }
        {
          nasaData && <Explanation imageExplanation={nasaData.explanation} />
        }
      </section>

      <footer>
        {
          nasaData && <Footer copyright={nasaData.copyright} date={nasaData.date} hdUrl={nasaData.hdurl} />
        }
      </footer>

    </div >
  );
}

export default App;
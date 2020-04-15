import React, { useState, useEffect } from "react";
import axios from 'axios'
import Header from './components/Header'
import APODImage from './components/APODImage'
import Explanation from './components/Explanation'
import Footer from './components/Footer'
import USAMap from "react-usa-map";

import "./App.css";

const userAPIKey = 'QfI7Bijw7eKPRWJrrF8l6BArJjKy5DlDNQpkZDFz'
const apodUrl = 'https://api.nasa.gov/planetary/apod'


const DateSelect = ({ date }) => {
  const [desiredDate, setDesiredDate] = useState(null)

  useEffect(() => {
    console.log('this runs when we change the date')
    axios.get(`${apodUrl}?api_key=${userAPIKey}`)
      .then(res => {
        setDesiredDate(res.data)
      })
      .catch(err => {
        console.log('error')
      })
  }, [date]
  )
  if (!date) {
    return null
  }
  return (
    <div>
      <input type="date" value='2019-06-06' />
    </div>
  )
}


const App = () => {
  const [nasaData, setNasaData] = useState(null)
  const [currentDate, setCurrentDate] = useState(`2020-04-15`)


  useEffect(() => {
    
    axios.get(`${apodUrl}?api_key=${userAPIKey}&date=${currentDate}`)
      .then(response => {
        console.log('working')
        console.log(response.data)
        setNasaData(response.data)
      })
      .catch(err => {
        console.log('error')
      })
  }, [currentDate]
  )

  // const submitHandler = (e) => {
   
  //   console.log(e)
  //   e.preventDefault()
  // }
  const mapHandler = (event) => {
    alert(event.target.dataset.name);
  };


  return (
    <div className="App">
      <div>
      <form action="/action_page.php">
        Date: <input type="date" onInput={(e) => {
        e.persist()
        console.log(e)
          e.preventDefault()
         return setCurrentDate(`${e.target.value}`)
      }}/>
      </form>
      </div>
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
          {/* <div>
            <USAMap onClick={mapHandler}
           />
          </div> */}

    </div >
  );
}

export default App;
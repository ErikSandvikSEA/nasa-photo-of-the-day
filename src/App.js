import React, { useState, useEffect } from "react";
import axios from 'axios'
import Header from './components/Header'
import APODImage from './components/APODImage'
import APODImageWrapper from './components/APODImageWrapper'
import Explanation from './components/Explanation'
import Footer from './components/Footer'
import styled from 'styled-components'
import Container from './components/Container'
import Form from './components/Form'
import FooterSpan from './components/FooterSpan'
import USAMap from "react-usa-map";
import HeaderWrapper from './components/HeaderWrapper'

import "./App.css";

const userAPIKey = 'QfI7Bijw7eKPRWJrrF8l6BArJjKy5DlDNQpkZDFz'
const apodUrl = 'https://api.nasa.gov/planetary/apod'


const App = () => {
  const [nasaData, setNasaData] = useState(null) // (nasaData)
  const [currentDate, setCurrentDate] = useState(`1995-06-16`) 


  useEffect(() => {
    
    axios.get(`${apodUrl}?api_key=${userAPIKey}&date=${currentDate}`)
      .then(response => {
        // console.log('working')
        // console.log(response.data)
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
  // const mapHandler = (event) => {
  //   event.persist()
  //   console.log(event)
  //   // alert(event.target.dataset.name);
  // };


  return (
    <Container className="App">
     <Form backgroundColor='turquoise' borderRadius='10px'>&nbsp;
          Date: <input type="date" onInput={(e) => {
          // e.persist()
          // console.log(e)
            // e.preventDefault()
          return setCurrentDate(`${e.target.value}`) //2020-04-15
          }}/>
      </Form>
      <HeaderWrapper  font="verdana">
          <header>
            {/* header info */}
            {
              nasaData && <Header imageTitle={nasaData.title} />
            }
          </header>
        </HeaderWrapper>

          <section className="body">
            <APODImageWrapper borderColor='#AFEEEE'>
            {
              nasaData && <APODImage imageUrl={nasaData.url} />
            }
            </APODImageWrapper>
            <FooterSpan backgroundColor='#AFEEFE'>
            {
              nasaData && <Explanation imageExplanation={nasaData.explanation}/>
            }
            </FooterSpan>
          </section>

          <footer>
            <FooterSpan backgroundColor='#AFEEEE'>
            {
              nasaData && <Footer copyright={nasaData.copyright} date={nasaData.date} hdUrl={nasaData.hdurl} />
            }
            </FooterSpan>
          </footer>
          {/* <div>
            <USAMap onClick={mapHandler}
           />
          </div> */}

    </Container >
  );
}

export default App;
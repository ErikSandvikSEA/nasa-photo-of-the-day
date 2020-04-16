import React, { useState, useEffect } from "react";
import styled from 'styled-components'


const StyledExplanation = styled.p`
font-family: calibri;
font-weight: bold;
color: white;
text-align: left;
`


const Explanation = ({ imageExplanation }) => {
     return (
          <div className='explanation'>
               <StyledExplanation>{imageExplanation}</StyledExplanation>
          </div>
     )
}

export default Explanation
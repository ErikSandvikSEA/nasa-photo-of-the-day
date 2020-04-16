import React, { useState, useEffect } from "react";
import styled from 'styled-components'

const Explanation = ({ imageExplanation }) => {
     return (
          <div className='explanation'>
               <p>{imageExplanation}</p>
          </div>
     )
}

export default Explanation
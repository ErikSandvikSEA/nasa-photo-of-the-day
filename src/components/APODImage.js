import React from "react";
import styled from 'styled-components'


const StyledAPODImage = styled.div`
`




const APODImage = ( { imageUrl, borderRadius } ) => {
     return (
          <StyledAPODImage className='component1'>
               <img src={imageUrl}/>
          </StyledAPODImage>  
     )
}

export default APODImage
import React, { useState, useEffect } from "react";
import axios from 'axios'


const APODImage = ( { imageUrl } ) => {
     return (
          <div className='component1'>
               <img src={imageUrl}/>
          </div>  
     )
}

export default APODImage
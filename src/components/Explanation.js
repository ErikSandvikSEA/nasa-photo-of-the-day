import React, { useState, useEffect } from "react";

const Explanation = ({ imageExplanation }) => {
     return (
          <div className='explanation'>
               <p>{imageExplanation}</p>
          </div>
     )
}

export default Explanation
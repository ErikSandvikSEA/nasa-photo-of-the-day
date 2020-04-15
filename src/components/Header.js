import React, { useState, useEffect } from "react";

const Header = ({ imageTitle }) => {
     return (
          <div className='header-info'>
               <h1>{imageTitle}</h1>
          </div>
     )
}

export default Header
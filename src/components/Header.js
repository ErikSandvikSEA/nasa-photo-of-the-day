import React, { useState, useEffect } from "react";
import styled from 'styled-components'

const Header = ({ imageTitle }) => {
     return (
          <div className='header-info'>
               <h1>{imageTitle}</h1>
          </div>
     )
}

export default Header
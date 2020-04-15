import React from "react";

const Footer = ({ copyright, date, hdUrl }) => {
     return (
          <div className='footer-info'>
               <p>Copyright: {copyright}</p>
               <p>Date: {date}</p>
               <p>For Hi-Res Photo, visit <a href={hdUrl} target="_blank">{hdUrl}</a></p>
          </div>
     )
}

export default Footer
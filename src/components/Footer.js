import React from "react";
import styled from 'styled-components'

const StyledFooter = styled.footer`
     font-family: calibri;
     color: ${props => props.danger ? 'darkblue' : 'inherit'};
     font-size: ${props => props.fontSize ? '5em' : 'inherit'};
     font-style: italic
`



const Footer = ({ copyright, date, hdUrl, danger, fontSize }) => {
     return (
          <StyledFooter danger={danger} fontSize={fontSize}>
               <p>Copyright: {copyright}</p>
               <p>Date: {date}</p>
               <p>For Hi-Res Photo, visit <a href={hdUrl} target="_blank">{hdUrl}</a></p>
          </StyledFooter>
     )
}

export default Footer
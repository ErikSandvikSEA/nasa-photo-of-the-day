import styled from 'styled-components'

const FooterSpan = styled.div`
display: flex;
flex-direction: column;
align-items: center;
  border: 1px solid rgb(210, 210, 210);
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  max-width: 1000px;
 
  margin: 8px;
  padding: 20px;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : 'inherit'};
  color: ${props => props.fontColor ? props.fontColor : 'inherit'}
  border: 1px;
  border-radius: 10px;


  a {
    color: white;
    font-weight: normal;

    &:hover {
      color: red;
      transition: all 1s ease-in-out;
    }
  }

`

export default FooterSpan
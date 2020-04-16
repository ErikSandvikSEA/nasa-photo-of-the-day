import styled from 'styled-components'

const HeaderWrapper = styled.div`
  border: 1px solid rgb(210, 210, 210);
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
 
  margin: 8px;
  padding: 12px 30px;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : 'inherit'};
  border-radius: ${props => props.borderRadius ? props.borderRadius : 'inherit'};
  font-family: ${props => props.font ? props.font : 'inherit'};

  a {
    color: green;

    &:hover {
      color: red;
      transition: all 1s ease-in-out;
    }
  }

`

export default HeaderWrapper
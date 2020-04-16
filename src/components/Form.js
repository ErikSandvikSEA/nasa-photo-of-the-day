import styled from 'styled-components'

const Form = styled.div`
  border: 1px solid rgb(210, 210, 210);
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
 
  margin: 8px;
  padding: 12px;
  background-color: white;

  a {
    color: green;

    &:hover {
      color: red;
      transition: all 1s ease-in-out;
    }
  }

`

export default Form
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
  border: 1px solid rgb(210, 210, 210);
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  max-width: 1000px;
 
  margin: 8px;
  padding: 20px;
  background-color: white;

  a {
    color: green;

    &:hover {
      color: red;
      transition: all 0.5s ease-in-out;
    }
  }

`

export default Container
import styled from 'styled-components'

const Form = styled.div`
  border: 1px solid rgb(210, 210, 210);
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
 
  margin: 8px;
  padding: 12px;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : 'inherit'};
  border-radius: ${props => props.borderRadius ? props.borderRadius : 'inherit'};

  a {
    color: green;

    &:hover {
      color: red;
      transition: all 1s ease-in-out;
    }
  }
  color: ${props => props.textColor ? props.textColor : 'inherit'};

size: ${props => props.size ? props.size  + 'px' : 'inherit'};


&:before {
     content: '🚀';
};
`

export default Form
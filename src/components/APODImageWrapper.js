import styled from 'styled-components'


const APODImageWrapper = styled.div`
box-shadow: 0px 10px 10px -2px rgb(128, 127, 127);
display: flex;
justify-content: center;
border: 8px solid ${props => props.borderColor ? props.borderColor : 'inherit'};
border-radius: 10px;

margin: 3%;
APODImage {
     box-sizing: border-box;
};
`

export default APODImageWrapper
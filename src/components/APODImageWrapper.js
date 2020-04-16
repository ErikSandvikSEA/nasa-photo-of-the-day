import styled from 'styled-components'


const APODImageWrapper = styled.div`
box-shadow: 5px 5px 11px 2px rgb(188, 127, 127);
display: flex;
justify-content: center;
border: 3px solid ${props => props.borderColor ? props.borderColor : 'inherit'};

margin: 3%;


APODImage {
     box-sizing: border-box;
};
`

export default APODImageWrapper
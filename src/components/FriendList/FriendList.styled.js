import styled from "styled-components";

export const SpanStyled = styled.span`
background-color: ${(props) =>
        props.isOnline === true ? 'green' : 'red'
};
height: 16px;
width: 16px;
border-radius: 50%;
display: inline-block;
`
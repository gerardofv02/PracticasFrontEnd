import styled from "styled-components";

export const Caracteres = styled.div`

display: grid;
    grid-template-columns: repeat(4, 1fr);
    border: 3px solid black;
    text-align: center;
    align-items: center;
    margin-top: 2rem;
    background-color: beige;
    width: 80%;
    height: 80%;

`

export const Caracter = styled.div`
    display : flex;
    align-items: center;
    justify-content: center ;
    border: 1px solid black;
    flex-direction: column;

`



import styled from "styled-components";

export const Formulario = styled.div`

display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(1, auto);
    background-color: black;
    width: 80%;
    height: 80%;
    border: 2px solid black;


`

export const Primero = styled.div`
    display : grid;
    grid-column: 1 / 2;
    grid-auto-rows: minmax(1, auto);
    border: 2px solid black;
    text-align: center;
    background-color: red;


`
export const Segundo = styled.div`
    display : grid;
    grid-column: 2 / 3;
    grid-auto-rows: minmax(1, auto);
    border: 2px solid black;
    text-align: center;
    background-color: red;

`
export const Eliminar = styled.div`
    display: grid;
    grid-column: 3/3;
    grid-auto-rows: minmax(1, auto);
    border: 2px solid black;
    text-align: center;
    background-color: red;
`
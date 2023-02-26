import { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-grid-system";

const Tabla = () =>{
    return(
<>  
   <Container>
        <Row>
             <Col>
            <span>Nombre</span>
             </Col>
             <Col>
                <span>DNI</span>
             </Col>
        </Row>
   </Container>

   <footer>
   Introduce nombre : <input type="string"/> <br/>
   Introduce DNI : <input type="string"/> <br/>

   </footer>
            
        
</>
    )
};

export default Tabla; 
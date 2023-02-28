import { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-grid-system";

const Tabla = () =>{
    return(
<>  
<form>
   Introduce nombre : <input type="string" className="nombre"/> <br/>
   Introduce DNI : <input type="string" className="dni"/> <br/>
   <button >Añadir</button>
   </form>
    <div className="contenedor">
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
   </div>



            
        
</>
    )
};

export default Tabla; 
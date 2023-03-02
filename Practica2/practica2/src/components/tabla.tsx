import { Eliminar, Formulario, Primero, Segundo } from "@/styles/styledComponents";
import { useState } from "react";
const dnis : string[] = [];
const nombres: string[] = [];
const Tabla = () =>{
    const[nombre , setNombre] = useState<string>("")
    const[dni, setDni] = useState<string>("")
    /*
    type fila = {
        nombre: string,
        dni: string,
    };
    */

    function addComponent(){
        /*let fila : fila;
        fila = {
            nombre : nombre,
            dni : dni
        }
        filas.push(fila);
        setFila(filas);
        console.log(fila);
        console.log(filas);
        console.log(filaa);
        return(
            <Formulario><Primero>Value: {fila.nombre}</Primero><Segundo>Value: {fila.dni}</Segundo></Formulario>
        );
        */
       dnis.push(dni);
       console.log(dnis);

       nombres.push(nombre);
            console.log(nombres);

    
    }

    
    return (
        <div >
        
           Introduce nombre : <input type="string" onChange={(e) => setNombre(e.target.value)}/> <br/>
           Introduce DNI : <input type="string" onChange={(e) => setDni(e.target.value)}/> <br/>
           <button onClick={addComponent}>Añadir</button> <br/>


        
        <Formulario>
            <Primero>Nombre</Primero>
            <Segundo>DNI</Segundo>
            <Eliminar>Eliminar</Eliminar>
           {nombres.map((item, index) => (
                <Primero  key={index}>{item}</Primero>
            ))}
            {dnis.map((item, index) => (
                <Segundo  key={index}>{item}</Segundo>
            ))}
        </Formulario>

        </div>
    



    )






/*
    
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
    */
};

export default Tabla; 
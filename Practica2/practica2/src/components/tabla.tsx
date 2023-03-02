import { Eliminar, Formulario, Primero, Segundo } from "@/styles/styledComponents";
import { useState } from "react";


const Tabla = () =>{
    const[nombre , setNombre] = useState<string>("")
    const[dni, setDni] = useState<string>("")
    
    type fila = {
        nombre: string,
        dni: string,
    };

    const[nombres, setNombres] = useState<string[]>([])
    const[dnis, setDnis] = useState<string[]>([])
    

    function addComponent(){
        nombres.push(nombre);
       setNombres(nombres);
        dnis.push(dni);
        setDnis(dnis);

        console.log(nombres,dnis);
                

    
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
            <Primero>{nombres}</Primero>
            <Segundo>{dnis}</Segundo>
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
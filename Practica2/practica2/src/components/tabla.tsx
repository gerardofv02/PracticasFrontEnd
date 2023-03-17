import {  Formulario, Arriba, Abajo } from "@/styles/styledComponents";
import { useState } from "react";
import Image from 'next/image';
type fila = {
    nombre: string,
    dni: string,
}
let probe = /^[0-9]{8}[A-Z]$/;
type InputProps = {
    error?: string
}
const Tabla = () =>{
    const[nombre , setNombre] = useState<string>("")
    const[dni, setDni] = useState<string>("")

    const[filaa,setFila] = useState<fila[]>([])
    

    function addComponent(){
        if(probe.test(dni)){
        setFila([...filaa,{
            nombre:nombre,
            dni:dni,
        }])
        setNombre("");
        setDni("");
        console.log(filaa);
    }
    else{
        window.alert("Dni in correcta forma");
    }
                

    
    }
    function eliminar(index : number){
        const filas = filaa.filter((element,i) => i !== index);
        setFila(filas);
        console.log(filas);

    }


    
    return (
        <div >
        
           Introduce nombre : <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}/> <br/>
           Introduce DNI : <input type="text" value={dni} onChange={(e) => setDni(e.target.value)}/> <br/>
           <button  onClick={addComponent}>Añadir</button> <br/>


        
        <Formulario>
            <Arriba>Nombre</Arriba>
            <Arriba>DNI</Arriba>
            <Arriba>Eliminar</Arriba>
            
                {filaa.map((element,index) => (
                    <>
                    <Abajo>{element.nombre}</Abajo>
                    <Abajo>{element.dni}</Abajo>
                    <button onClick={ () => eliminar(index)}><Image src="/papelera.webp"  alt="una foto" width="40" height="40"/></button>
                    </>
                    )
                )}
                
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
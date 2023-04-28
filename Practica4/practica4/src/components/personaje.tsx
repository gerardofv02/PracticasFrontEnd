import { gql ,useQuery} from "@apollo/client";
import getClient from "../libs/client";
import React, {FC, useEffect, useState} from "react";
import Link from "next/link";
import { Caracteres , Caracter} from "@/styles/styledComponents";
import Image from "next/image";
export type characterprops= {
  name: string,
  image: string, 
  id: string
}

const Character = () => {
  const query = gql`
  query characters($page : Int!, $name: String){
    characters(page:$page, filter: {name:$name}){
    results{
      name,
      image,
      id
    }
  }
  
}
  
  `
  
  const [buscar, setBuscar] = useState<string>("");
   var [page, setPage] = useState<number>(1);
  const {loading,error,data,refetch} =  useQuery<{
    characters: {
      results: {
        name: string,
        image: string,
        id: string
      }[]
    }
  }>(
    query,{
    variables: {
      page
    }
  }
  );

  useEffect(() => {
      refetch({
        name:buscar
      })
  }, [buscar])

  if(loading) return <div>Loading...</div>
  if(error) return <div>Error</div>
  return(
    <>
            <input type="text" onChange={(e) =>setBuscar(e.target.value)}></input>
       <button onClick={() => {
                              if(page >=42){
                                  window.alert("No hay mas pags");
                                  page--;
                              }else {
                                setPage(page+1)
                                }
                              }
                        }> Pag Siguiente</button>
      <button onClick={() => {
                              if(page <= 1){
                              window.alert("No hay menos pags");
                              }
                              else{
                                  setPage(page-1)
                                  }
                            }
                      }> Pag Anterior</button>
    <Caracteres>
       {data!.characters.results.map((character : characterprops) => {return <Caracter> 
        <Link href={`/character/${character.id}`}>{character.name}</Link>
         <Image alt="una foto" width="80" height="80" src={character.image}/>
       
       </Caracter>}) }
    </Caracteres>
    </>
  )
}

export default Character;



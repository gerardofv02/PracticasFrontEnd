import { gql ,useQuery} from "@apollo/client";
import getClient from "../libs/client";
import React, {FC, useEffect, useState} from "react";
import Link from "next/link";
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
  const [page, setPage] = useState<number>(1);
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
    <div>
       {data!.characters.results.map((character : characterprops) => {return <div> 
        <Link href={`/character/${character.id}`}>{character.name}</Link>
         <img alt="una foto" width="40px" height="40px" src={character.image}/>
       
       </div>}) }
        <input type="text" onChange={(e) =>setBuscar(e.target.value)}></input>
       <button onClick={() => setPage(page+1)}> Pag Siguiente</button>
      <button onClick={() => setPage(page-1)}> Pag Anterior</button>
    </div>
  )
}

export default Character;
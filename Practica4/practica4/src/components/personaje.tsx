import { gql ,useQuery} from "@apollo/client";
import getClient from "../libs/client";
import React, {FC, useEffect, useState} from "react";


const Character = () => {
  const query = gql`
  query characters($page : Int!){
    characters(page:$page){
    results{
      name
    }
  }
  
}

  
  
  `
  const [page, setPage] = useState<number>(1);
  const {loading,error,data} = useQuery<{

  }>(
    query,{
    variables: {
      page
    }
  }
  );





  if(loading) return <div>Loading...</div>
  if(error) return <div>Error</div>
  return(
    <div>
       {data!.characters.results.map((character : any) => {return <div> Character : {character.name}</div>}) }
       <button onClick={() => setPage(page+1)}> Pag Siguiente</button>
       <button onClick={() => setPage(page-1)}> Pag Anterior</button>
    </div>
  )
}

export default Character;
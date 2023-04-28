import { gql ,useQuery} from "@apollo/client";
import React, {FC, useEffect, useState} from "react";
import Link from "next/link";
import  { characterprops } from "@/components/personaje";

type episode = {
    id: string,
    name: string,
    created: string,
    characters: {
        name: string,
        id: string,
        image:string

    }[]
}
const Episode: FC<{id: string}>= ({id}) => {

  const query = gql`
  query episode($id: ID!){
    episode(id:$id){
        id,
        name,
        characters{
            name,
            id
        },
        created
        


    }
  
}
  
  `
  
  const {loading,error,data,refetch} =  useQuery<{
    episode:  episode,
  }>(
    query,{
    variables: {
      id
    }
  }
  );




  if(loading) return <div>Loading...</div>
  if(error) return <div>Error</div>
  return(
    <div>
       <div>Episodio id: {data!.episode.id}</div>
       <div>Episodio name: {data!.episode.name}</div>
       <div>Episodio created: {data!.episode.created}</div>
       <div>Episodio characters: {data!.episode.characters.map((character : characterprops) => {return <><br/><Link href={`/character/${character.id}`}>{character.name}</Link></>})}</div>

    </div>
  )
}

export default Episode;
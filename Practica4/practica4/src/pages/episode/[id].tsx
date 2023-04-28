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
const Episode = (context: any) => {
    const {id} = context.query;
  const query = gql`
  query {
    episode(id:${id}){
        id,
        name,
        dimension,
        residents{
            name,
            id
        }
        


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
       <div>Episodio id: {data?.episode.id}</div>
       <div>Episodio name: {data?.episode.name}</div>
       <div>Episodio created: {data?.episode.created}</div>
       <div>Episodio characters: {data?.episode.characters.map((character : characterprops) => {return <><br/><Link href={`/character/${character.id}`}>{character.name}</Link></>})}</div>

    </div>
  )
}

export default Episode;
import { GetServerSideProps, NextPage } from "next";
import  getClient  from "@/libs/client";

import {gql }from "@apollo/client";
import Link from "next/link";
type location = {
    location: {
    id: string, 
    name: string,
    dimension: string,
    residents: {
        name: string,
        id: string
    }[]
}
}
export const getServerSideProps:GetServerSideProps = async (context) => {

  const {id} = context.query;
  const query = gql`
  query{
    location(id:${id}){
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

  const client = getClient();
  const {data} = await client.query<{
    location: location,
    
  }>({
    query,
    variables:{
      id,
    }
  });

  return {
    props:{
      location: data.location,
    }
  }

}

const Page : NextPage<location>=(props) => {
    return <div>
        <div>Location name: {props.location.name}</div>
        <div>Location dimension: {props.location.dimension}</div>
        <div>Location residents: {props.location.residents.map(resident => {return <> <br/><Link href={`/character/${resident.id}`}>{resident.name}</Link></>})}</div>
    </div>

}

export default Page;

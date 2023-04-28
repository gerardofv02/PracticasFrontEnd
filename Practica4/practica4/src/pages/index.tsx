import { GetServerSideProps } from "next";
import  getClient  from "../libs/client";


import {gql }from "@apollo/client";
import Link from "next/link";


export default function Home(props: {name: string}){
  return(
    <>
      <Link href="/characters">Personajes</Link>
    </>
  )
}
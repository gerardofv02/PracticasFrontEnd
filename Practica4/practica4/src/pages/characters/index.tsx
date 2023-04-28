import { GetServerSideProps, NextPage } from "next";
import  getClient  from "@/libs/client";
import Character from "@/components/personaje";

import {gql }from "@apollo/client";

const Page = () => {
  return (
    <>
      <Character />
    </>
  )
}

export default Page;
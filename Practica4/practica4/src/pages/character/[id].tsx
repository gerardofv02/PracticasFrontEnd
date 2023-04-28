import getClient from "@/libs/client";
import { gql } from "@apollo/client";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
type Props = {
    character:{
    id: number,
    name: string,
    location: {
      id: string,
      name: string
    },
    gender: string,
    episode: {
      id: string,
      name: string
    }[]


    }
}

export const getStaticPaths : GetStaticPaths= async () => {
    const client = getClient();
    const {data}  = await client.query({
        query: gql`
          query {
            characters {
              results {
                id
              }
            }
          }
        `,
      });
      const paths = data.characters.results.map((character: any) => {return {params : {id: character.id}}})
    return{
        paths : paths,
        fallback: false,
    }
}

export const getStaticProps : GetStaticProps= async (context) => {
    const client = getClient();
    const id = context?.params?.id;
    const { data } = await client.query({
      query: gql`
        query  {
          character(id: ${id}) {
            id,
            name,
            image,
            location{
              id,
              name
            },
            gender,
            episode{
              id,
              name
            }


          }
        }
      `,
      variables: {
        id: context.params?.id,
      },
    })
    return{props: {
        character: data.character
    }}
}

const Character: NextPage<Props> =(props) => {
    return <div>
        <div>Character id: {props.character.id}</div>
        <div>Character name: {props.character.name}</div>
        <div >Character location: <Link href={`/location/${props.character.location.id}`}>{props.character.location.name}</Link></div>
        <div>Character gender: {props.character.gender}</div>
        <div>Character episodes: {props.character.episode.map((episode) => {return <><br/><Link href={`/episode/${episode.id}`}>{episode.name}</Link> </>})}</div>
        </div>
};

export default Character;
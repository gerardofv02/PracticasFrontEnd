import getClient from "@/libs/client";
import { gql } from "@apollo/client";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

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
    }[],
    image: string


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
              info{
                count,
                pages,
                next,
                prev
              }
            }
          }
        `,
      });
      const page = 1;
      console.log(data);
      console.log(data.characters.info.count);
      const paths =  [];

        for(let i = 1; i <= parseInt(data.characters.info.count);i++){
          paths.push(
            {params: {
              id: i.toString(),
            }}
          )
        }  


      console.log("paths: ",paths);
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
      <Link href="/characters">Ir de vuelta a personajes</Link>
        <div>Character name: {props.character.name}</div>
        <Image alt="una foto" width="80" height="80" src={props.character.image}/>
        <div >Character location: <Link href={`/location/${props.character.location.id}`}>{props.character.location.name}</Link></div>
        <div>Character gender: {props.character.gender}</div>
        <div>Character episodes: {props.character.episode.map((episode) => {return <><br/><Link href={`/episode/${episode.id}`}>{episode.name}</Link> </>})}</div>
        </div>
};

export default Character;
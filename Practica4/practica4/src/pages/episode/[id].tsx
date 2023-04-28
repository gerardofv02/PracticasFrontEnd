import Episode from "@/components/episodio";
import { GetServerSideProps, NextPage } from "next";


export const getServerSideProps: GetServerSideProps = async(context) => {
    const {id} = context.query;
    return{
        props: {
            id
        }
    }
}
const Episodio : NextPage<{id: string}>= ({id}) => {
    return(
        <Episode id={id}/>
    )
}
export default Episodio;
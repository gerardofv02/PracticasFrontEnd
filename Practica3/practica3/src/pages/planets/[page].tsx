import Link from "next/link";

type ServerSideProps = {
  params: {
    page: string;
  };
};
type Planet = {
  name: string;
  id: string;
};
export async function getServerSideProps(props: ServerSideProps) {
  let planets: Planet[] = [];
  const data = await fetch(
    `https://swapi.dev/api/planets/?page=${props.params.page}`
  );
  const json = await data.json();
  json.results.forEach((planet: any) => {
    let idArr = planet.url.split("/");
    planets.push({ name: planet.name, id: idArr[5] });
  });
  return {
    props: { planets },
  };
}
function NextPage() {
  let page = parseInt(window.location.pathname.split("/")[2]);
  if (page < 6) {
    page = page + 1;
    console.log(page);
    window.location.href = `http://localhost:3000/planets/${page}`;
  } else {
    window.alert("No hay mas paginas adelante");
  }
}
function PreviousPage() {
  let page = parseInt(window.location.pathname.split("/")[2]);
  if (page > 1) {
    page = page - 1;
    console.log(page);
    window.location.href = `http://localhost:3000/planets/${page}`;
  } else {
    window.alert("No hay mas paginas atras");
  }
}
export type PageProps = {
  planets: {
    name: string;
    id: string;
  }[];
};

const Page = (props: PageProps) => {
  if (props.planets.length === 0) {
    return <>Loading data</>;
  }
  return (
    <>
      <div>
        {props.planets.map((planet) => (
          <>
            <Link href={`../planet/${planet.id}`}> {planet.name}</Link> <br />
          </>
        ))}
      </div>
      <button onClick={() => NextPage()}>Página siguiente</button>
      <button onClick={() => PreviousPage()}>Pagina anterior</button>
    </>
  );
};

export default Page;

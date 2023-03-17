import Link from "next/link";
import { useEffect, useState } from "react";
type PlanetSideProps = {
  name: string;
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
  residents: string[];
  films: string[];
  url: string;
  created: string;
  edited: string;
};
const Datos = () => {
  var id = window.location.pathname.split("/")[2];
  const [data, setData] = useState<PlanetSideProps>();
  useEffect(() => {
    const fetchData = async (id: string) => {
      const chars = await fetch(`https://swapi.dev/api/planets/${id}`);
      const json = await chars.json();
      json.residents = await Promise.all(
        json.residents.map(async (url: string) => {
          const data = await fetch(url);
          const json = await data.json();
          return json.name;
        })
      );

      setData(json);
      console.log(json);
    };
    try {
      fetchData(id);
    } catch (e) {
      console.log(e);
    }
  }, []);
  if (!data) {
    return <>Loading data</>;
  } else {
    return (
      <>
        <Link href="/planets/1">Ir a la lista</Link>
        <div>name : {data.name}</div>
        <br />
        <div>diameter : {data.diameter}</div>
        <br />
        <div>rotation_period : {data.rotation_period}</div>
        <br />
        <div>orbital_period : {data.orbital_period}</div>
        <br />
        <div>gravity : {data.gravity}</div>
        <br />
        <div>population : {data.population}</div>
        <br />
        <div>climate : {data.climate}</div>
        <br />
        <div>terrain : {data.terrain}</div>
        <br />
        <div>surface_water : {data.surface_water}</div>
        <br />
        <div>residents : {data.residents}</div>
        <br />
        <div>films : {data.films}</div>
        <br />
        <div>url : {data.url}</div>
        <br />
        <div>created : {data.created}</div>
        <br />
        <div>edited : {data.edited}</div>
        <br />
      </>
    );
  }
};

export default Datos;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { TPokemon } from "./TTypePokemonDetails";

function Pokemon() {
  let params = useParams();
  const [pokemonData, setPokemonData] = useState<TPokemon | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://pokebuildapi.fr/api/v1/pokemon/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  if (pokemonData === null || isLoading) {
    return <h1>Chargement...</h1>;
  }
  return (
    <section className="w-full flex flex-col md:flex-row gap-16 justify-center items-start">
      <div className="md:w-1/3">
        <div className=" flex items-center gap-4">
          <h1 className="text-4xl font-bold mb-4">{pokemonData.name}</h1>
          <img
            className="size-16"
            src={pokemonData.sprite}
            alt={pokemonData.sprite}
          />
        </div>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eaque
          voluptatibus dolorem, voluptatum quisquam nobis incidunt sunt numquam
          deleniti pariatur libero unde, accusantium excepturi eligendi eveniet
          quos nisi autem necessitatibus.
        </p>
        
        <h3 className="text-lg font-bold mt-8 mb-2">Statistiques </h3>
        <ol className=" ">
          <li className="flex justify-between">
            <p> Points de vie </p>
            <p>{pokemonData.stats.HP}</p>
          </li>
          <li className="flex justify-between">
            <p> Attaque </p>
            <p>{pokemonData.stats.attack}</p>
          </li>
          <li className="flex justify-between">
            <p> Défense </p>
            <p>{pokemonData.stats.defense}</p>
          </li>
          <li className="flex justify-between">
            <p> Attaque spécial </p>
            <p>{pokemonData.stats.special_attack}</p>
          </li>
          <li className="flex justify-between">
            <p> Défense spécial </p>
            <p>{pokemonData.stats.special_defense}</p>
          </li>
          <li className="flex justify-between">
            <p> Vitesse </p>
            <p>{pokemonData.stats.speed}</p>
          </li>
        </ol>
      </div>
      <div className="mb-4">
        <img src={pokemonData.image} alt={pokemonData.name} />
      </div>
    </section>
  );
}
export default Pokemon;

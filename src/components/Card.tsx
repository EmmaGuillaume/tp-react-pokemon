import { useState } from "react";
import data from "../assets/data";
import Type from "./TypeCard";
import type { TpokemonCardProps } from "./TCard";
import { typeGradients } from "./TCard";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

type TCardProps = {
  pokemon: TpokemonCardProps;
  pokedexList: TpokemonCardProps[];
  setPokedexList: (pokedexList: TpokemonCardProps[]) => void;
};

function Card(props: TCardProps) {
  const [isFlipped, setIsFlipped] = useState(true);

  return (
    <section className="flex justify-center perspective-1000px relative">
      <div
        className={`backface-hidden  w-full transition-all duration-500 ${isFlipped ? "rotate-y-0" : "rotate-y-90 "}`}
      >
        <button
          onClick={() =>
            props.setPokedexList([...props.pokedexList, props.pokemon])
          }
          className="absolute right-2 top-2 cursor-pointer rounded-full z-40 px-2 py-1 bg-blue-900 text-lg size-8"
        >
          <p className="-ml-0.5">
            <ShoppingCart className="size-4.5" />
          </p>
        </button>
        <figure
          className="rounded-2xl overflow-hidden outline-8 w-96 h-[550px]  cursor-pointer  "
          onClick={() => {
            setIsFlipped(!isFlipped);
          }}
          style={{
            backgroundColor: typeGradients.find(
              (type) => type.name === props.pokemon.apiTypes[0].name,
            )?.background,
            outlineColor: typeGradients.find(
              (type) => type.name === props.pokemon.apiTypes[0].name,
            )?.outline,
          }}
        >
          <div>
            <picture className="">
              <img
                className="size-80"
                src={props.pokemon.image}
                alt={`Image ${props.pokemon.name}`}
              />
            </picture>
            <figcaption
              className=" px-4 pb-8 pt-4 flex flex-col gap-2 relative"
              style={{
                backgroundColor: typeGradients.find(
                  (type) => type.name === props.pokemon.apiTypes[0].name,
                )?.backgroundSecondary,
              }}
            >
              <span className="flex gap-1 w-fit bg-neutral-100 px-2 py-1 rounded-full absolute -top-12 left-4">
                {props.pokemon.apiTypes.map((type, index) => (
                  <Type index={index} name={type.name} image={type.image} />
                ))}
              </span>
              <h2 className="text-black text-2xl font-bold">
                {props.pokemon.name}
              </h2>
              <ol className="text-black px-8">
                <li className="flex justify-between">
                  <p> Points de vie </p>
                  <p>{props.pokemon.stats.HP}</p>
                </li>
                <li className="flex justify-between">
                  <p> Attaque </p>
                  <p>{props.pokemon.stats.attack}</p>
                </li>
                <li className="flex justify-between">
                  <p> Défense </p>
                  <p>{props.pokemon.stats.defense}</p>
                </li>
                <li className="flex justify-between">
                  <p> Attaque spécial </p>
                  <p>{props.pokemon.stats.special_attack}</p>
                </li>
                <li className="flex justify-between">
                  <p> Défense spécial </p>
                  <p>{props.pokemon.stats.special_defense}</p>
                </li>
                <li className="flex justify-between">
                  <p> Vitesse </p>
                  <p>{props.pokemon.stats.speed}</p>
                </li>
              </ol>
            </figcaption>
          </div>
        </figure>
      </div>

      {/* BACKCARD */}

      <div
        className={` absolute backface-hidden w-full h-full transition-all duration-500 ${isFlipped ? "rotate-y-180" : "rotate-y-0 "}`}
      >
        <figure
          onClick={() => {
            setIsFlipped(!isFlipped);
          }}
          className="rounded-2xl relative overflow-hidden outline-8 w-96 cursor-pointer h-[550px] transition-all duration-500 transform-3d group-hover:transform-[rotateY(180deg)]"
          style={{
            backgroundColor: typeGradients.find(
              (type) => type.name === props.pokemon.apiTypes[0].name,
            )?.background,
            outlineColor: typeGradients.find(
              (type) => type.name === props.pokemon.apiTypes[0].name,
            )?.outline,
          }}
        >
          <div className="absolute flex w-full h-full justify-center items-center top-0 left-0">
            <Link
              to={`/pokemon/${props.pokemon.pokedexId}`}
              className="cursor-pointer bg-blue-900 text-white! px-4 py-2 rounded-md"
            >
              Voir plus
            </Link>
          </div>
          <picture className="">
            <img
              className="h-full"
              src="/pokemonBack.png"
              alt={`Image ${props.pokemon.name}`}
            />
          </picture>
        </figure>
      </div>
    </section>
  );
}
export default Card;

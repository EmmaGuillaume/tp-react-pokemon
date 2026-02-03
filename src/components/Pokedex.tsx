import { useState } from "react";
import type { TpokemonCardProps } from "./TCard";

type TPokedex = {
  pokemon: TpokemonCardProps;
  numberOfPokemon: number;
};

type TPokedexProps = {
  pokedexList: TpokemonCardProps[];
  setPokedexList: (pokedexList: TpokemonCardProps[]) => void;
  pokedex: TPokedex[];
  setPokedex: (pokedex: TPokedex[]) => void;
};

function Pokedex(props: TPokedexProps) {
  const [isOpen, setIsOpen] = useState(false);
  if (isOpen) {
    return (
      <div className="fixed top-8 left-0 z-40 w-72 bg-red-600 p-2 rounded-r-md h-full ">
        <div className="flex w-full justify-between mb-4">
          <img className="size-6" src="/pokeball.png" alt="" />
          <p className="font-bold">Pokédex</p>

          <button
            className="cursor-pointer px-2"
            onClick={() => setIsOpen(false)}
          >
            X
          </button>
        </div>

        <div>
          {props.pokedex.length === 0 ? (
            <p className="text-white">Your Pokedex is empty</p>
          ) : (
            <div>
              <p className="text-white">
                {props.pokedex.length} Pokémon in your Pokedex
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                {props.pokedex.map((pokemon, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-2 items-center mb-2 py-2 px-4 bg-red-500 rounded-md"
                  >
                    <img
                      className="size-12"
                      src={pokemon.pokemon.image}
                      alt={pokemon.pokemon.name}
                    />
                    <p className="text-white font-semibold text-sm">
                      {pokemon.pokemon.name}
                    </p>
                    <div className="flex bg-red-200 text-black text-sm rounded-sm overflow-hidden">
                      <button
                        className="px-2 cursor-pointer bg-red-300 w-full"
                        onClick={() => {
                          if (pokemon.numberOfPokemon <= 0) return;

                          props.setPokedex(
                            props.pokedex.map((item) => {
                              if (
                                item.pokemon.pokedexId ===
                                pokemon.pokemon.pokedexId
                              ) {
                                return {
                                  ...item,
                                  numberOfPokemon: item.numberOfPokemon - 1,
                                };
                              }
                              return item;
                            }),
                          );

                          
                        }}
                      >
                        -
                      </button>
                      <p className="px-2">{pokemon.numberOfPokemon}</p>
                      <button
                        className="px-2 cursor-pointer bg-red-300 w-full"
                        onClick={() => {
                         props.setPokedex(
                            props.pokedex.map((item) => {
                              if (
                                item.pokemon.pokedexId ===
                                pokemon.pokemon.pokedexId
                              ) {
                                return {
                                  ...item,
                                  numberOfPokemon: item.numberOfPokemon + 1,
                                };
                              }
                              return item;
                            }),
                          );
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <button
        className="fixed top-8 left-0 z-40 bg-red-600 p-2 rounded-r-md cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <img className="size-6" src="/pokeball.png" alt="" />
      </button>
    );
  }
}
export default Pokedex;

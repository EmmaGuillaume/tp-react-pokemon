import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Pokedex from "./components/Pokedex";
import type { TpokemonCardProps } from "./components/TCard";
const types = [
  "Tous les types",
  "Eau",
  "Feu",
  "Plante",
  "Électrik",
  "Roche",
  "Sol",
  "Vol",
  "Insecte",
  "Poison",
  "Combat",
  "Spectre",
  "Glace",
  "Acier",
  "Dragon",
  "Ténèbres",
  "Fée",
  "Normal",
];

type TPokedex = {
  pokemon: TpokemonCardProps;
  numberOfPokemon: number;
};

function App() {
  const [pokemonData, setPokemonData] = useState<TpokemonCardProps[]>([]);
  const [selectedType, setSelectedType] = useState("Tous les types");
  const [pokemonListFiltered, setPokemonListFiltered] = useState(pokemonData);
  const [generation, setGeneration] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedPokemon, setSelectedPokemon] = useState<TpokemonCardProps[]>(
    [],
  );
  const [pokedex, setPokedex] = useState<TPokedex[]>([]);

  const handleSearchChange = (searchName: string) => {
    const filteredList = pokemonData.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchName.toLowerCase()),
    );
    setPokemonListFiltered(filteredList);
  };

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    if (type === "Tous les types") {
      setPokemonListFiltered(pokemonData);
    } else {
      const filteredList = pokemonData.filter((pokemon) =>
        pokemon.apiTypes.some((apiType) => apiType.name === type),
      );
      setPokemonListFiltered(filteredList);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://pokebuildapi.fr/api/v1/pokemon/generation/${generation}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [generation]);

  console.log(pokemonData);

  useEffect(() => {
    if (selectedPokemon.length === 0) return;
    const pokedexItem: TPokedex = {
      pokemon: selectedPokemon[selectedPokemon.length - 1],
      numberOfPokemon: selectedPokemon.length,
    };
    setPokedex((prev) => {
      const existing = prev.find(
        (item) => item.pokemon.pokedexId === pokedexItem.pokemon.pokedexId,
      );
      if (existing) {
        return prev.map((item) =>
          item.pokemon.pokedexId === pokedexItem.pokemon.pokedexId
            ? { ...item, numberOfPokemon: pokedexItem.numberOfPokemon }
            : item,
        );
      }
      return [...prev, pokedexItem];
    });
  }, [selectedPokemon]);

  return (
    <section className="flex flex-col gap-12 mb-24 relative">
      <Pokedex
        setPokedex={setPokedex}
        setPokedexList={setSelectedPokemon}
        pokedexList={selectedPokemon}
        pokedex={pokedex}
      />

      <h1 className="h-fit w-full flex justify-center">
        <img className="w-1/3" src="/pokemon.png" alt="" />
      </h1>

      <div className="flex flex-nowrap gap-8 justify-between">
        <input
          type="text"
          onChange={(event) => {
            handleSearchChange(event.target.value);
          }}
          className="bg-neutral-700 placeholder:text-neutral-400 px-4 py-2 rounded-full w-1/2"
          placeholder="Search ..."
        />

        <div className="flex gap-4">
          <select
            className="bg-neutral-700 px-4 py-2 rounded-sm"
            name="type"
            id="type"
            onChange={(event) => {
              handleTypeChange(event.target.value);
            }}
          >
            {types.map((type, index) => (
              <option className="rounded-full" key={index} value={type}>
                {type}
              </option>
            ))}
          </select>

          <div className="flex gap-2 items-center">
            <button className="cursor-pointer bg-neutral-700 px-3 py-2 rounded-sm disabled:opacity-50"
              disabled={generation <= 1}
              onClick={() => {
                setGeneration(generation - 1);
              }}
            >
              {"<"}
            </button>

            <p>{generation}</p>
            <button className="cursor-pointer bg-neutral-700 px-3 py-2 rounded-sm disabled:opacity-50"
              disabled={generation >= 8}
              onClick={() => {
                setGeneration(generation + 1);
              }}
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
      {isLoading && (
        <div className="w-full flex justify-center h-full">
          <p className="text-white text-3xl">Chargement...</p>
        </div>
      )}
      <div className="flex gap-8 flex-wrap justify-between">
        {!pokemonListFiltered.length
          ? pokemonData.map((pokemon, index) => (
              <Card
                key={index}
                pokedexList={selectedPokemon}
                setPokedexList={setSelectedPokemon}
                pokemon={pokemon}
              />
            ))
          : pokemonListFiltered.map((pokemon, index) => (
              <Card
                key={index}
                pokedexList={selectedPokemon}
                setPokedexList={setSelectedPokemon}
                pokemon={pokemon}
              />
            ))}
      </div>
    </section>
  );
}

export default App;

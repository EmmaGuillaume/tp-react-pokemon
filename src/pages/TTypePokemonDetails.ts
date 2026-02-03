
type DamageRelation =
  | "immune"
  | "twice_resistant"
  | "resistant"
  | "neutral"
  | "vulnerable"
  | "twice_vulnerable";

type NamedImage = {
  name: string;
  image: string;
}

type PokemonType = NamedImage;

type Evolution ={
  name: string;
  pokedexId: number;
}

type PokemonStats ={
  HP: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
}

type Resistance = {
  name: string;
  damage_multiplier: number;
  damage_relation: DamageRelation;
}

type ResistanceModifyingAbility = {
  name: string;
  slug: string;
}


type TPokemon = {
  id: number;
  pokedexId: number;
  name: string;
  image: string;
  sprite: string;
  slug: string;
  stats: PokemonStats;
  apiTypes: PokemonType[];
  apiGeneration: number;
  apiResistances: Resistance[];
  apiResistancesWithAbilities: Resistance[];
  resistanceModifyingAbilitiesForApi: ResistanceModifyingAbility;
  apiEvolutions: Evolution[];
  apiPreEvolution: Evolution | "none";
}
export type { TPokemon };

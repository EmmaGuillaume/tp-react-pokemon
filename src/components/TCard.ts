type TpokemonCardProps = {
  pokedexId: number;
  name: string;
  image: string;
  stats: TStats;
  apiTypes: TApiTypes[];
  apiGeneration: number;
};

type TStats = {
  HP: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
};
type TApiTypes = {
  name: string;
  image: string;
};

type TTypeGradients = {
  name: string;
  background: string;
  outline: string;
  backgroundSecondary: string;
};

const typeGradients: TTypeGradients[] = [
  {
    name: "Eau",
    background: "#1976D2",
    outline: "#1565C0",
    backgroundSecondary: "#E3F2FD",
  },
  {
    name: "Feu",
    background: "#FF7043",
    outline: "#F4511E",
    backgroundSecondary: "#FFCCBC",
  },
  {
    name: "Plante",
    background: "#81C784",
    outline: "#4CAF50",
    backgroundSecondary: "#C8E6C9",
  },
  {
    name: "Électrik",
    background: "#FFD600",
    outline: "#FFD500",
    backgroundSecondary: "#FFF9C4",
  },
  {
    name: "Roche",
    background: "#A1887F",
    outline: "#8D6E63",
    backgroundSecondary: "#D7CCC8",
  },
  {
    name: "Sol",
    background: "#A1887F",
    outline: "#8D6E63",
    backgroundSecondary: "#D7CCC8",
  },
  {
    name: "Vol",
    background: "#1976D2",
    outline: "#1565C0",
    backgroundSecondary: "#E3F2FD",
  },
  {
    name: "Insecte",
    background: "#689F38",
    outline: "#558B2F",
    backgroundSecondary: "#DCEDC8",
  },
  {
    name: "Poison",
    background: "#632175ff",
    outline: "#4A148C",
    backgroundSecondary: "#E3F2FD",
  },
  {
    name: "Combat",
    background: "#980d0dff",
    outline: "#F4511E",
    backgroundSecondary: "#FFCCBC",
  },
  {
    name: "Spectre",
    background: "#4A148C",
    outline: "#632175ff",
    backgroundSecondary: "#E3F2FD",
  },
  {
    name: "Glace",
    background: "#0288D1",
    outline: "#0277BD",
    backgroundSecondary: "#B3E5FC",
  },
  {
    name: "Acier",
    background: "#607D8B",
    outline: "#546E7A",
    backgroundSecondary: "#CFD8DC",
  },
  {
    name: "Dragon",
    background: "#512DA8",
    outline: "#512DA8",
    backgroundSecondary: "#E3F2FD",
  },
  {
    name: "Ténèbres",
    background: "#616161",
    outline: "#616161",
    backgroundSecondary: "#E3F2FD",
  },
  {
    name: "Fée",
    background: "#EC407A",
    outline: "#EC407A",
    backgroundSecondary: "#E3F2FD",
  },
  {
    name: "Normal",
    background: "#BDBDBD",
    outline: "#BDBDBD",
    backgroundSecondary: "#E3F2FD",
  },
  {
    name: "Psy",
    background: "#e1c0cc",
    outline: "#875575",
    backgroundSecondary: "#f2ecf6",
  },
];
export { type TpokemonCardProps, type TStats, type TApiTypes, typeGradients };

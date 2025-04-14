import { createContext, ReactNode, use, useState } from "react";
import {
  CharactersCardType,
  EpisodeCardType,
  LocationCardType,
} from "../types";

type DataContextType = {
  characters: CharactersCardType[] | null;
  setCharacters: React.Dispatch<React.SetStateAction<CharactersCardType[]>>;
  locations: LocationCardType[] | null;
  setLocations: React.Dispatch<React.SetStateAction<LocationCardType[]>>;
  episodes: EpisodeCardType[] | null;
  setEpisodes: React.Dispatch<React.SetStateAction<EpisodeCardType[]>>;
};

const DataContext = createContext<DataContextType | null>(null);

export const useData = () => {
  const context = use(DataContext);
  if (context === null) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [characters, setCharacters] = useState<CharactersCardType[]>([]);
  const [locations, setLocations] = useState<LocationCardType[]>([]);
  const [episodes, setEpisodes] = useState<EpisodeCardType[]>([]);

  const value: DataContextType = {
    characters,
    setCharacters: (data) => setCharacters(data),
    locations,
    setLocations: (data) => setLocations(data),
    episodes,
    setEpisodes: (data) => setEpisodes(data),
  };
  return <DataContext value={value}>{children}</DataContext>;
};

import {
  CharactersCardType,
  EpisodeCardType,
  LocationCardType,
} from "../../shared/types";

export type ListItemProps = {
  num: number;
  path: string;
  card: LocationCardType | EpisodeCardType | CharactersCardType;
  ref?: React.Ref<HTMLAnchorElement> | undefined;
};

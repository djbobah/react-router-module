import { FormEvent, ReactNode } from "react";

export type LocationCardType = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  created: string;
};

export type EpisodeCardType = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  created: string;
};

export type CharactersCardType = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  created: string;
};

export type ListItemProps = {
  num: number;
  path: string;
  card: LocationCardType | EpisodeCardType | CharactersCardType;
  ref?: React.Ref<HTMLAnchorElement> | undefined;
};

export interface Settings {
  placeholder?: string;
  label?: string;
  description?: string;
  error?: string;
  variant?: string;
  disabled?: boolean;
  radius?: number;
  withIcon?: boolean;
  size?: number;
  withAsterisk?: boolean;
  checked?: boolean;
  value: string;
}

export type FormPropsType = {
  handleSubmit: (e: FormEvent<HTMLFormElement>, data: DataSigninType) => void;
};

export type DataSigninType = {
  email: string;
  password: string;
};

export type UserType = {
  email: string;
  password: string;
};

export type SignInProps = {
  newUser: UserType;
  callback: () => void;
};

export type ErrorBoundaryProps = { children: ReactNode };
export type ErrorBoundaryStateType = { hasError: boolean };

export type UseInfinityScrollPropsType = {
  isLoading: boolean;
  hasMore: boolean;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
};

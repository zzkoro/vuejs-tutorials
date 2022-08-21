import { CommitOptions, DispatchOptions, Store } from "vuex";
import { ActionsType } from "./actions";
import { MutationsType } from "./mutations";
import { RootState } from "./state";

export interface Item {
  id: number;
  by: string;
  title: string;
  text?: string;
  url?: string;
  time: number;
  score: number;
  kids?: number[];
}

export interface User {
  id: number;
  created: number;
  karma?: number;
  submitted?: number[];
}

type MyMutations = {
  commit<
    K extends keyof MutationsType,
    P extends Parameters<MutationsType[K]>[1]
  >(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<MutationsType[K]>;
};

type MyActions = {
  dispatch<K extends keyof ActionsType>(
    key: K,
    payload?: Parameters<ActionsType[K]>[1],
    options?: DispatchOptions
  ): ReturnType<ActionsType[K]>;
};

export type MyStore = Omit<Store<RootState>, "commit" | "dispatch"> &
  MyMutations &
  MyActions;

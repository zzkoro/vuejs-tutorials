import { Item, User } from "./type";

const state = {
  // news: [] as Item[],
  ask: [] as Item[],
  jobs: [] as Item[],
  user: {} as User,
  item: {} as Item,
  list: [] as Item[],
  comments: [] as Item[],
};

type RootState = typeof state;

export { state, RootState };

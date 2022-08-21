import axios, { AxiosPromise, AxiosResponse } from "axios";
import type { Item } from "@/store/type";

const api = {
  news: "https://hacker-news.firebaseio.com/v0/newstories.json",
  ask: "https://hacker-news.firebaseio.com/v0/askstories.json",
  jobs: "https://hacker-news.firebaseio.com/v0/jobstories.json",
  user: "https://hacker-news.firebaseio.com/v0/user/",
  item: "https://hacker-news.firebaseio.com/v0/item/",
};

const axiosInstance = axios.create({
  timeout: 3000,
});

const MAX_ITEMS = 30;

type ApiKey = keyof typeof api;

function fetchNews(): AxiosPromise<number[]> {
  return axiosInstance.get(api.news);
}

function fetchAsk() {
  return axiosInstance.get(api.ask);
}

function fetchJobs() {
  return axiosInstance.get(api.jobs);
}

function fetchUser(id: string) {
  const url = `${api.user}${id}.json`;
  return axiosInstance.get(url);
}

async function fetchItem(id: string) {
  const url = `${api.item}${id}.json`;
  return await axiosInstance.get(url);
}

async function fetchComments(itemIdList: number[]) {
  const fetchItemPromiseList: Promise<AxiosResponse>[] = [];

  for (const itemId of itemIdList) {
    fetchItemPromiseList.push(fetchItem(itemId + ""));
  }

  let itemList: Item[] = [];
  await Promise.all(fetchItemPromiseList)
    .then((res) => {
      itemList = res.map((el) => {
        return el.data;
      });
    })
    .catch((err) => console.log(err));

  //TODO
  console.log(itemList);

  return itemList;
}

async function fetchList(type: string) {
  const apiKey = type as ApiKey;
  const url = api[apiKey];

  let itemIdList: string[] = await axiosInstance
    .get(url)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  itemIdList = itemIdList.slice(0, MAX_ITEMS);

  const fetchItemPromiseList: Promise<AxiosResponse>[] = [];

  for (const itemId of itemIdList) {
    fetchItemPromiseList.push(fetchItem(itemId));
  }

  let itemList: Item[] = [];
  // await Promise.all(fetchItemPromiseList)
  //   .then((res) => {
  //     itemList = res.map((el) => {
  //       return el.data;
  //     });
  //   })
  //   .catch((err) => console.log(err));

  await Promise.allSettled(fetchItemPromiseList)
    .then((res) => {
      itemList = res
        .filter((el) => {
          return el.status === "fulfilled";
        })
        .map((el) => {
          console.log(el);
          return (el as PromiseFulfilledResult<AxiosResponse>).value.data;
        });
    })
    .catch((err) => console.log(err));

  //TODO
  console.log(itemList);

  return itemList.sort((a, b) => b.id - a.id);
}

export {
  fetchNews,
  fetchAsk,
  fetchJobs,
  fetchUser,
  fetchItem,
  fetchList,
  fetchComments,
};

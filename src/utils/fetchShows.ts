import axios from "axios";
import { Shows } from "../types/common";

type FetchShowsParams = {
  queryKey: [string, number];
};

const fetchShows = async ({ queryKey }: FetchShowsParams) => {
  const pageNumber = queryKey[1];

  const { data } = await axios.get<Shows>(
    `https://api.tvmaze.com/shows?page=${pageNumber}`
  );

  return data;
};

export default fetchShows;

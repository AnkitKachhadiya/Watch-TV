import axios from "axios";
import { Shows } from "../types/common";

type FetchShowsParams = {
  queryKey: [string, number, string];
};

const fetchShows = async ({ queryKey }: FetchShowsParams) => {
  const pageNumber = queryKey[1];
  const searchQuery = queryKey[2];

  const paginatedApiUrl = `https://api.tvmaze.com/shows?page=${pageNumber}`;
  const searchApiUrl = `https://api.tvmaze.com/search/shows?q=${searchQuery}`;

  const apiUrl = searchQuery.trim().length > 0 ? searchApiUrl : paginatedApiUrl;

  const { data } = await axios.get<Shows>(apiUrl);

  return data;
};

export default fetchShows;

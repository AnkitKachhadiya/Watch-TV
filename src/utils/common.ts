import axios from "axios";
import { Shows } from "../types/common";

export function getYearFromDateString(str: string) {
  return new Date(str).getFullYear();
}

export async function getShowsByPageNumber(pageNumber: number) {
  const paginatedApiUrl = `https://api.tvmaze.com/shows?page=${pageNumber}`;

  try {
    const { data } = await axios.get<Shows>(paginatedApiUrl);

    return data;
  } catch (error) {
    return null;
  }
}

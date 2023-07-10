import { useQuery } from "@tanstack/react-query";
import fetchShows from "../utils/fetchShows";
import Shows from "./Shows";

const LandingPageShows = () => {
  const pageNumber = 0;
  const { data, status } = useQuery(["shows", pageNumber], fetchShows);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return <>{data && <Shows shows={data} />}</>;
};

export default LandingPageShows;

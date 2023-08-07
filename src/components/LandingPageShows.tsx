import { useQuery } from "@tanstack/react-query";
import fetchShows from "../utils/fetchShows";
import Shows from "./Shows";
import { useEffect, useState } from "react";
import { getShowsByPageNumber } from "../utils/common";

const LandingPageShows = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFirstPage, setIsFirstPage] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false);
  const [areShowsSearched, setAreShowsSearched] = useState(false);

  const { data, status } = useQuery(
    ["shows", pageNumber, searchQuery],
    fetchShows
  );

  useEffect(() => {
    if (areShowsSearched) {
      return;
    }

    pageNumber > 0 ? setIsFirstPage(false) : setIsFirstPage(true);

    async function areShowsAvailable(pageNumber: number) {
      const shows = await getShowsByPageNumber(pageNumber + 1);

      shows ? setIsLastPage(false) : setIsLastPage(true);
    }

    void areShowsAvailable(pageNumber);
  }, [areShowsSearched, pageNumber]);

  if (status === "loading") {
    return (
      <div className="border shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-700 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function nextPageHandler() {
    setPageNumber(pageNumber + 1);
  }

  function previousPageHandler() {
    setPageNumber(pageNumber - 1);
  }

  return (
    <>
      <div className="flex justify-evenly">
        <button
          type="button"
          className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded h-fit sticky top-1/2 ${
            isFirstPage ? "invisible" : "visible"
          }`}
          onClick={previousPageHandler}
        >
          Previous
        </button>

        {data && <Shows shows={data} />}

        <button
          type="button"
          className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded h-fit sticky top-1/2 ${
            isLastPage ? "invisible" : "visible"
          }`}
          onClick={nextPageHandler}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default LandingPageShows;

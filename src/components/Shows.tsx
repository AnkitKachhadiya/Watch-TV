import { Shows as ShowsProps } from "../types/common";
import { getYearFromDateString } from "../utils/common";

const NO_IMAGE_URL =
  "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png";

const Shows = ({ shows }: { shows: ShowsProps }) => {
  return (
    <div className="max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-x-6 gap-y-7 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 xl:gap-x-7">
        {shows.map((show) => (
          <a className="group" href="/" key={show.id}>
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                className="h-full w-full object-cover object-center group-hover:opacity-75"
                alt={show.name}
                src={show.image?.medium || NO_IMAGE_URL}
              />
            </div>
            <h3 className="mt-2 text-xs text-gray-700">
              {show.ended
                ? `${getYearFromDateString(
                    show.premiered
                  )} - ${getYearFromDateString(show.ended)}`
                : `Since ${getYearFromDateString(show.premiered)}`}
            </h3>
            <p className="mt-1 text-sm font-medium text-gray-900">
              {show.name}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Shows;

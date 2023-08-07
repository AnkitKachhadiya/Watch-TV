const Search = () => {
  return (
    <>
      <div className="container mx-auto mt-5 text-center">
        <input
          type="text"
          className="flex-auto mx-auto mr-3 px-3.5 py-2 rounded-md border focus:outline-none"
          placeholder="Type any name of the series"
        />
        <button
          type="button"
          className="flex-none rounded-md px-3.5 py-2 bg-blue-500 hover:bg-blue-600 text-white"
        >
          Search
        </button>
      </div>
    </>
  );
};

export default Search;

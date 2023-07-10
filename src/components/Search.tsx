const Search = () => {
  return (
    <>
      <div className="container mx-auto mt-5 text-center">
        <input
          type="text"
          className="flex-auto mx-auto mr-3 px-3.5 py-2 rounded-md border focus:outline-none"
          placeholder="Type something..."
        />
        <button
          type="button"
          className="flex-none rounded-md px-3.5 py-2.5 bg-blue-500 text-white"
        >
          Search
        </button>
      </div>
    </>
  );
};

export default Search;

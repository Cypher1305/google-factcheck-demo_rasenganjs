export default function SearchBar({ query, setQuery, onSearch, loading }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex w-full gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 flex-1 rounded-lg"
          placeholder="Type a query"
        />
        <button
          onClick={onSearch}
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg"
        >
          Check
        </button>
      </div>
      {loading && (
        <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-500 z-99 items-center"></div>
      )}
    </div>
  );
}

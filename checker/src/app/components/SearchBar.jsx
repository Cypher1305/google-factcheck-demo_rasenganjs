export default function SearchBar({ query, setQuery, onSearch }) {
    return (
        <div className="flex gap-2">
            <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="border p-2 flex-1"
                placeholder="Tapez une requête"
            />
            <button onClick={onSearch} className="bg-blue-500 text-white p-2 rounded cursor-pointer">
                Rechercher
            </button>
        </div>
    );
}

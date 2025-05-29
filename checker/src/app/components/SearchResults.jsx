export default function SearchResults({ results }) {
    if (!results || results.length === 0) {
        return <p className="text-gray-500 italic">No results found. c'est <strong>peut-être</strong> un dôhi🧐</p>;
    }
    return (
        <div>
            {results.map((item, idx) => (
                <div key={idx} className="mb-2">
                    <a href={item.link} target="_blank" className="text-blue-600">{item.title}</a>
                    <p>{item.snippet}</p>
                </div>
            ))}
        </div>
    );
}

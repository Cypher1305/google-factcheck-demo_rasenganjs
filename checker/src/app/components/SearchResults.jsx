export default function SearchResults({ results }) {
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

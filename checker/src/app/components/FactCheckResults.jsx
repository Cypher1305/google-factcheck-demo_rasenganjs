export default function FactCheckResults({ results }) {
    return (
        <div>
            {results.map((claim, idx) => (
                <div key={idx} className="mb-2 border p-2">
                    <p className="font-semibold">{claim.text}</p>
                    {claim.claimReview?.map((review, i) => (
                        <div key={i} className="text-sm">
                            <span className="font-bold">{review.publisher?.name}</span>: {review.textualRating}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

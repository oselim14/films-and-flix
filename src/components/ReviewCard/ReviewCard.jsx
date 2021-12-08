

export default function ReviewCard({movie}) {

    return(
        <>
            {movie.reviews.map((r, idx) =>
                <div className="ReviewMiddleReviews" key={idx}><span>{r.review}</span><span>{r.rating}</span></div>
                )}
        </>
    )
}


export default function ReviewCard({movie}) {

    return(
        <>
            {movie.reviews.map(r =>
                <div className="ReviewMiddleReviews"><span>{r.review}</span><span>{r.rating}</span></div>
                )}
        </>
    )
}

const DetailsMovie = ({ _id, title, poster, imdb, }) => {
    return (
        <>
            <h1>{title}</h1>
            <hr />
            <div className="row">
                <div className="col-12 col-md-3 ">
                    <article>
                        <img src={poster} className="card-img-top rounded" alt={poster} />
                    </article>
                </div>
                <div className="col-12 col-md-9">
                    <div className="card-body">
                        <h5 className="card-title mt-3 mt-sm-0">{title}</h5>
                        <hr />
                        <div>
                            <p className="card-text">
                                <strong>Rating:</strong> {imdb.rating}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}
export default DetailsMovie
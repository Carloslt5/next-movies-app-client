
const DetailsMovie = ({ _id, title, poster, fullplot, imdb, directors, writers }) => {
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
                            <article className="card-text" style={{ height: '100%' }}>
                                <p><strong>Description:</strong></p>
                                <p>{fullplot}</p>
                                {
                                    directors?.map(el => {
                                        return (
                                            <p><strong>Directors:</strong> {el}</p>
                                        )
                                    })
                                }
                                <strong>Rating:</strong> {imdb.rating}
                            </article>
                        </div>
                    </div>
                </div>
            </div >
            <hr />
        </>
    )
}
export default DetailsMovie
import Link from 'next/link'

const EachMovie = ({ _id, title, poster, imdb, }) => {
    return (

        <div className="card">
            <article>
                <img src={poster} className="card-img-top rounded" alt={poster} />
            </article>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <div>
                    <article className="card-text">
                        <p><strong>Rating:</strong> {imdb.rating}</p>
                    </article>
                    <button href={`/movies/${_id}`} className='btn btn-outline-dark' type="button">
                        View Details
                    </button>
                </div>
            </div>
        </div>

    )
}
export default EachMovie
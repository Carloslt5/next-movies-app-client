import Link from 'next/link'

const EachMovie = ({ _id, title, poster, imdb, }) => {
    return (

        <div className="card">
            <article>
                <img src={poster} className="card-img-top" alt={poster} />
            </article>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <div>
                    <p className="card-text"><strong>Rating:</strong> {imdb.rating}</p>
                    <Link href={`/movies/${_id}`} className='btn btn-outline-dark' type="button">
                        View Details
                    </Link>
                </div>
            </div>
        </div>

    )
}
export default EachMovie
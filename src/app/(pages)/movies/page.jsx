'use client'
import Link from 'next/link'
import moviesServices from '@/services/Movies.services'
import { useEffect, useState } from 'react'
import EachMovie from '@/components/EachMovie/EachMovie'
import Loader from '@/components/Loader/Loader'

const Movies = () => {

    const [moviesData, setMoviesData] = useState()
    const [limitMovies, setLimitMovies] = useState(4)

    const loadMovies = async () => {

        try {
            const movie = await moviesServices.getMovies().then(({ data }) => setMoviesData(data))
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadMovies()
    }, [limitMovies])

    const loadMoreHandler = () => {
        setLimitMovies(limitMovies + 4)
        console.log('Aumentado el limite', limitMovies)
    }


    return (
        <div className="container-fluid px-4 py-3">
            <h1>MOVIES</h1>
            <hr />
            <div className="row">
                {!moviesData
                    ? <Loader />
                    : moviesData.slice(0, limitMovies).map(movie => {
                        return (
                            <div key={movie._id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                                <Link href={`/movies/${movie._id}`}>
                                    <EachMovie {...movie} />
                                </Link>
                            </div>
                        )
                    })
                }
            </div>

            <button onClick={loadMoreHandler} className='d-block mx-auto btn btn-outline-secondary'>VIEW MORE...</button>

            <hr />
            <Link href={'/'} className='btn btn-dark'>GO HOME</Link>
        </div >
    )
}

export default Movies
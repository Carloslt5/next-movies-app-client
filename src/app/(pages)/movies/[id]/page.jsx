'use client'
import { useParams } from 'next/navigation'
import moviesServices from '@/services/Movies.services'
import { useEffect, useState } from 'react'
import DetailsMovie from '@/components/DetailsMovie/DetailsMovie'
import Link from 'next/link'
import Loader from '@/components/Loader/Loader'


const MoviePage = () => {

    const [movieData, setMovieData] = useState()
    const { id } = useParams()

    const loadMovie = () => {
        moviesServices
            .getOneMovie(id)
            .then(({ data }) => {
                setMovieData(data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadMovie()
    }, [])

    return (
        <div className="container-fluid px-4 py-2">
            <div className="row">
                {
                    !movieData
                        ? <Loader />
                        : <div className="col-12 ">
                            <div className="card px-2 py-2">
                                <DetailsMovie {...movieData} />
                            </div>
                        </div>
                }
            </div>
            <Link href={'/'} className='btn btn-dark me-2 my-2'>GO HOME</Link>
            <Link href={'/movies'} className='btn btn-dark my-2'>View Movies</Link>

        </div >
    )
}

export default MoviePage
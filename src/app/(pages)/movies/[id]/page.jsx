'use client'
import { useParams } from 'next/navigation'
import moviesServices from '@/services/Movies.services'
import { useEffect, useState } from 'react'


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
        <h1>MoviePage</h1>
    )
}

export default MoviePage
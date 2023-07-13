'use client'
import Link from 'next/link'
import moviesServices from '@/services/Movies.services'
import { useEffect, useState } from 'react'
import EachMovie from '@/components/EachMovie/EachMovie'
import Loader from '@/components/Loader/Loader'
import InfiniteScroll from 'react-infinite-scroller';

const Movies = () => {

    const [moviesData, setMoviesData] = useState([])

    const loadMovies = async () => {

        try {
            const { data } = await moviesServices.getMovies({ limit: 4, skip: 0 })
            setMoviesData(data)
        } catch (error) {
            console.log(error);
        }
    }

    const loadMoreHandler = async () => {
        const numerMovies = moviesData.length
        const { data } = await moviesServices.getMovies({ limit: 4, skip: numerMovies })
        setMoviesData([...moviesData, ...data])
    }

    useEffect(() => {
        loadMovies()
    }, [])

    return (
        <div className="container-fluid px-4 py-3">
            <h1>MOVIES</h1>
            <hr />
            <InfiniteScroll
                pageStart={0}
                loadMore={loadMoreHandler}
                hasMore={true || false}
                loader={<div className="loader" key={0}>Loading ...</div>}
            >
                <div className="row">
                    {!moviesData
                        ? <Loader />
                        : moviesData.map(movie => {
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
            </InfiniteScroll>
            <button onClick={loadMoreHandler} className='d-block mx-auto btn btn-outline-secondary'>VIEW MORE...</button>
            <hr />
            <Link href={'/'} className='btn btn-dark'>GO HOME</Link>
        </div >
    )
}

export default Movies
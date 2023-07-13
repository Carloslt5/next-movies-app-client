import axios from 'axios'

class MoviesServices {
    constructor() {
        this.axiosApp = axios.create({
            baseURL: `http://localhost:5005/api`
        })
    }

    getMovies(params = {}) {
        const URLparams = new URLSearchParams(params)
        return this.axiosApp.get(`/movies/?${URLparams.toString()}`)
    }

    getOneMovie(id) {
        return this.axiosApp.get(`/movies/${id}`)
    }

}

const moviesServices = new MoviesServices()
module.exports = moviesServices


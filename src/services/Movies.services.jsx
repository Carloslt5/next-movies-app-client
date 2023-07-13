import axios from 'axios'

class MoviesServices {
    constructor() {
        this.axiosApp = axios.create({
            baseURL: `http://localhost:5005/api`
        })
    }

    getMovies(limitMovies) {
        return this.axiosApp.get('/movies', { limitMovies })
    }

    getOneMovie(id) {
        return this.axiosApp.get(`/movies/${id}`)
    }

}

const moviesServices = new MoviesServices()
module.exports = moviesServices



import MovieApp from '../application/movieapp';
import * as httpStatus from 'http-status';

const sendReponse = function (res, statusCode, data) {
    res.status(statusCode).json({ 'result': data })
}

class MovieController {

    getAll(req, res, next) {
        MovieApp
            .getAll()
            .then(movie => sendReponse(res, httpStatus.OK, movie))
            .catch(err => console.error.bind(console, `Error ${err}`))
    }

    getById(req, res) {
        const _id = { id: req.params.id };

        if (!_id) {
            sendReponse(res, httpStatus.OK, 'Schedule not found');
        } else {
            MovieApp
                .getById(req.params.id)
                .then(movies => sendReponse(res, httpStatus.OK, movies))
                .catch(err => console.error.bind(console, `Error ${err}`))
        }
    }

    create(req, res) {
        const movie = req.body;
        MovieApp
            .create(movie)
            .then(s => sendReponse(res, httpStatus.CREATED, s))
            .catch(err => console.error.bind(console, `Error ${err}`))
    }

    update(req, res) {

        let _movies = req.body;

        MovieApp
            .update(req.params.id, _movies)
            .then(user => sendReponse(res, httpStatus.OK, `Movie ${_movies.title} updated`))
            .catch(err => console.error.bind(console, `Error ${err}`))

    }

    delete(req, res) {
        MovieApp
            .delete(req.params.id)
            .then(result => sendReponse(res, httpStatus.OK, `Movie deleted with success!`))
            .catch(err => console.error.bind(console, `Error ${err}`))
    }
}

export default new MovieController;
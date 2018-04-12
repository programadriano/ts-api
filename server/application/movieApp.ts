import MovieRepository from '../repositories/movieRepository';


class MovieApp {

    getAll() {
        return MovieRepository.find({}).sort({ name: 1 });
    }

    getById(_id) {
        return MovieRepository.findById(_id);
    }

    create(schedule) {
        return MovieRepository.create(schedule);
    }

    update(id, movie) {

        const updatedMovie = {
            title: movie.title,
            description: movie.description,
            url: movie.url,
            active: movie.active
        };

        return MovieRepository.findByIdAndUpdate(id, updatedMovie);
    }

    delete(id) {
        return MovieRepository.findByIdAndRemove(id);
    }
}

export default new MovieApp();
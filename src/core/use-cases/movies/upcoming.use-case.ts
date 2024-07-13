import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBMoviesRespone } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import type { Movie } from "../../entities/movie.entity";


export const moviesUpcomingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {

    try {

        const Upcoming = await fetcher.get<MovieDBMoviesRespone>('/upcoming');

        return Upcoming.results.map(MovieMapper.fromMovieDBResponseToEntity);

    } catch (error) {
        console.log(error);
        throw new Error('Error fetching movies - Upcoming: ' + error);
    }

}
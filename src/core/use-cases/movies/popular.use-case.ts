import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBMoviesRespone } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import type { Movie } from "../../entities/movie.entity";


export const moviesPopularUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {

    try {

        const popular = await fetcher.get<MovieDBMoviesRespone>('/popular');

        return popular.results.map(MovieMapper.fromMovieDBResponseToEntity);

    } catch (error) {
        console.log(error);
        throw new Error('Error fetching movies - popular: ' + error);
    }

}
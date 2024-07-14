import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBMoviesRespone } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import type { Movie } from "../../entities/movie.entity";

interface Options {
    page?: number;
    limit?: number;
}

export const moviesUpcomingUseCase = async (fetcher: HttpAdapter, options?:Options): Promise<Movie[]> => {

    try {

        const Upcoming = await fetcher.get<MovieDBMoviesRespone>('/upcoming',
            {
                params: {
                    page: options?.page || 1
                }
            }
        );

        return Upcoming.results.map(MovieMapper.fromMovieDBResponseToEntity);

    } catch (error) {
        console.log(error);
        throw new Error('Error fetching movies - Upcoming: ' + error);
    }

}
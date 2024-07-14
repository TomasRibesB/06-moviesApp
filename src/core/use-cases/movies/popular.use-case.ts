import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBMoviesRespone } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import type { Movie } from "../../entities/movie.entity";

interface Options {
    page?: number;
    limit?: number;
}


export const moviesPopularUseCase = async (fetcher: HttpAdapter, options?: Options): Promise<Movie[]> => {

    try {

        const popular = await fetcher.get<MovieDBMoviesRespone>('/popular'
            , {
                params: {
                    page: options?.page || 1
                }
            }
        );

        return popular.results.map(MovieMapper.fromMovieDBResponseToEntity);

    } catch (error) {
        console.log(error);
        throw new Error('Error fetching movies - popular: ' + error);
    }

}
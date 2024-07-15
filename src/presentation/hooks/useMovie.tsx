import { useEffect, useState } from 'react'
import { FullMovie } from '../../core/entities/movie.entity';
import { movieDBFecher } from '../../config/adapters/movieDB.adapter';
import * as UseCases from '../../core/use-cases'
import { Cast } from '../../core/entities/cast.entity';

export const useMovie = (movieId: number) => {

    const [isLoading, setIsLoading] = useState(true)
    const [movie, setMovie] = useState<FullMovie>()
    const [cast, setCast] = useState<Cast[]>()

    useEffect(() => {
        loadMovie();
    }, [movieId]);


    const loadMovie = async () => {
        setIsLoading(true)

        const fullMoviePromise = UseCases.getMovieByIdUseCase(movieDBFecher, movieId)
        const castPromise = UseCases.getMovieCastUseCase(movieDBFecher, movieId)

        const [fullMovie, actors] = await Promise.all([fullMoviePromise, castPromise])


        setMovie(fullMovie)
        setCast(actors)

        
        setIsLoading(false)

    }



    return {
        isLoading,
        movie,
        cast
    }
}

import { useEffect, useState } from 'react'
import { FullMovie } from '../../core/entities/movie.entity';
import { movieDBFecher } from '../../config/adapters/movieDB.adapter';
import * as UseCases from '../../core/use-cases'

export const useMovie = (movieId: number) => {

    const [isLoading, setIsLoading] = useState(true)
    const [movie, setMovie] = useState<FullMovie>()

    useEffect(() => {
        loadMovie();
    }, [movieId]);


    const loadMovie = async () => {
        setIsLoading(true)

        const fullMovie = await UseCases.getMovieByIdUseCase(movieDBFecher, movieId)

        setMovie(movie)

        console.log(movie)


    }



        return {
            isLoading,
            movie,
        }
    }

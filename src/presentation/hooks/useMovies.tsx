
import React, { useEffect, useState } from 'react'
import { Movie } from '../../core/entities/movie.entity'

import * as UseCases from '../../core/use-cases'
import { movieDBFecher } from '../../config/adapters/movieDB.adapter'

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true)

    const [nowPlaying, setNowPlaying] = useState<Movie[]>([])
    const [popular, setPopular] = useState<Movie[]>([])
    const [topRated, setTopRated] = useState<Movie[]>([])
    const [upcoming, setUpcoming] = useState<Movie[]>([])

    useEffect(() => {
        initialLoad();
    }, []);


    const initialLoad = async () => {
        const nowPlayingPromise = UseCases.moviesNowPlayingUseCase(movieDBFecher)
        const popularPromise = UseCases.moviesPopularUseCase(movieDBFecher)
        const topRatedPromise = UseCases.moviesTopRatedUseCase(movieDBFecher)
        const upcomingPromise = UseCases.moviesUpcomingUseCase(movieDBFecher)

        const [
            nowPlayingMovies,
            popularMovies,
            topRatedMovies,
            upcomingMovies
        ] = await Promise.all(
            [
                nowPlayingPromise,
                popularPromise,
                topRatedPromise,
                upcomingPromise
            ]
        )

        setNowPlaying(nowPlayingMovies)
        setPopular(popularMovies)
        setTopRated(topRatedMovies)
        setUpcoming(upcomingMovies)

        setIsLoading(false)

        console.log(isLoading)

    }

    return {
        isLoading,
        nowPlaying,
        popular,
        topRated,
        upcoming
    }
}

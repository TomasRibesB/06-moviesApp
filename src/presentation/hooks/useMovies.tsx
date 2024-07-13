
import React, { useEffect, useState } from 'react'
import { Movie } from '../../core/entities/movie.entity'

import * as UseCases from '../../core/use-cases'
import { movieDBFecher } from '../../config/adapters/movieDB.adapter'

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true)

    const [nowPlaying, setnowPlaying] = useState<Movie[]>([])

    useEffect(() => {

        initialLoad()


    });


    const initialLoad = async () => {
        const nowPlayingMovies = await UseCases.moviesNowPlayingUseCase(movieDBFecher)
    }

    return {
        isLoading,
        nowPlaying
    }
}

import { AxiosAdapter } from "./http/axios.adapter";

export const movieDBFecher = new AxiosAdapter ({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '39be20fd993f368a565c00f52b77a2c5',
        language: 'es'
    }
})
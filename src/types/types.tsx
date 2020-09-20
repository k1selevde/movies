export interface AppProps { 
    compiler: string;
    routing?: string;
}

//export const SUCCESSFUL_API_CONNECT:string = 'SUCCESSFUL_API_CONNEC'

// new code

export type collectionMovie = {
    popularity: number,
    vote_count: number,
    video: boolean,
    poster_path: string,
    id: number,
    adult: boolean,
    backdrop_path: string,
    original_language: string,
    original_title: string,
    genre_ids: number[],
    title: string,
    vote_average: number,
    overview: string,
    release_date: string
}

// search results types:

export type searchResultMovie = {
    vote_count: number,
    popularity: number,
    id: number,
    video: boolean,
    media_type: "movie",
    vote_average: number,
    title: string,
    release_date: string,
    original_language: string,
    original_title: string,
    genre_ids: number[],
    backdrop_path: string,
    adult: boolean,
    overview: string,
    poster_path: string
}

export type searchResultTv = {
    original_name: string,
    genre_ids: number[],
    media_type: "tv",
    name: string,
    popularity: number,
    origin_country: string[],
    vote_count: number,
    first_air_date: string,
    backdrop_path: string,
    original_language: string,
    id: number,
    vote_average: number,
    overview: string,
    poster_path: string
}

export type searchResultPerson = {
    known_for_department: string,
    id: number,
    name: string,
    known_for: any[],
    popularity: number,
    profile_path: string,
    gender: number,
    media_type: "person",
    adult: boolean
}

export type searchResultCompany = {
    id: number,
    logo_path: null | string,
    name: string,
    origin_country: string
}
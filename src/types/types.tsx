export interface AppProps {
    compiler: string;
    routing?: string;
}

//export const SUCCESSFUL_API_CONNECT:string = 'SUCCESSFUL_API_CONNEC'

// new code

// RESPONSES START= ====

export type SearchOftenMoviesResponse = {
    page: number
    total_results: number
    total_pages: number
    results: any[]
}

export type SearchOftenPeopleResponse = {
    page: number
    total_results: number
    total_pages: number
    results: any[]
}


export type SearchPeopleResponse = {
    page: number
    total_results: number
    total_pages: number
    results: any[]
}


export type SearchMoviesResponse = {
    page: number
    total_results: number
    total_pages: number
    results: any[]
}

export type KeywordsMovieResponse = {
    id: number
    keywords: any[]
}

export type CreditsMovieResponse = {
    id: number
    cast: any[]
    crew: any[]
}

export type ReviewsMovieResponse = {
    id: number
    page: number
    results: any[]
    total_pages: number
    total_results: number
}

export type SimilarMoviesResponse = {
    page: number
    results: any[]
    total_pages: number
    total_results: number
}

export type CollectionMoviesResponse = {
    results: any[]
    page: number
    total_results: number
    dates?: {}
    total_pages: number
}

export type DiscoverMoviesResponse = {
    page: number
    total_results: number
    total_pages: number
    // change to movies
    results: any[]
}

export type Genre = {
    id: number
    name: string
}

export type GenresResponse = {
    genres: Array<Genre>
}



// RESPONSE END ===

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

/*export type DetailsResultPerson = {
    birthday: string,
    known_for_department: string,
    deathday: null,
    id: number,
    name: string,
    also_known_as: string[],
    gender: number,
    biography: string,
    popularity: number,
    place_of_birth: string,
    profile_path: string,
    adult: false,
    imdb_id: string,
    homepage: string
}*/

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

export type OptionType = {
    label: string,
    value: string
}

export type MovieDetailsType = {
    adult: false,
    backdrop_path: string,
    belongs_to_collection: {},
    budget: number,
    genres: [],
    homepage: string,
    id: number,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: [],
    production_countries: [],
    release_date: string,
    revenue: number,
    runtime: number,
    spoken_languages: [],
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export type movieCreditType = {
    cast_id: number,
    character: string,
    credit_id: string,
    gender: number,
    id: number,
    name: string,
    order: number,
    profile_path: string
}

export type movieCreditsType = {
    cast: movieCreditType[]
}

export type movieKeywordType = {
    id: number,
    name: string
}

export type movieKeywordsType = {
    keywords: movieKeywordType[]
}

export type similarMovieType = {
    id: number,
    video: boolean,
    vote_count: number,
    vote_average: number,
    title: string,
    release_date: string,
    original_language: string,
    original_title: string,
    genre_ids: number[],
    backdrop_path: string,
    adult: boolean,
    overview:   string,
    poster_path: string,
    popularity: number
}

export type similarMoviesResultsType = {
    results: similarMovieType[]
}

export type movieReviewType = {
    author: string,
    content: string,
    id: string,
    url: string
}

export type movieReviewsResultType = {
    results: movieReviewType[]
}

export type PersonDetailsType = {
    birthday: string,
    known_for_department: string,
    deathday: null | string,
    id: number,
    name: string,
    also_known_as: any[],
    gender: number,
    biography: string,
    popularity: number,
    place_of_birth: string,
    profile_path: string,
    adult: false,
    imdb_id: string,
    homepage: null | string
}
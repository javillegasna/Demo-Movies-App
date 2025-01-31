import * as movieTypes from '@/lib/tmdb/models/movie';
export const mockMovie: movieTypes.Movie = {
    id: 1,
    title: 'Mock Movie',
    overview: 'This is a mock movie overview.',
    release_date: '2023-01-01',
    poster_path: '/mockPosterPath.jpg',
    backdrop_path: '/mockBackdropPath.jpg',
    vote_average: 8.5,
    vote_count: 1000,
    genre_ids: [1, 2, 3],
    original_language: 'en',
    original_title: 'Mock Movie Original Title',
    popularity: 10.0,
    video: false,
    adult: false,
};

export const mockMovies: movieTypes.Movie[] = [mockMovie];
export const mockMovieDetails: movieTypes.MovieDetails = {
    adult: false,
    backdrop_path: '/mockBackdropPath.jpg',
    belongs_to_collection: {
        id: 1,
        name: 'Mock Collection',
        poster_path: '/mockCollectionPosterPath.jpg',
        backdrop_path: '/mockCollectionBackdropPath.jpg',
    },
    budget: 1000000,
    genres: [
        {
            id: 1,
            name: 'Mock Genre 1',
        },
        {
            id: 2,
            name: 'Mock Genre 2',
        },
    ],
    homepage: 'https://example.com',
    id: 1,
    imdb_id: 'tt1234567',
    original_language: 'en',
    original_title: 'Mock Original Title',
    overview: 'Mock overview',
    popularity: 1.0,
    poster_path: '/mockPosterPath.jpg',
    production_companies: [
        {
            id: 1,
            name: 'Mock Company 1',
            logo_path: '/mockCompany1.jpg',
            origin_country: 'US',
        },
    ],
    production_countries: [
        {
            iso_3166_1: 'US',
            name: 'United States',
        },
    ],
    release_date: '2021-01-01',
    revenue: 1000000,
    runtime: 90,
    spoken_languages: [
        {
            english_name: 'English',
            iso_639_1: 'en',
            name: 'English',
        },
    ],
    status: 'Released',
    tagline: 'Mock Tagline',
    title: 'Mock Title',
    video: false,
    vote_average: 1.0,
    vote_count: 1,
};


const mockBelongsToCollection: movieTypes.BelongsToCollection = {
    id: 1,
    name: 'Mock Collection',
    poster_path: '/mockPosterPath.jpg',
    backdrop_path: '/mockBackdropPath.jpg',
};
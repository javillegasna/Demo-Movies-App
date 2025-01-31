import * as collectionsTypes from '@/lib/tmdb/models/collections';

export const mockCollection: collectionsTypes.Collection = {
    id: 1,
    name: 'Mock Collection',
    overview: 'This is a mock collection overview.',
    poster_path: '/mockPosterPath.jpg',
    backdrop_path: '/mockBackdropPath.jpg',
    adult: false,
    original_language: 'en',
    original_name: 'Mock Original Name',
    
};

export const mockCollections: collectionsTypes.Collection[] = [mockCollection];

export const mockCollectionDetails: collectionsTypes.DetailedCollection = {
    id: 1,
    name: 'Mock Collection',
    overview: 'This is a mock collection overview.',
    poster_path: '/mockPosterPath.jpg',
    backdrop_path: '/mockBackdropPath.jpg',
    adult: false,
    original_language: 'en',
    original_name: 'Mock Original Name',
    parts: [
        {
            adult: false,
            backdrop_path: '/mockBackdropPath.jpg',
            genre_ids: [1, 2, 3],
            id: 1,
            original_language: 'en',
            original_title: 'Mock Original Title',
            overview: 'Mock overview',
            poster_path: '/mockPosterPath.jpg',
            release_date: '2023-01-01',
            title: 'Mock Movie',
            video: false,
            vote_average: 8.5,
            vote_count: 1000,
            popularity: 10.0,
        },
    ],
};
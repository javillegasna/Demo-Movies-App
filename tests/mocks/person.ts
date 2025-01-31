import { WithCombinedCredits, WithImages } from '@/lib/tmdb/api/types';
import * as personTypes from '@/lib/tmdb/models/person';

export const mockPerson: personTypes.Person = {
    id: 1,
    name: 'Mock Person',
    known_for: [
        {
            id: 1,
            title: 'Mock Movie',
            poster_path: 'mock.jpg',
            backdrop_path: 'mock.jpg',
            media_type: 'movie',
            adult: false,
            overview: 'Mock overview',
            release_date: '2021-01-01',
            genre_ids: [1],
            original_language: 'en',
            original_title: 'Mock Original Title',
            video: false,
            vote_average: 0,
            vote_count: 0,
            popularity: 0,
        },
    ],
    profile_path: 'mock.jpg',
    adult: false,
    known_for_department: 'mock',
    gender: 0,
    popularity: 0,
};

export const mockPersonDetails: personTypes.PersonDetails = {
    adult: false,
    also_known_as: ["mock-alias"],
    biography: 'Mock Biography',
    deathday: '2021-01-01',
    gender: 0,
    homepage: 'https://example.com',
    id: 1,
    imdb_id: 'mock',
    known_for_department: 'mock',
    name: 'Mock Person',
    place_of_birth: 'Mock',
    popularity: 0,
    profile_path: 'mock.jpg',
    birthday: '2021-01-01',
    images: {
        profiles: [
            {
                aspect_ratio: 0,
                file_path: 'mock.jpg',
                height: 0,
                iso_639_1: 'en',
                vote_average: 0,
                vote_count: 0,
                width: 0,
            },
        ],
    },
};

export const mockPersonWitMediaTypes: personTypes.PersonWithMediaType & WithCombinedCredits & WithImages = {
    combined_credits: {
        cast: [],
        crew: []
    },
    id: 1,
    name: 'Mock Person',
    known_for: [
        {
            id: 1,
            title: 'Mock Movie',
            poster_path: 'mock.jpg',
            backdrop_path: 'mock.jpg',
            media_type: 'movie',
            adult: false,
            overview: 'Mock overview',
            release_date: '2021-01-01',
            genre_ids: [1],
            original_language: 'en',
            original_title: 'Mock Original Title',
            video: false,
            vote_average: 0,
            vote_count: 0,
            popularity: 0,
        },
    ],
    profile_path: 'mock.jpg',
    adult: false,
    known_for_department: 'mock',
    gender: 0,
    popularity: 0,
    media_type: 'person',
    images: {
        posters: [],
        backdrops: [],
        logos: [],
        profiles: [
            {
                aspect_ratio: 0,
                file_path: 'mock.jpg',
                height: 0,
                iso_639_1: 'en',
                vote_average: 0,
                vote_count: 0,
                width: 0,
            },
        ],
    },
};

const combined_credits = {
    cast: [],
    crew: []
};

export const mockWithCombinedCredits : WithCombinedCredits = {
    combined_credits
};
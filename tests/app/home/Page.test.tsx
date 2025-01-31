/// <reference types="vitest" />
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react'
import Home from '@/app/(home)/page';

vi.mock('@/lib/tmdb/api/trending', async (importOriginal) => {
  const actual = await importOriginal();
  if (typeof actual !== 'object' || actual === null) {
    throw new Error('Expected actual to be an object');
  }
  return {
    ...actual,
    trending: {
      ...actual.trending,
      movie: vi.fn(() => Promise.resolve({ results: [
        {
          id: 1,
          title: 'Movie 1',
          poster_path: '/poster1.jpg',
          backdrop_path: '/backdrop1.jpg',
          overview: 'Overview for Movie 1',
          release_date: '2021-01-01',
        },
        {
          id: 2,
          title: 'Movie 2',
          poster_path: '/poster2.jpg',
          backdrop_path: '/backdrop2.jpg',
          overview: 'Overview for Movie 2',
          release_date: '2021-01-02',
        }
      ] })),
      tv: vi.fn(() => Promise.resolve({ results: [
        {
          id: 1,
          name: 'TV Show 1',
          poster_path: '/poster1.jpg',
          backdrop_path: '/backdrop1.jpg',
          overview: 'Overview for TV Show 1',
          first_air_date: '2021-01-01',
        },
        {
          id: 2,
          name: 'TV Show 2',
          poster_path: '/poster2.jpg',
          backdrop_path: '/backdrop2.jpg',
          overview: 'Overview for TV Show 2',
          first_air_date: '2021-01-02',
        }
      ] })),
      people: vi.fn(() => Promise.resolve({ results: [
        {
          id: 1,
          name: 'Person 1',
          profile_path: '/profile1.jpg',
          known_for: [
            {
              id: 1,
              title: 'Movie 1',
              media_type: 'movie',
            },
            {
              id: 1,
              name: 'TV Show 1',
              media_type: 'tv',
            }
          ]
        },
        {
          id: 2,
          name: 'Person 2',
          profile_path: '/profile2.jpg',
          known_for: [
            {
              id: 2,
              title: 'Movie 2',
              media_type: 'movie',
            },
            {
              id: 2,
              name: 'TV Show 2',
              media_type: 'tv',
            }
          ]
        }
      ] })),
    },
  }
})
describe('Home', () => {
  it('renders the Home component', async () => {
    const component = await Home();
    render(component)

    expect(screen.getByText('Trending Movies')).toBeInTheDocument();
    expect(screen.getByText('Trending TV Shows')).toBeInTheDocument();
    expect(screen.queryAllByText('Overview for Movie 1')).toBeDefined();
    expect(screen.queryAllByText('Overview for Movie 2')).toBeDefined();

  })
})
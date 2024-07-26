'use server';
import axios from 'axios';

export const getMovies = async ({ page }: { page: number | undefined }) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
        },
      },
    );
    return await JSON.parse(JSON.stringify(data.results));
  } catch (error) {
    return 'There was an error fetching the data';
  }
};

export const getSearchMovies = async ({ search }: { search: string | undefined }) => {
  try {
    const newSearch = search?.split(' ').join('+');
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${newSearch}&api_key=${process.env.API_KEY}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
        },
      },
    );
    return await JSON.parse(JSON.stringify(data.results));
  } catch (error) {
    return `No result found for ${search}`;
  }
};

export const getTVShows = async ({
  page,
  search,
}: {
  page: number | undefined;
  search: string | undefined;
}) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
        },
      },
    );
    return await JSON.parse(JSON.stringify(data.results));
  } catch (error) {
    return 'There was an error fetching the data';
  }
};

export const getTvShowsSearch = async ({ search }: { search: string | undefined }) => {
  try {
    const newSearch = search?.split(' ').join('+');
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/tv?query=${newSearch}&api_key=${process.env.API_KEY}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
        },
      },
    );
    return await JSON.parse(JSON.stringify(data.results));
  } catch (error) {
    return `No result found for ${search}`;
  }
};

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
    console.log('fetched');
    return await JSON.parse(JSON.stringify(data.results));
  } catch (error) {
    return 'There was an error fetching the data';
  }
};

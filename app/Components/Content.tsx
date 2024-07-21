import { Key, Suspense } from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';

const fetchMovies = async () => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
        },
      },
    );

    return data.results;
  } catch (error) {
    return 'There was an error fetching the data';
  }
};

const Content = async () => {
  const data = await fetchMovies();
  return (
    <section className="grid grid-cols-2 justify-items-center gap-[1.5rem] py-[8rem] md:grid-cols-3 md:gap-[1.8rem] xl:grid-cols-4 xl:gap-[2.4rem]">
      {data &&
        data.map(
          (
            movie: { poster_path: string; title: string; vote_average: string; id: string },
            index: Key | null | undefined,
          ) => {
            return (
              <MovieCard
                key={index}
                imagePath={movie.poster_path}
                title={movie.title}
                rating={movie.vote_average}
                id={movie.id}
              />
            );
          },
        )}
    </section>
  );
};

export default Content;

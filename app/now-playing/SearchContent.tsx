import MovieCard from '@/app/Components/MovieCard';
import axios from 'axios';
import { Key } from 'react';

const fetchNowPlaying = async () => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
        },
      },
    );
    return data.results;
  } catch (error) {
    return 'No data found';
  }
};

const SearchContent = async () => {
  const movieData = await fetchNowPlaying();
  return (
    <section
      className={`${movieData && movieData.length > 0 ? 'grid grid-cols-2 justify-items-center gap-[1.5rem] pb-[3rem] md:grid-cols-3 md:gap-[1.8rem] xl:grid-cols-4 xl:gap-[2.4rem]' : 'flex h-[60vh] w-full items-center justify-center'}`}
    >
      {movieData && movieData.length > 0 ? (
        movieData.map(
          (
            movie: { poster_path: string; title: string; vote_average: number; id: string },
            index: Key | null | undefined,
          ) => {
            return (
              <MovieCard
                path="/movies/"
                key={index}
                imagePath={movie.poster_path}
                title={movie.title}
                rating={movie.vote_average}
                id={movie.id}
              />
            );
          },
        )
      ) : (
        <div className="text-[1.5rem] font-light text-black/70 dark:text-gray-200/40">
          No Movies Found
        </div>
      )}
    </section>
  );
};

export default SearchContent;

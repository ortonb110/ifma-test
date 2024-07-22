'use client';
import { Key, Suspense } from 'react';
import MovieCard from './MovieCard';
import DataNavigator from './DataNavigator';
import Link from 'next/link';
import { RootState } from '../GlobalStore/Store';
import { useSelector, useDispatch } from 'react-redux';
import { resolveMovieData } from '../GlobalStore/Features/CreateSlice';
import { useEffect } from 'react';

const Content = ({ data }: { data: any }) => {
  const movieData = useSelector((state: RootState) => state.movies.movieDataHome);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resolveMovieData(data));
  }, [data]);
  return (
    <section className="pb-[2rem] pt-[8rem]">
      <div className="grid grid-cols-2 justify-items-center gap-[1.5rem] pb-[3rem] md:grid-cols-3 md:gap-[1.8rem] xl:grid-cols-4 xl:gap-[2.4rem]">
        {movieData.length > 0 &&
          movieData.map(
            (
              movie: { poster_path: string; title: string; vote_average: number; id: string },
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
      </div>
      {/* <DataNavigator pageNavigationHandler={pageNavigationHandler} /> */}
      {movieData.length > 0 && (
        <div className="flex w-full items-center justify-center">
          <Link
            href="/movies"
            className="text-[1.6rem] font-bold capitalize transition-colors duration-150 ease-in-out hover:text-primary"
          >
            more
          </Link>
        </div>
      )}
    </section>
  );
};

export default Content;
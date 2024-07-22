'use client';
import { Key, Suspense, use } from 'react';
import MovieCard from '@/app/Components/MovieCard';
import DataNavigator from '@/app/Components/DataNavigator';
import Link from 'next/link';
import { RootState } from '../GlobalStore/Store';
import { useSelector, useDispatch } from 'react-redux';
import { resolveMovies } from '../GlobalStore/Features/CreateSlice';
import { getMovies } from '@/app/actions/actions';
import { useCallback, useEffect, useState } from 'react';
import LoadingCard from '@/app/Components/LoadingCard';

interface Data {
  Data: string;
}

const MoviesContent = () => {
  const [contentData, setContentData] = useState<Data>();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const movieData = useSelector((state: RootState) => state.movies.movieData);
  const page = useSelector((state: RootState) => state.movies.page);
  const dispatch = useDispatch();

  const getData = useCallback(async ({ page }: { page: number }) => {
    setIsLoading(true);
    const data = await getMovies({ page: page });
    setIsLoading(false);
    setContentData(data);
  }, []);

  useEffect(() => {
    getData({ page: page });
  }, [page]);

  useEffect(() => {
    dispatch(resolveMovies(contentData));
  }, [contentData]);

  return (
    <section className="pb-[2rem] pt-[8rem]">
      {isLoading ? (
        <LoadingCard />
      ) : (
        <>
          <div className="grid grid-cols-2 justify-items-center gap-[1.5rem] pb-[3rem] md:grid-cols-3 md:gap-[1.8rem] xl:grid-cols-4 xl:gap-[2.4rem]">
            {movieData &&
              movieData.length > 0 &&
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
          {movieData && movieData.length > 0 && <DataNavigator fetch={fetch} />}
        </>
      )}
    </section>
  );
};

export default MoviesContent;

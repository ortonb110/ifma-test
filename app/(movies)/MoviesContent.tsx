'use client';
import { Key } from 'react';
import MovieCard from '@/app/Components/MovieCard';
import DataNavigator from '@/app/Components/DataNavigator';
import { RootState } from '../GlobalStore/Store';
import { useSelector, useDispatch } from 'react-redux';
import { resolveMovies, setMoviesLoading } from '../GlobalStore/Features/CreateSlice';
import { getMovies } from '@/app/actions/actions';
import { useCallback, useEffect, useState } from 'react';
import LoadingCard from '@/app/Components/LoadingCard';

const MoviesContent = () => {
  const [contentData, setContentData] = useState('');
  const movieData = useSelector((state: RootState) => state.movies.movieData);
  const search = useSelector((state: RootState) => state.movies.search);
  const page = useSelector((state: RootState) => state.movies.page);
  const loading = useSelector((state: RootState) => state.movies.moviesLoading);
  const dispatch = useDispatch();

  const getData = useCallback(async ({ page }: { page: number }) => {
    // window.scrollTo({ top: 0, behavior: 'smooth' });
    dispatch(setMoviesLoading(true));
    const data = await getMovies({ page: page });
    dispatch(setMoviesLoading(false));
    setContentData(data);
  }, []);

  useEffect(() => {
    if (search.length > 0 && movieData.length > 0) {
      return;
    } else {
      getData({ page: page });
    }
  }, [page]);

  useEffect(() => {
    if (search.length > 0 && movieData.length > 0) {
      return;
    } else {
      console.log('search', search);
      dispatch(resolveMovies(contentData));
    }
  }, [contentData]);

  return (
    <section className="pb-[2rem] pt-[8rem]">
      {loading ? (
        <LoadingCard />
      ) : (
        <>
          <div
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
          </div>
          {search.length > 0 ? '' : <DataNavigator path="movies" />}
        </>
      )}
    </section>
  );
};

export default MoviesContent;

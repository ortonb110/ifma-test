'use client';
import { useCallback, useEffect, useState, Key } from 'react';
import LoadingCard from '@/app/Components/LoadingCard';
import { useSelector, useDispatch } from 'react-redux';
import { resolveMoviesTV, setTvLoading } from '@/app/GlobalStore/Features/CreateSlice';
import { getTVShows } from '@/app/actions/actions';
import MovieCard from '@/app/Components/MovieCard';
import { RootState } from '@/app/GlobalStore/Store';
import DataNavigator from '@/app/Components/DataNavigator';



const ShowsContent = () => {
  const [contentData, setContentData] = useState('');
  const tvData = useSelector((state: RootState) => state.movies.tvData);
  const page = useSelector((state: RootState) => state.movies.tvPage);
  const loading = useSelector((state: RootState) => state.movies.tvLoading);
  const dispatch = useDispatch();

  const getData = useCallback(async ({ page }: { page: number }) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    dispatch(setTvLoading(true));
    const data = await getTVShows({ page: page, search: undefined });
    dispatch(setTvLoading(false));
    setContentData(data);
  }, []);

  useEffect(() => {
    getData({ page: page });
  }, [page]);

  useEffect(() => {
    dispatch(resolveMoviesTV(contentData));
  }, [contentData]);

  return (
    <section className="pb-[2rem] pt-[8rem]">
      {loading ? (
        <LoadingCard />
      ) : (
        <>
          <div
            className={`${tvData && tvData.length > 0 ? 'grid grid-cols-2 justify-items-center gap-[1.5rem] pb-[3rem] md:grid-cols-3 md:gap-[1.8rem] xl:grid-cols-4 xl:gap-[2.4rem]' : 'flex h-[60vh] w-full items-center justify-center'}`}
          >
            {tvData && tvData.length > 0 ? (
              tvData.map(
                (
                  movie: { poster_path: string; name: string; vote_average: number; id: string },
                  index: Key | null | undefined,
                ) => {
                  return (
                    <MovieCard
                      path="/tv-shows/"
                      key={index}
                      imagePath={movie.poster_path}
                      title={movie.name}
                      rating={movie.vote_average}
                      id={movie.id}
                    />
                  );
                },
              )
            ) : (
              <div className="text-[1.5rem] font-light text-black/70 dark:text-gray-200/40">
                No TV Shows Found
              </div>
            )}
          </div>
          {tvData && tvData.length > 0 && <DataNavigator path="tv-shows" />}
        </>
      )}
    </section>
  );
};

export default ShowsContent;

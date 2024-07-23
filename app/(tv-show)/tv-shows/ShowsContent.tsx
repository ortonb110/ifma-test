'use client';
import { useCallback, useEffect, useState, Key } from 'react';
import LoadingCard from '@/app/Components/LoadingCard';
import { useSelector, useDispatch } from 'react-redux';
import { resolveMoviesTV } from '@/app/GlobalStore/Features/CreateSlice';
import { getTVShows } from '@/app/actions/actions';
import MovieCard from '@/app/Components/MovieCard';
import { RootState } from '@/app/GlobalStore/Store';
import DataNavigator from '@/app/Components/DataNavigator';

interface Data {
  Data: string;
}

const ShowsContent = () => {
  const [contentData, setContentData] = useState<Data>();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const tvData = useSelector((state: RootState) => state.movies.tvData);
  const page = useSelector((state: RootState) => state.movies.tvPage);
  const dispatch = useDispatch();

  const getData = useCallback(async ({ page }: { page: number }) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsLoading(true);
    const data = await getTVShows({ page: page });
    setIsLoading(false);
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
      {isLoading ? (
        <LoadingCard />
      ) : (
        <>
          <div className="grid grid-cols-2 justify-items-center gap-[1.5rem] pb-[3rem] md:grid-cols-3 md:gap-[1.8rem] xl:grid-cols-4 xl:gap-[2.4rem]">
            {tvData &&
              tvData.length > 0 &&
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
              )}
          </div>
          {/* <DataNavigator pageNavigationHandler={pageNavigationHandler} /> */}
          {tvData && tvData.length > 0 && <DataNavigator path="tv-shows" />}
        </>
      )}
    </section>
  );
};

export default ShowsContent;

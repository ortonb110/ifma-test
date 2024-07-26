'use client';
import { CiSearch } from 'react-icons/ci';
import { useRouter } from 'next/navigation';
import { RootState } from '@/app/GlobalStore/Store';
import { useSelector, useDispatch } from 'react-redux';
import {
  resolveMovies,
  resolveMoviesTV,
  getSearchText,
  setMoviesLoading,
  setTvLoading,
} from '@/app/GlobalStore/Features/CreateSlice';
import { getSearchMovies, getTvShowsSearch } from '@/app/actions/actions';
import { useCallback, useState } from 'react';

interface Text {
  Text: string | undefined;
}

const SearchComponent = ({ text, path }: { text: string; path: string | undefined }) => {
  const search = useSelector((state: RootState) => state.movies.search);
  const router = useRouter();
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(getSearchText(e.target.value));
    setSearchText(e.target.value);
  };

  const getMoviesData = useCallback(async ({ text }: { text: string }) => {
    try {
      dispatch(setMoviesLoading(true));
      const data = await getSearchMovies({ search: text });
      dispatch(setMoviesLoading(false));
      dispatch(resolveMovies(data));
    } catch (error) {
      return 'There was an error fetching the data';
    }
  }, []);

  const getTVShowsData = useCallback(async ({ text }: { text: string }) => {
    try {
      dispatch(setTvLoading(true));
      const data = await getTvShowsSearch({ search: text });
      dispatch(setTvLoading(false));
      dispatch(resolveMoviesTV(data));
    } catch (error) {
      return 'There was an error fetching the data';
    }
  }, []);

  const handleFormSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchText.trim() === '' || searchText.length < 1) return;
    if (path === 'home') {
      getMoviesData({ text: searchText });
      router.push('/movies');
    } else if (path === 'tv-shows') {
      getTVShowsData({ text: searchText });
    } else {
      getMoviesData({ text: searchText });
    }
  };
  return (
    <form onSubmit={handleFormSubmission}>
      <div className="relative">
        <label
          htmlFor="search"
          className="absolute left-[10px] top-[50%] translate-y-[-50%] text-[2rem]"
        >
          <CiSearch />
        </label>
        <input
          onChange={onSearchChange}
          type="text"
          id="search"
          className="w-full rounded-xl border-[2px] border-gray-500/50 bg-transparent py-[1.2rem] pl-[4rem] pr-[1.2rem] text-[1.3rem] text-black/70 transition-colors duration-150 ease-out focus:border-primary focus:outline-none active:outline-none dark:text-white lg:w-[35%]"
          placeholder={`${text === 'undefined' ? 'Search Movies and TV Shows' : text}`}
        />
      </div>
    </form>
  );
};

export default SearchComponent;

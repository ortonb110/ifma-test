'use client';

import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { RootState } from '@/app/GlobalStore/Store';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, resolveMovies } from '@/app/GlobalStore/Features/CreateSlice';
import { useEffect } from 'react';

const DataNavigator = ({ fetch }: { fetch: any }) => {
  const page = useSelector((state: RootState) => state.movies.page);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch({ page: page });
      dispatch(resolveMovies(data));
      console.log(data);
    };
  }, [page]);

  return (
    <div className="flex w-full items-center justify-center gap-10">
      <button
        onClick={() => dispatch(decrement())}
        className="rounded-xl bg-primary px-[1rem] py-[0.5rem] text-[2rem] capitalize text-white"
      >
        <FaAngleLeft />
      </button>
      <p className="rounded-xl border-[1px] border-primary bg-transparent px-[1rem] text-[2rem] text-primary backdrop-blur-[10px] dark:text-white">
        {page}
      </p>
      <button
        onClick={() => dispatch(increment())}
        className="rounded-xl bg-primary px-[1rem] py-[0.5rem] text-[2rem] capitalize text-white"
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

export default DataNavigator;

'use client';

import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { RootState } from '@/app/GlobalStore/Store';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  incrementTV,
  decrementTV,
} from '@/app/GlobalStore/Features/CreateSlice';

const DataNavigator = ({ path }: { path: string }) => {
  const page = useSelector((state: RootState) => {
    if (path === 'movies') return state.movies.page;
    return state.movies.tvPage;
  });

  const dispatch = useDispatch();

  return (
    <div className="flex w-full items-center justify-center gap-10">
      <button
        onClick={() => {
          if (path === 'movies') {
            dispatch(decrement());
          } else {
            dispatch(decrementTV());
          }
        }}
        className="rounded-xl bg-primary px-[1rem] py-[0.5rem] text-[2rem] capitalize text-white"
      >
        <FaAngleLeft />
      </button>
      <p className="rounded-xl border-[1px] border-primary bg-transparent px-[1rem] text-[2rem] text-primary backdrop-blur-[10px] dark:text-white">
        {page}
      </p>
      <button
        onClick={() => {
          if (path === 'movies') {
            dispatch(increment());
          } else {
            dispatch(incrementTV());
          }
        }}
        className="rounded-xl bg-primary px-[1rem] py-[0.5rem] text-[2rem] capitalize text-white"
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

export default DataNavigator;

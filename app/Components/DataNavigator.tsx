'use client';

import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

const DataNavigator = ({ pageNavigationHandler }) => {
  return (
    <div className="flex w-full items-center justify-center gap-4">
      <button
        onClick={() => pageNavigationHandler({ path: 'prev' })}
        className="rounded-xl bg-primary px-[1rem] py-[0.5rem] text-[2rem] capitalize text-white"
      >
        <FaAngleLeft />
      </button>
      <button
        onClick={() => pageNavigationHandler({ path: 'next' })}
        className="rounded-xl bg-primary px-[1rem] py-[0.5rem] text-[2rem] capitalize text-white"
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

export default DataNavigator;

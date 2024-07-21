import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CiStar } from 'react-icons/ci';

const MovieCard = ({
  imagePath,
  title,
  rating,
  id,
}: {
  imagePath: string;
  title: string;
  rating: number;
  id: string;
}) => {
  return (
    <Link
      href={`/movies/${id}`}
      className="group relative h-[480px] rounded-xl bg-black/15 p-[8px] text-primary backdrop-blur-[5px] dark:text-white lg:w-full"
    >
      <div className="overflow-hidden rounded-xl">
        <Image
          src={`https://image.tmdb.org/t/p/w500${imagePath}`}
          alt={title}
          width={266}
          height={200}
          priority
          className="duration-250 h-[400px] w-full overflow-hidden rounded-xl object-cover transition-transform ease-in-out group-hover:scale-110"
        />
      </div>
      <h2 className="mt-[2.4rem] text-[1.4rem] font-bold transition-colors duration-150 ease-in-out group-hover:text-primary">
        {title}
      </h2>
      <p className="item-center absolute left-[2rem] top-[2rem] flex gap-1 rounded-xl bg-black/60 px-[10px] py-[5px] text-[#FFAD49] backdrop-blur-[5px]">
        <span className="text-[1.7rem]">
          <CiStar />
        </span>{' '}
        <span className="text-[1.3rem]">{rating.toFixed(1)}</span>
      </p>
    </Link>
  );
};

export default MovieCard;

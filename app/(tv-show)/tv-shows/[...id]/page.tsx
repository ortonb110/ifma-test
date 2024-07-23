import React from 'react';
import axios from 'axios';
import Image from 'next/image';

import { CiStar } from 'react-icons/ci';

const fetchMoviesDetails = async ({ id }: { id: string }) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.API_KEY}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
        },
      },
    );
    return data;
  } catch (error) {
    return null;
  }
};

const TvShows = async ({ params: { id } }: { params: { id: string } }) => {
  const data = await fetchMoviesDetails({ id: id.toString() });
  console.log(data);

  // Format the price above to USD using the locale, style, and currency.
  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  if (data && Object.keys(data).length > 0) {
    return (
      <section className="my-[12rem]">
        <div className="relative h-[377px] w-full overflow-hidden md:h-[427px] lg:h-[557px]">
          <Image
            src={`https://image.tmdb.org/t/p/w1280/${data.backdrop_path}`}
            alt={data.name}
            width={500}
            height={750}
            className="h-[300px] w-full rounded-[50px] object-cover md:h-[350px] lg:h-[480px]"
          />
          <div className="absolute bottom-[0px] z-20 min-h-[134px] w-full space-y-[5px] rounded-[30px] bg-black/20 p-[4rem] backdrop-blur-[20px] md:left-[10%] md:w-[60%]">
            <p className="flex gap-3 text-[1.1rem] font-bold text-primary/50 dark:text-gray-500/60">
              <span>MaileHereko</span> / <span>Movies</span>
            </p>
            <h1 className="text-[2rem] font-bold tracking-wider text-white md:text-[2.5rem]">
              {data?.name}
            </h1>
          </div>
        </div>
        <div className="mt-[80px] flex flex-col-reverse gap-y-[2rem] md:flex-row md:gap-[8%]">
          <div className="w-full">
            <Image
              src={`https://image.tmdb.org/t/p/w1280/${data.poster_path}`}
              alt={data.name}
              width={500}
              height={750}
              className="h-full rounded-[24px] object-center"
            />
          </div>
          <div className="w-full space-y-[2.4rem]">
            <h2 className="text-[2.4rem] font-semibold">{data?.tagline}</h2>
            <p className="text-[1.7rem] tracking-tight text-gray-500/80">{data?.overview}</p>
            <p className="flex w-fit items-center gap-1 rounded-xl bg-black/60 px-[10px] py-[5px] text-[#FFAD49] backdrop-blur-[5px]">
              <span className="text-[1.7rem]">
                <CiStar />
              </span>
              <span className="text-[1.5rem]">{data?.vote_average.toFixed(1)}</span>
            </p>
            <p className="flex flex-col space-y-[1rem] capitalize">
              <span className="text-[1.3rem] text-gray-500/80">type</span>
              <span className="text-[1.5rem] font-semibold text-black dark:text-white">
                TV Show
              </span>
            </p>

            <p className="flex flex-col space-y-[1rem] capitalize">
              <span className="text-[1.3rem] text-gray-500/80">status</span>
              <span className="text-[1.5rem] font-semibold text-black dark:text-white">
                {data?.status}
              </span>
            </p>
            <p className="flex flex-col space-y-[1rem]">
              <span className="text-[1.3rem] capitalize text-gray-500/80">Number of Seasons</span>
              <span className="text-[1.5rem] font-semibold text-black dark:text-white">
                {data?.number_of_seasons}
              </span>
            </p>
            <p className="flex flex-col space-y-[1rem] capitalize">
              <span className="text-[1.3rem] text-gray-500/80">Number of Episodes</span>
              <span className="text-[1.5rem] font-semibold text-black dark:text-white">
                {data?.number_of_episodes}
              </span>
            </p>
            {data.budget ? (
              <p className="flex flex-col space-y-[1rem]">
                <span className="text-[1.3rem] capitalize text-gray-500/80">budget</span>
                <span className="text-[1.5rem] font-semibold text-black dark:text-white">
                  {USDollar.format(data?.budget)}
                </span>
              </p>
            ) : (
              ''
            )}
            {data.revenue ? (
              <p className="flex flex-col space-y-[1rem]">
                <span className="text-[1.3rem] capitalize text-gray-500/80">revenue</span>
                <span className="text-[1.5rem] font-semibold text-black dark:text-white">
                  {USDollar.format(data.revenue)}
                </span>
              </p>
            ) : (
              ''
            )}
            <p className="flex flex-col space-y-[1rem] capitalize">
              <span className="text-[1.3rem] text-gray-500/80">genres</span>
              <span className="text-[1.5rem] font-semibold text-black dark:text-white">
                {data?.genres.map((genre: { name: string }) => genre.name).join(', ')}
              </span>
            </p>
            <p className="flex flex-col space-y-[1rem] capitalize">
              <span className="text-[1.3rem] text-gray-500/80">
                Production {data?.production_companies.length > 1 ? 'companies' : 'company'}
              </span>
              <span className="text-[1.5rem] font-semibold text-black dark:text-white">
                {data?.production_companies
                  .map((company: { name: string }) => company.name)
                  .join(', ')}
              </span>
            </p>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <div className="flex h-[100vh] items-center justify-center">
        <p>Invalid Movie ID</p>
      </div>
    );
  }
};

export default TvShows;

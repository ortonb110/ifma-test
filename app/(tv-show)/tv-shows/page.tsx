import Hero from '@/app/Components/Hero';
import { Suspense } from 'react';
import LoadingCard from '@/app/Components/LoadingCard';
import ShowTvs from '@/app/(tv-show)/tv-shows/ShowTvs';

const TVHomePage = () => {
  return (
    <main className="mt-[16rem]">
      <Hero
        title="MaileHereko"
        titleStyles="text-[1rem] font-light dark:text-gray-200/70"
        subtitle="TV Shows"
        subtitleStyles="text-[6rem] lg:text-[6rem] font-bold text-black/70 dark:text-white"
        searchText="Search tv shows"
        path="tv-shows"
      />
      <Suspense fallback={<LoadingCard />}>
        <ShowTvs />
      </Suspense>
    </main>
  );
};

export default TVHomePage;

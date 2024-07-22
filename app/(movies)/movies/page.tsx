import Hero from '@/app/Components/Hero';
import { Suspense } from 'react';
import LoadingCard from '@/app/Components/LoadingCard';
import ShowMovies from '@/app/(movies)/ShowMovies';
const MoviesPage = () => {
  return (
    <main className="mt-[16rem]">
      <Hero
        title="MaileHereko"
        titleStyles="text-[1rem] font-light dark:text-gray-200/70"
        subtitle="Movies"
        subtitleStyles="text-[6rem] lg:text-[6rem] font-bold text-black/70 dark:text-white"
        searchText="Search Movies"
      />
      <Suspense fallback={<LoadingCard />}>
        <ShowMovies />
      </Suspense>
    </main>
  );
};

export default MoviesPage;

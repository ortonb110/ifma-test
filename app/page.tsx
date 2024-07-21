import HomePage from '@/app/Components/HomePage';
import Hero from './Components/Hero';
import { Suspense } from 'react';
import LoadingCard from './Components/LoadingCard';

export default async function Home() {
  return (
    <main className="mt-[16rem]">
      <Hero
        title="MaileHereko"
        titleStyles="text-[4rem] lg:text-[6rem] font-bold"
        subtitle="Millions of movies, TV shows and more. Explore now."
        subtitleStyles="text-[1.5rem] text-black/70 dark:text-gray-200/40 font-light"
      />
      <Suspense fallback={<LoadingCard />}>
        <HomePage />
      </Suspense>
    </main>
  );
}

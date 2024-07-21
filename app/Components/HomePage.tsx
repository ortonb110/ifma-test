import Hero from './Hero';
import Content from './Content';
import { Suspense } from 'react';

const HomePage = () => {
  return (
    <section className="mt-[16rem]">
      <Hero
        title="MaileHereko"
        titleStyles="text-[4rem] lg:text-[6rem] font-bold"
        subtitle="Millions of movies, TV shows and more. Explore now."
        subtitleStyles="text-[1.5rem] text-black/70 dark:text-gray-200/40 font-light"
      />
      <Suspense fallback={<div>Loading...</div>}>
        <Content />
      </Suspense>
    </section>
  );
};

export default HomePage;

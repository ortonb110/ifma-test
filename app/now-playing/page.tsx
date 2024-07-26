import Hero from '@/app/Components/Hero';
import SearchContainer from '@/app/now-playing/SearchContainer';

const page = () => {
  return (
    <main className="mt-[16rem]">
      <Hero
        title="MaileHereko"
        titleStyles="text-[1rem] font-light dark:text-gray-200/70"
        subtitle="Playing now in theaters"
        subtitleStyles="text-[6rem] lg:text-[6rem] font-bold text-black/70 dark:text-white capitalize"
        searchText="Search Movies and TV Shows"
        path="movies"
      />
      <SearchContainer />
    </main>
  );
};

export default page;

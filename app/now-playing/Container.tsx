import SearchContent from './SearchContent';
import { Suspense } from 'react';
import LoadingCard from '../Components/LoadingCard';

const SearchContainer = () => {
  return (
    <section className="pt-[8rem]">
      <Suspense fallback={<LoadingCard />}>
        <SearchContent />
      </Suspense>
    </section>
  );
};

export default SearchContainer;

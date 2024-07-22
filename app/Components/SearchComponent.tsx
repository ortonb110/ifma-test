import { CiSearch } from 'react-icons/ci';

const SearchComponent = ({text}: {text:string}) => {
  return (
    <form>
      <div className="relative">
        <label
          htmlFor="search"
          className="absolute left-[10px] top-[50%] translate-y-[-50%] text-[2rem]"
        >
          <CiSearch />
        </label>
        <input
          type="text"
          id="search"
          className="w-full rounded-xl border-[2px] border-gray-500/50 bg-transparent py-[1.2rem] pl-[4rem] pr-[1.2rem] text-[1.3rem] text-black/70 transition-colors duration-150 ease-out focus:border-primary focus:outline-none active:outline-none dark:text-white lg:w-[35%]"
          placeholder={`${text === 'undefined' ? 'Search Movies and TV Shows' : text}`}
        />
      </div>
    </form>
  );
};

export default SearchComponent;

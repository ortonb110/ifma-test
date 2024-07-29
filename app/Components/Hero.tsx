import SearchComponent from './SearchComponent';

const Hero = ({
  title,
  titleStyles,
  subtitle,
  subtitleStyles,
  searchText,
  path,
  search,
}: {
  title: string;
  titleStyles: string;
  subtitle: string;
  subtitleStyles: string;
  searchText: string | 'undefined';
  path: string | undefined;
  search: boolean;
}) => {
  return (
    <section className="space-y-[2rem]">
      <div>
        <h1 className={titleStyles}>{title}</h1>
        <h2 className={subtitleStyles}>{subtitle}</h2>
      </div>
      {search && <SearchComponent text={searchText} path={path} />}
    </section>
  );
};

export default Hero;

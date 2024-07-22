import SearchComponent from './SearchComponent';

const Hero = ({
  title,
  titleStyles,
  subtitle,
  subtitleStyles,
  searchText,
}: {
  title: string;
  titleStyles: string;
  subtitle: string;
  subtitleStyles: string;
  searchText: string | 'undefined';
}) => {
  return (
    <section className="space-y-[2rem]">
      <div>
        <h1 className={titleStyles}>{title}</h1>
        <h2 className={subtitleStyles}>{subtitle}</h2>
      </div>
      <SearchComponent text={searchText}/>
    </section>
  );
};

export default Hero;

import Content from './Content';
import axios from 'axios';

const fetchMovies = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api?action=get&query=movies`,
    );
    return data;
  } catch (error) {
    return 'There was an error fetching the data';
  }
};

const HomePage = async () => {
  const data = await fetchMovies();
  return (
    <section>
      <Content data={data} />
    </section>
  );
};

export default HomePage;

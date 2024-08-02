import Content from './Content';
import axios from 'axios';

const fetchMovies = async () => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&page=1`,
      {
        headers: {
          Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
        },
      },
    );
    return data.results;
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

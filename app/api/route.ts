import axios from 'axios';
import { NextResponse } from 'next/server';

export const GET = async (request) => {
  const url = request.nextUrl.searchParams;
  const action = url.get('action');
  const query = url.get('query');

  try {
    if (action === 'get') {
      if (query === 'movies') {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&page=1`,
          {
            headers: {
              Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
            },
          },
        );
        return NextResponse.json(data.results);
      } }
  } catch (error) {
    return NextResponse.error();
  }
};


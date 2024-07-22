import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest, { params }: { params: any }) => {
  const url = request.nextUrl.searchParams;
  const id = params.id;
  const action = url.get('action');
  const query = url.get('query');

  try {
    if (action === 'get') {
      if (query === 'movies') {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
            },
          },
        );
        return NextResponse.json(data.results);
      }
    }
  } catch (error) {
    return NextResponse.error();
  }
};

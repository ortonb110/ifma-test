'use client';
import { getMovies } from '@/app/actions/actions';
import { useCallback, useEffect, useState } from 'react';

interface Data {
  name: string;
}
const Test = () => {
  const [data, setData] = useState<Data>();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getData = useCallback(async () => {
    setIsLoading(true);
    const data = await getMovies({ page: 1 });
    setIsLoading(false);
    setData(data);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return <div>test</div>;
};

export default Test;

import useSWR from 'swr';

import api from '../services/api';

const useFetch = (url, initialData) => {
  const { data, error, mutate } = useSWR(url, async (params) => {
    const response = await api.get(params);

    return response.data;
  }, {
    initialData,
  });

  return { data, error, mutate };
};

export default useFetch;

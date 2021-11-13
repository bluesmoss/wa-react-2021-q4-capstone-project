import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useGetDataAPI(query, pageSize, activePage) {
  const currentPage = activePage ? activePage : 1;
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [ results, setResults] = useState(() => ({
    data: {},
    isLoading: true,
  }));
  
  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();
    async function getDataAPI(query, pageSize) {
      try {
        setResults({ data: {}, isLoading: true });

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(query)}&lang=en-us&pageSize=${pageSize}&page=${currentPage}`,
          {
            signal: controller.signal,
          }
        );  
        const data = await response.json();

        setResults({ data, isLoading: false });
      } catch (err) {
        setResults({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getDataAPI(query, pageSize);

    return () => {
      controller.abort();
    };
  }, [apiRef, currentPage, isApiMetadataLoading, pageSize, query]);

  return results;
}
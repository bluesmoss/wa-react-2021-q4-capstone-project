import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useSearchData(searchTerm) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [searchData, setSearchData] = useState(() => ({
    data: {},
    isLoading: true,
  }));
  
  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();
    async function getSearchData(searchTerm) {
      try {
        setSearchData({ data: {}, isLoading: true });

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=%5B%5Bat(document.type%2C%20%22product%22)%5D%5D&q=%5B%5Bfulltext(document%2C%20%22${searchTerm}%22)%5D%5D&lang=en-us&pageSize=20`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();

        setSearchData({ data, isLoading: false });
      } catch (err) {
        setSearchData({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getSearchData(searchTerm);

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);
  
  return searchData;
}
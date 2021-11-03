import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useProductDetails(productId) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [productDetails, setProductDetails] = useState(() => ({
    data: {},
    isLoading: true,
  }));
  
  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();
    async function getProductDetails(productId) {
      try {
        setProductDetails({ data: {}, isLoading: true });
        
        const response = await fetch(
            `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
              `[[at(document.id, "${productId}")]]`,
            )}&lang=en-us`,
            {
              signal: controller.signal,
            },
          );

        const data = await response.json();

        const [product] = data.results;
        
        
        setProductDetails({ data: product.data, isLoading: false });
      } catch (err) {
        setProductDetails({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getProductDetails(productId);

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);

  return productDetails;
}
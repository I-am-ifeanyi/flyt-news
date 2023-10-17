import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { NEWS_API_KEY } from '@env';
import { categoryState } from './categoryState';
import { useCountryStore } from '../../countryDetails/state/setCountryState';
export default function apiHomeData() {
  const { countryCode } = useCountryStore();
  const { category, sortNewsBy, headlinesCategory } = categoryState();

  const topHeadlineEndPoint = `https://newsapi.org/v2/top-headlines?country=us&pageSize=100&category=${headlinesCategory}&apiKey=${NEWS_API_KEY}`;

  const everythingEndPoint = `https://newsapi.org/v2/everything?q=${category}&sortBy=${sortNewsBy}&apiKey=${NEWS_API_KEY}`;

  const {
    isLoading: topHeadlinesIsLoading,
    error: topHeadlineError,
    data: topHeadlinesData,
    refetch: topHeadlinesRefetch,
    isRefetching: topHeadlineRefetching,
  } = useQuery({
    queryKey: ['topHeadline-data'],
    queryFn: () => fetch(topHeadlineEndPoint).then(res => res.json()),
    staleTime: 86400000,
    cacheTime: 86400000,
  });
  const {
    isLoading: isEverythingLoading,
    error: everythingError,
    data: everythingData,
    refetch: everythingRefetch,
    isRefetching: everythingDataRefetching,
  } = useQuery({
    queryKey: ['everything-data', category],
    queryFn: () => fetch(everythingEndPoint).then(res => res.json()),
    enabled: !!category,
    staleTime: 86400000,
    cacheTime: 86400000,
  });

  useEffect(() => {
    everythingRefetch();
  }, [category, sortNewsBy]);

  useEffect(() => {
    topHeadlinesRefetch();
  }, [headlinesCategory]);

  return {
    topHeadlinesData,
    everythingData,
    topHeadlinesIsLoading,
    isEverythingLoading,
    everythingError,
    topHeadlineError,
    everythingRefetch,
    topHeadlinesRefetch,
    everythingDataRefetching,
    topHeadlineRefetching,
  };
}

//

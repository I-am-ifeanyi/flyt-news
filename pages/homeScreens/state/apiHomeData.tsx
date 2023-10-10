import { useQuery } from '@tanstack/react-query';

import { categoryState } from './categoryState';
import { useCountryStore } from '../../countryDetails/state/setCountryState';
export default function apiHomeData() {
  const { countryCode } = useCountryStore();
  const { category } = categoryState();

  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://api.github.com/repos/TanStack/query').then(res =>
        res.json(),
      ),
  });
  return { data };
}

// 5e0c0f728bc44c64879a26bec0782354

import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { axiosInstanceWithoutCredentials } from 'utils/axios-instance';
import { Place } from 'types/generated';

export default function usePlaces(
  { search }: { search: string },
): UseQueryResult<AxiosResponse<Place[]>, AxiosError> {
  const fetchPlaces = () => {
    const params: Record<string, string> = {};

    params.search_term = search;

    return axiosInstanceWithoutCredentials.get('/aviasales/places', { params });
  };

  return useQuery({
    queryFn: fetchPlaces,
    queryKey: ['places'],
  });
}

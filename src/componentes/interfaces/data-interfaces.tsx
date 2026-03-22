import type { UseQueryOptions, QueryKey } from '@tanstack/react-query';

// Interface baseada no que definimos no Django/Postgres
export interface UserProfile {
  id: string;
  full_name: string;
  email: string;
  balance: number;
}

export interface headersDataBudy {
  dataheader?: UserProfile;
} 

export interface FetchQueryOptions<T = unknown> {
  queryKey: QueryKey;
  options?: Omit<UseQueryOptions<T, Error>, 'queryFn' | 'queryKey' | 'enable'>;
  enabled?: boolean;
  refetchOnWindowFocus?: boolean;
}


export interface RequestOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'; 
  headers: Headers;
  body?: string;
}

export interface UserContextType {
  user: UserProfile | null;
  isLoading: boolean;
  isError: boolean;
}
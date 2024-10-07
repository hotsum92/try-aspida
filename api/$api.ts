import type { AspidaClient } from 'aspida';
import type { Methods as Methods_odq9yo } from './v1/users';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/v1/users';
  const GET = 'GET';

  return {
    v1: {
      users: {
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_odq9yo['get']['resBody']>(prefix, PATH0, GET, option).json(),
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_odq9yo['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH0}`,
      },
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;

// eslint-disable-next-line import/named
import { QueryClient } from '@tanstack/react-query';
import { cache } from 'react';

const getQueryClient = cache(() => new QueryClient());

export default getQueryClient;

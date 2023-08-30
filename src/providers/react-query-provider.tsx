'use client';

import { useState } from 'react';

// eslint-disable-next-line import/named
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface Properties {
  children: React.ReactNode;
}

export default function Providers({ children }: Properties): JSX.Element {
  const [queryClient] = useState(() => new QueryClient());

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

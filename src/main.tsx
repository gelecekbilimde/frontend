import { StrictMode as React } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// eslint-disable-next-line import/named
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App.tsx';
import './index.css';

const queryClient = new QueryClient();

const body = document.querySelector('body') as HTMLElement;
body.className = 'flex justify-center h-screen w-full overflow-x-hidden overflow-y-scroll';

const dom = document.querySelector('#root') as HTMLElement;
dom.className = 'flex max-w-full flex-col';

const root = createRoot(dom);

root.render(
  <React>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  </React>,
);

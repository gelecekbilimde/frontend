import { StrictMode as React } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// eslint-disable-next-line import/named
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './index.css';
import App from './App.tsx';
import SEO from './seo.tsx';

const queryClient = new QueryClient();

const body = document.querySelector('body') as HTMLElement;
body.className = 'flex justify-center h-screen w-full overflow-x-hidden overflow-y-scroll';

const dom = document.querySelector('#root') as HTMLElement;
dom.className = 'flex flex-col max-w-screen-xl w-full';

const root = createRoot(dom);

root.render(
  <React>
    <SEO />
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  </React>,
);

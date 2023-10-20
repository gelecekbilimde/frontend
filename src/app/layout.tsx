import './globals.css';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import Providers from '@/app/provider';
import { Toaster } from '@/components/ui/toaster';

const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--gb-font-sans',
});

export const metadata: Metadata = {
  title: 'Gelecek Bilimde',
  description:
    'Gelecek Bilimde, toplum ile bilim arasındaki köprü olmayı amaçlayan popüler bilim değil, bilim iletişimi platformu!',
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html className={poppins.className} lang="tr">
      <body className="flex min-h-screen flex-col items-center overflow-x-hidden px-4">
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}

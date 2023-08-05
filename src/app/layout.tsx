import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--eb-font-sans',
});

export const metadata: Metadata = {
  title: 'Gelecek Bilimde',
  description:
    'Gelecek Bilimde, toplum ile bilim arasındaki köprü olmayı amaçlayan popüler bilim değil, bilim iletişimi platformu!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

import { Helmet, HelmetProvider } from 'react-helmet-async';
import useSeoStore from './stores/SeoStore.tsx';

export default function SEO(): JSX.Element {
  const seo = useSeoStore((state) => state.metadata);
  return (
    <HelmetProvider>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />

        <meta property="og:type" content={seo.facebookType} />
        <meta property="og:title" content={seo.facebookTitle} />
        <meta property="og:description" content={seo.facebookDescription} />

        <meta name="twitter:creator" content={seo.twitterCreator} />
        <meta name="twitter:card" content={seo.twitterCard} />
        <meta name="twitter:title" content={seo.twitterTitle} />
        <meta name="twitter:description" content={seo.twitterDescription} />
      </Helmet>
    </HelmetProvider>
  );
}

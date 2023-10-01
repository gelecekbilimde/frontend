'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

import HeroData, { type IHero } from './hero.constant';
import HeroFooter from './hero-footer';
import HeroHeader from './hero-header';
import HeroSection from './hero-section';

export default function HeroComponent(): JSX.Element {
  const router = useRouter();

  const onPushPage = (e: MouseEvent, item: IHero) => {
    e.stopPropagation();
    router.push(`/${item.authorname}/status/${item.postID}`);
  };

  return (
    <main>
      {HeroData.map((item: IHero) => (
        <article
          key={item.postID}
          itemScope
          itemType="https://schema.org/BlogPosting"
          className="-z-10 max-w-xl space-y-5 rounded-xl border border-gray/40 bg-white pb-5 dark:bg-black"
        >
          <meta itemProp="wordCount" content="74" />
          <HeroHeader item={item} onPushPage={onPushPage} />
          <div
            onClick={(e) => {
              onPushPage(e, item);
            }}
          >
            <HeroSection item={item} />
            <HeroFooter />
          </div>
        </article>
      ))}
    </main>
  );
}

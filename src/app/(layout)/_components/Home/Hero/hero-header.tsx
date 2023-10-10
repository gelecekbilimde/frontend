import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { DropAction } from './dropdowns';
import { type IHero } from './hero.constant';

interface Properties {
  item: IHero;
  onPushPage: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, item: IHero) => void;
}

export default function HeroHeader({ onPushPage, item }: Properties): JSX.Element {
  return (
    <header className="flex items-end justify-between px-6">
      <section className="flex items-center">
        <div className="z-[-1000]">
          {item.avatar !== '' && item.avatar !== undefined && item.avatar.length > 0 ? (
            <Image src={item.avatar} width={48} height={48} alt={`${item.authorname}Avatar`}></Image>
          ) : (
            <div className="me-3 h-12 w-12 rounded-full bg-gray"></div>
          )}
        </div>
        <div className="mt-1 text-start">
          <p itemProp="author" itemScope itemType="https://schema.org/Person" className="font-semibold">
            <span itemProp="name">
              <Link itemProp="url" href="/">
                {item.author}
              </Link>
            </span>
          </p>
          <p itemProp="category" itemScope itemType="https://schema.org/category" className="-mt-1 font-semibold">
            <span itemProp="CategoryCode" className="text-sm font-medium opacity-60">
              <Link itemProp="url" href="/">
                {item.category}
              </Link>
            </span>
          </p>
        </div>
      </section>

      <section className="flex items-center space-x-2">
        <div className="flex flex-col items-end">
          <time itemProp="readingTime" dateTime="1h1m" className="text-sm font-medium opacity-60">
            {item.readingTime} min read
          </time>
          <time
            itemProp="datePublished"
            dateTime="2023-09-05T17:30:57+01:00"
            className="text-sm font-medium opacity-60"
          >
            {item.date}
          </time>
        </div>
        <div>
          <DropAction />
        </div>
      </section>
    </header>
  );
}

'use client';
import { Heart, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

import { Badge } from '@/components/ui/badge';

import HeroData, { type IHero } from './hero.constant';

export default function HeroComponent(): JSX.Element {
  const router = useRouter();

  return (
    <>
      {HeroData.map((item: IHero) => (
        <div key={item.postID}>
          <article
            itemScope
            itemType="https://schema.org/BlogPosting"
            onClick={() => {
              router.push(`/${item.authorname}/status/${item.postID}`);
            }}
            className="w-[44rem] space-y-5 rounded-xl border border-gray/40 bg-white py-5 dark:bg-black"
          >
            <meta itemProp="wordCount" content="74" />
            <header className="flex items-end justify-between px-6">
              <div className="flex items-center">
                {item.avatar !== null && item.avatar !== '' ? (
                  <Image src={item.avatar} alt={item.authorname + 'avatar'} width={48} height={48} />
                ) : (
                  <div
                    itemProp="avatar"
                    itemScope
                    itemType="https://schema.org/Person"
                    className="me-3 h-12 w-12 rounded-full bg-gray"
                  ></div>
                )}
                <div className="mt-1 text-start">
                  <p itemProp="author" itemScope itemType="https://schema.org/Person" className="font-semibold">
                    <span itemProp="name">
                      <Link itemProp="url" href="/">
                        {item.authorname}
                      </Link>
                    </span>
                  </p>
                  <h1 className="-mt-1 text-sm font-medium opacity-60">{item.category}</h1>
                </div>
              </div>
              <time
                itemProp="datePublished"
                dateTime="2023-09-05T17:30:57+01:00"
                className="text-sm font-medium opacity-60 "
              >
                2 day ago
              </time>
            </header>

            <figure>
              {item.image !== null && item.image !== '' ? (
                <Image src="/images/hero_ımage.jpg" alt="hero_images" width={704} height={288}></Image>
              ) : (
                <div className="h-72 w-full"></div>
              )}
            </figure>

            <div className="px-6">
              <h1 itemProp="name" className="mb-2 break-words text-2xl font-bold">
                {item.title}
              </h1>
              <section itemProp="articleBody">
                <p>{item.content}</p>
              </section>
            </div>

            <div className="flex items-center justify-between space-x-6 px-6">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Heart className="h-5 w-5" />
                  <h1 className="text-sm font-semibold opacity-60">100</h1>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5" />
                  <h1 className="text-sm font-semibold opacity-60">100</h1>
                </div>
              </div>

              <Badge>Devamını Oku</Badge>
            </div>
          </article>
        </div>
      ))}
    </>
  );
}

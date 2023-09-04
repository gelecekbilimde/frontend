/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
'use client';
import React from 'react';
import { Heart, MessageCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const data = {
  username: 'yusufgunes',
  postID: '123456789',
};

export default function HeroComponent(): JSX.Element {
  const router = useRouter();

  return (
    <article
      itemScope
      itemType="https://schema.org/BlogPosting"
      onClick={() => {
        router.push(`/${data.username}/status/${data.postID}`);
      }}
      className="w-[44rem] space-y-5 rounded-xl border border-gray/40 bg-white py-5 dark:bg-black"
    >
      <meta itemProp="wordCount" content="74" />
      <header className="flex items-end justify-between px-6">
        <div className="flex items-center">
          <div className="me-3 h-12 w-12 rounded-full bg-gray"></div>
          <div className="mt-1 text-start">
            <p itemProp="author" itemScope itemType="https://schema.org/Person" className="font-semibold">
              <span itemProp="name">
                <Link itemProp="url" href="/">
                  Yusuf Güneş
                </Link>
              </span>
            </p>
            <h1 className="-mt-1 text-sm font-medium opacity-60">Uzay Bilimi</h1>
          </div>
        </div>
        <time itemProp="datePublished" dateTime="2023-09-05T17:30:57+01:00" className="text-sm font-medium opacity-60 ">
          2 day ago
        </time>
      </header>

      <figure>
        <Image src="/images/hero_ımage.jpg" alt="hero_images" width={704} height={300}></Image>
      </figure>

      <div className="px-6">
        <h1 itemProp="name" className="mb-2 break-words text-2xl font-bold">
          Lorem Ipsum Nedir?
        </h1>
        <section itemProp="articleBody">
          <p>
            Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir
            matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı
            15&apos;lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını
            sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960&apos;larda Lorem
            Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi
            Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur...
          </p>
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
  );
}

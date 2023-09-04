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

export default function HeroComponent() {
  const router = useRouter();
  return (
    <section
      onClick={() => router.push(`/${data.username}/status/${data.postID}`)}
      className="w-full bg-white dark:bg-black py-5 rounded-[0.7rem] space-y-[1.25rem] border border-gray border-opacity-40 max-w-[44rem] min-w-[44rem]"
    >
      <div className="flex justify-between items-end px-6">
        <span className="flex item-center">
          <div className="w-12 h-12 bg-gray rounded-full mr-3"></div>
          <span className="text-start mt-[2.5px]">
            <h1 className="font-semibold">Yusuf Güneş</h1>
            <h1 className="text-sm font-medium opacity-60 mt-[-2.5px]">Uzay Bilimi</h1>
          </span>
        </span>
        <p className="text-sm font-medium opacity-60 ">2 day ago</p>
      </div>

      <div>
        <Image src="/images/hero_ımage.jpg" alt="hero_images" width={704} height={300}></Image>
      </div>

      <div className="px-6">
        <h1 className="text-2xl mb-2 font-bold break-words">Lorem Ipsum Nedir?</h1>
        <p>
          Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir
          matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden
          beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle
          kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da
          içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri
          içeren masaüstü yayıncılık yazılımları ile popüler olmuştur...
        </p>
      </div>

      <div className="flex items-center space-x-6 px-6 justify-between">
        <span className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Heart className="w-5 h-5" />
            <h1 className="text-sm font-semibold opacity-60">100</h1>
          </div>
          <div className="flex items-center space-x-2">
            <MessageCircle className="w-5 h-5" />
            <h1 className="text-sm font-semibold opacity-60">100</h1>
          </div>
        </span>

        <Badge>Devamını Oku</Badge>
      </div>
    </section>
  );
}


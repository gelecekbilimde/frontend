import Image from 'next/image';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { Separator } from '@/components/ui/separator';

import { type IRecentVideo } from './vidoe';

const RecentVideos = () => {
  const recentVideosData: IRecentVideo[] = [
    {
      title: 'İstanbul Depremine Hazırlıklı mıyız? @AyhanTarakci @MesutCevik @psy.cevdet.acarsoy',

      imageUrl:
        'https://i.ytimg.com/vi/dfY9173VSPg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAu3J843mPQI2dOHjwHUJjUwNvdmw',
    },

    {
      title: 'İstanbul Depremi Ne Kadar Etkili Olabilir? @technopat @umutayildiz',

      imageUrl:
        'https://i.ytimg.com/vi/5YBn6_hSZNo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDPydBPJQtnTxIRHSN-2_fMTxVQBw',
    },

    {
      title: 'Müzik Duygu Durumumuzu Etkiler mi?  @TevfikUyar1 @acikbilimtv @MuzafferCorlu',

      imageUrl:
        'https://i.ytimg.com/vi/Z4_sw3UTY3o/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCtwzW4XSyOh64O9qyXpETfi3CZdQ',
    },

    {
      title: 'Tolga Özuygur ile Sohbet @Hallederiz',

      imageUrl:
        'https://i.ytimg.com/vi/InVYhbS7Kek/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA2v7_wYLqMNhco9p2xbh3acLBjwg',
    },
    {
      title: 'Enkaz Altındaki İnsanların Tespiti Nasıl Yapılır? @FRPNETVideo @evrimagaci @technopat',

      imageUrl:
        'https://i.ytimg.com/vi/H4VeQnNDQvU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAcwccmvGU8NTT-zwlyZ5RBBXGu7g',
    },
  ];

  return (
    <Card className="col-span-3">
      <CardHeader className="!pb-3">
        <CardTitle>Son Yayınlar</CardTitle>

        <CardDescription>GelecekBilim'de yayınlanan son 5 video.</CardDescription>
      </CardHeader>

      <CardContent>
        <Separator className="mb-4" />

        <div className="flex flex-col space-y-4">
          {recentVideosData.map((video, index) => (
            <RecentVideos.Item key={index} video={video} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

RecentVideos.Item = ({ video }: { video: IRecentVideo }) => (
  <div className="flex cursor-pointer items-center">
    <Image className="rounded" src={video.imageUrl} alt={video.title} width={100} height={100} />

    <div className="ml-4 space-y-1">
      <p className="text-muted line-clamp-2 text-ellipsis text-sm">{video.title}</p>

      <p className="text-muted-foreground text-xs">1 gün önce</p>
    </div>
  </div>
);

export default RecentVideos;


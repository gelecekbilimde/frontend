'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export default function ProfileButtons(): JSX.Element {
  const [isFollowing, setIsFollowing] = useState(false);
  const { toast } = useToast();

  return (
    <div className="flex w-full flex-row gap-4">
      <Button
        className={`w-1/2 ${isFollowing ? 'bg-green-700 hover:bg-green-800' : ''}`}
        onClick={() => {
          setIsFollowing((state) => {
            toast(
              !state
                ? { title: 'Takip edildi', description: 'Kullanıcı takip edildi.' }
                : { title: 'Takipten çıkarıldı', description: 'Kullanıcı takipten çıkarıldı.' },
            );
            return !state;
          });
        }}
      >
        {isFollowing ? 'Takip Ediliyor' : 'Takip Et'}
      </Button>
      <Button className="w-1/2">Mesaj</Button>
    </div>
  );
}

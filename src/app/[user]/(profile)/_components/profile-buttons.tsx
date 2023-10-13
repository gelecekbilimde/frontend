'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';

export default function ProfileButtons(): JSX.Element {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="flex w-full flex-row gap-4">
      <Button
        className={`w-1/2 ${isFollowing ? 'bg-green-700 hover:bg-green-800' : ''}`}
        onClick={() => {
          setIsFollowing(!isFollowing);
        }}
      >
        {isFollowing ? 'Takip Ediliyor' : 'Takip Et'}
      </Button>
      <Button className="w-1/2">Mesaj</Button>
    </div>
  );
}

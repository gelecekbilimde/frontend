import React from 'react';
import HeroLayout from './heroLayout';
import HeroComponent from './HeroComponent';

export default function Index() {
  // href={`/${data.username}/status/${data.postID}`}
  return (
    <HeroLayout>
      <main className='space-y-5'>
        <HeroComponent/>
        <HeroComponent/>
        <HeroComponent/>
      </main>
    </HeroLayout>
  );
}


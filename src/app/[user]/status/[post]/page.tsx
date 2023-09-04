import React from 'react';
import MainLayout from '@/app/(layout)/_components/MainLayout';
import { ArrowLeftIcon } from 'lucide-react';
import Hero from '@/app/(layout)/_components/Home/Hero/index';
import Link from 'next/link';
import HeroComponent from '@/app/(layout)/_components/Home/Hero/HeroComponent';

export default function Page() {
  return (
    <MainLayout>
      <main className="max-w-[44rem] min-w-[44rem]">
        <h1>WRITE PAGE</h1>
      </main>
    </MainLayout>
  );
}


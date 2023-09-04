import React from 'react'

export default function HeroLayout({children}: {children: React.ReactNode}) {
  return (
    <main className='max-w-[44rem] min-w-[44rem]'>
      {children}
    </main>
  )
}

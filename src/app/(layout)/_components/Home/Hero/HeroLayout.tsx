import React from 'react';

export default function HeroLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return <div className="w-full">{children}</div>;
}

'use client';

import { useState } from 'react';
import { ChevronRightIcon } from 'lucide-react';

import MenuButton from './menu-button';

interface Properties {
  title: string;
  size?: number;
  children: JSX.Element | JSX.Element[];
}

export default function CategoryCollapser({ title, size = 2, children }: Properties): JSX.Element {
  const [state, setState] = useState<boolean>(false);
  const height = 36 * size;
  const icon = <ChevronRightIcon className={`transition-all ${state ? 'rotate-90' : ''}`} height={16} width={16} />;
  const onClick: () => void = () => {
    setState((state: boolean) => !state);
  };
  return (
    <>
      <MenuButton onClick={onClick} icon={icon}>
        {title}
      </MenuButton>
      <div
        className="flex max-h-0 flex-col overflow-hidden transition-all"
        style={{ maxHeight: state ? `${height}px` : '0px' }}
      >
        {children}
      </div>
    </>
  );
}

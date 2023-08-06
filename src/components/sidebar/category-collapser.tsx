'use client';

import { useState } from 'react';
import { ChevronRightIcon } from 'lucide-react';

import MenuButton from './menu-button';

interface Properties {
  title: string;
  size?: number;
  children: JSX.Element | JSX.Element[];
}

export default function CategoryCollapser({ title, size = 2, children }: Properties) {
  const [state, setState] = useState<boolean>(false);
  const height = 32 * size;
  return (
    <>
      <MenuButton
        onClick={() => setState((state: boolean) => !state)}
        icon={<ChevronRightIcon className={`transition-all ${state ? 'rotate-90' : ''}`} height={16} width={16} />}
      >
        {title}
      </MenuButton>
      <div
        className="max-h-0 gap-2 overflow-hidden transition-all"
        style={{ maxHeight: state ? `${height}px` : '0px' }}
      >
        {children}
      </div>
    </>
  );
}

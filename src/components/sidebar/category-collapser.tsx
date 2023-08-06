import { Suspense, useState } from 'react';
import MenuButton from './menu-button';

export default function CategoryCollapser({
  title,
  size = 2,
  children,
}: {
  title: string;
  size?: number;
  children: React.ReactNode;
}) {
  const [state, setState] = useState<boolean>(false);
  return (
    <Suspense>
      <MenuButton title={title} onClick={() => setState((state: boolean) => !state)} />
      <div className="max-h-0 overflow-hidden transition-all" style={{ maxHeight: state ? `${size * 28}px` : '0px' }}>
        {children}
      </div>
    </Suspense>
  );
}

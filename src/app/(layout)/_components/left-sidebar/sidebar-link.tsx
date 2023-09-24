import type dynamicIconImports from 'lucide-react/dynamicIconImports';
import Link from 'next/link';
import type { ReactNode } from 'react';

import Icon from '@/lib/get-luicide-icon';

import SidebarButton from './sidebar-button';

interface Properties {
  slug: string;
  icon: keyof typeof dynamicIconImports;
  children: ReactNode;
}

export default function SidebarLink({ slug, icon, children }: Properties): JSX.Element {
  return (
    <Link href={`category/${slug}`}>
      <SidebarButton leftIcon={<Icon name={icon} color="black" size={16} />}>{children}</SidebarButton>
    </Link>
  );
}

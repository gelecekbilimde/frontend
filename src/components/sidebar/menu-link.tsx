import Link from 'next/link';
import { forwardRef, type AnchorHTMLAttributes } from 'react';

import MenuButton from './menu-button';

interface Properties extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: JSX.Element;
  isChild?: boolean;
}

const MenuLink = forwardRef<HTMLAnchorElement, Properties>(({ href, children, icon, isChild }, reference) => (
  <Link href={href ?? '/'} ref={reference} passHref>
    <MenuButton icon={icon} isChild={isChild}>
      {children}
    </MenuButton>
  </Link>
));

MenuLink.displayName = 'MenuLink';

export default MenuLink;

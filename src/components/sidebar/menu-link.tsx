import Link from 'next/link';
import { forwardRef, type AnchorHTMLAttributes } from 'react';
import MenuButton from './menu-button';

interface Properties extends AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  icon?: JSX.Element;
  fontWeight?: 'medium' | 'normal' | 'bold';
}

const MenuLink = forwardRef<HTMLAnchorElement, Properties>(({ href, title, fontWeight, icon }, reference) => (
  <Link href={href ?? '/'} ref={reference}>
    <MenuButton fontWeight={fontWeight} title={title} icon={icon} />
  </Link>
));

MenuLink.displayName = 'MenuLink';

export default MenuLink;

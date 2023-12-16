import type { ReactNode } from 'react';

interface Properties {
  onClick?: () => void;
  children: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export default function SidebarButton({ onClick, children, leftIcon, rightIcon }: Properties): JSX.Element {
  return (
    <button
      onClick={onClick}
      className="my-1 flex h-7 w-full min-w-[160px] items-center justify-between gap-2 rounded-lg bg-cream px-2 py-5 text-sm transition-colors duration-200 hover:bg-neutral-300"
    >
      <span className="flex flex-row items-center gap-2">
        {leftIcon}
        {children}
      </span>
      {rightIcon}
    </button>
  );
}

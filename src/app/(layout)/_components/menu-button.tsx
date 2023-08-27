import { CircleDashedIcon } from 'lucide-react';

interface Properties extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: JSX.Element;
  isChild?: boolean;
}

export default function MenuButton({ children, isChild, icon, onClick }: Properties): JSX.Element {
  return (
    <button
      onClick={onClick}
      className={`flex max-h-7 min-w-[160px] items-center gap-2 rounded-lg bg-cream px-2 py-1 text-sm transition-colors duration-200 hover:bg-neutral-300 ${
        isChild === true ? 'ps-4' : ''
      }`}
    >
      {icon ?? <CircleDashedIcon height={16} width={16} />}
      {children}
    </button>
  );
}

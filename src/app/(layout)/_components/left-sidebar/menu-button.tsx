import { CircleDashedIcon } from 'lucide-react';

interface Properties extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: JSX.Element;
}

export default function MenuButton({ children, icon, onClick }: Properties): JSX.Element {
  const defaultIcon = <CircleDashedIcon height={16} width={16} />;

  return (
    <button
      onClick={onClick}
      className="my-1 flex h-7 w-full min-w-[160px] items-center gap-2 rounded-lg bg-cream px-2 py-1 text-sm transition-colors duration-200 hover:bg-neutral-300"
    >
      {icon ?? defaultIcon}
      {children}
    </button>
  );
}

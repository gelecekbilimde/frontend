interface Properties extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: JSX.Element;
  secondIcon?: JSX.Element;
  isChild?: boolean;
}

export default function MenuButton({ children, icon, secondIcon, isChild, onClick }: Properties): JSX.Element {
  return (
    <button
      onClick={onClick}
      className="flex min-w-[160px] gap-2 rounded-lg bg-cream px-2 py-1 transition-colors duration-200 hover:bg-neutral-300"
    >
      <div className="h-4 w-4">{icon}</div>
      <div className={`text-sm ${isChild ? 'ps-2' : ''}`}>{children}</div>
      <div className="h-4 w-4">{secondIcon}</div>
    </button>
  );
}

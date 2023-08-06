interface Properties extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  fontWeight?: 'medium' | 'normal' | 'semibold' | 'bold';
  icon?: JSX.Element;
}

export default function MenuButton({ title, icon, fontWeight = 'semibold', onClick }: Properties): JSX.Element {
  return (
    <button
      onClick={onClick}
      className="flex min-w-[160px] gap-2 rounded-lg bg-cream px-2 py-1 transition-colors duration-300 hover:bg-neutral-300"
    >
      <div className="h-4 w-4">{icon}</div>
      <div className={`font-${fontWeight} text-sm`}>{title}</div>
      <div className="h-4 w-4">{icon}</div>
    </button>
  );
}

export default function Card({
  children,
  className,
  col,
}: {
  children: React.ReactNode;
  className?: string;
  col?: boolean;
}): JSX.Element {
  const flexDirection = col === true ? 'flex-col' : '';
  return (
    <div className={`flex w-full rounded-2xl border border-zinc-200 p-4 shadow ${className} ${flexDirection}`}>
      {children}
    </div>
  );
}

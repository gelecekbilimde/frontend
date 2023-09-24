import { memo } from 'react';
import dynamic from 'next/dynamic';
import { type LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

interface IconProperties extends LucideProps {
  name: keyof typeof dynamicIconImports;
}

const Icon: ({ name, ...properties }: IconProperties) => JSX.Element = ({ name, ...properties }: IconProperties) => {
  const LucideIcon = dynamic(dynamicIconImports[name]);

  return <LucideIcon {...properties} />;
};

export default memo(Icon);

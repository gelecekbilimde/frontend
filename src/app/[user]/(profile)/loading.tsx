'use client';

import { Dna } from 'react-loader-spinner';

export default function Loading(): JSX.Element {
  return (
    <div className="flex justify-center py-60">
      <Dna visible={true} height="80" width="80" ariaLabel="dna-loading" wrapperClass="text-zinc-800" />
    </div>
  );
}

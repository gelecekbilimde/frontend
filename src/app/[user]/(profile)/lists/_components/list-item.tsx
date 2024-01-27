'use client';

import { BookmarkCheckIcon, BookmarkPlusIcon, ExternalLinkIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

import Card from '../../_components/card';

interface ListProperties {
  isAdded: boolean;
  title: string;
  description: string;
  count: number | string;
  slug: string;
  user: string;
}

export default function ListItem({ isAdded, title, description, count, slug, user }: ListProperties): JSX.Element {
  const [isAddedState, setIsAddedState] = useState(isAdded);
  const { toast } = useToast();

  return (
    <Card className="justify-between">
      <div className="grid w-full grid-cols-2">
        <div className="flex flex-col justify-center">
          <h2 className="text-base font-bold">{title}</h2>
          <p>{description}</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div>0/{count}</div>
          <div className="grid grid-cols-2 gap-2">
            <Link href={`/${user}/lists/${slug}`}>
              <Button>
                <ExternalLinkIcon size={24} />
              </Button>
            </Link>
            <Button
              className={`transition-all ${isAddedState ? 'bg-green-600 hover:bg-green-500 ' : ''}`}
              onClick={() => {
                setIsAddedState((state) => {
                  toast(
                    !state
                      ? { title: 'Listeye eklendi', description: `${title} listeye eklendi.` }
                      : { title: 'Listeden çıkarıldı', description: `${title} listeden çıkarıldı.` },
                  );
                  return !state;
                });
              }}
            >
              {isAddedState ? <BookmarkCheckIcon size={24} /> : <BookmarkPlusIcon size={24} />}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

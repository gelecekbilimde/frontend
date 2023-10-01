import { Heart, MessageCircle } from 'lucide-react';
import React from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const onHeart = (e: MouseEvent) => {
  e.stopPropagation();
  console.log('heart');
};

const onMessageCircle = (e: MouseEvent) => {
  e.stopPropagation();
  console.log('message');
};

export default function HeroFooter(): JSX.Element {
  return (
    <footer
      className="flex items-center justify-between space-x-6 px-6"
      itemScope
      itemType="http://schema.org/SocialMediaPosting"
    >
      <section className="flex items-center space-x-1">
        <Button
          onClick={(e) => {
            onHeart(e);
          }}
          size={'default'}
          className="flex h-fit w-fit items-center space-x-2 bg-transparent text-black"
          itemProp="interactionStatistic"
          itemScope
          itemType="http://schema.org/InteractionCounter"
        >
          <span itemProp="interactionType">
            <Heart />
          </span>
          <h1 className="text-sm font-semibold opacity-60" itemProp="userInteractionCount">
            100
          </h1>
        </Button>
        <Button
          onClick={(e) => {
            onMessageCircle(e);
          }}
          variant={'ghost'}
          className="items-c enter
                    flex space-x-2 bg-transparent text-black"
          itemProp="interactionStatistic"
          itemScope
          itemType="http://schema.org/InteractionCounter"
        >
          <span itemProp="interactionType">
            <MessageCircle />
          </span>
          <h1 className="text-sm font-semibold opacity-60" itemProp="userInteractionCount">
            100
          </h1>
        </Button>
      </section>
      <Badge itemProp="articleBody" className="px-3 py-1">
        Devamını Oku
      </Badge>
    </footer>
  );
}

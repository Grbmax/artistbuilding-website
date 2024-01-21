import MastHead from '@/components/hero/masthead';
import HighlightsComponent, {
  Highlights,
} from '@/components/highlights/highlights';
import Services from '@/components/services/services';
import WhatWeDo from '@/components/whatwedo/WhatWeDo';
import { getAsset } from '@/lib/Contentful/Asset/get-asset';
import { getReelID } from '@/lib/Contentful/Hero/get-reel';
import { getHighlights } from '@/lib/Contentful/Highlights/get-highlights';
import { notFound } from 'next/navigation';
import React from 'react';

export default async function Home() {
  const reelID = await getReelID();
  if (!reelID) {
    return notFound();
  }
  const reelURL = await getAsset(reelID);
  const highlights = (await getHighlights()) as Highlights;
  // const work = (await getWork()) as unknown as WorkData[];

  // console.log('work', work);
  console.log('highlights', highlights);

  return (
    <React.Fragment>
      <article>
        <MastHead reelURL={reelURL} />
        <WhatWeDo />
        {highlights ? <HighlightsComponent highlights={highlights} /> : null}
        {/* 
          {work ? <WorkPage work={work} /> : null}
          */}
        <Services />
      </article>
    </React.Fragment>
  );
}

import MastHead from '@/components/hero/masthead';
import WhatWeDo from '@/components/whatwedo/WhatWeDo';
import { getAsset } from '@/lib/Contentful/Asset/get-asset';
import { getReelID } from '@/lib/Contentful/Hero/get-reel';
import { notFound } from 'next/navigation';
import React from 'react';

export default async function Home() {
  const reelID = await getReelID();
  if (!reelID) {
    return notFound();
  }
  const reelURL = await getAsset(reelID);
  // const highlights = (await getHighlights()) as Highlights;
  // const work = (await getWork()) as unknown as WorkData[];

  // console.log('work', work);
  // console.log('highlights', highlights);

  return (
    <React.Fragment>
      <div className='absolute left-0 top-0'>Gaurav</div>
      <article>
        <MastHead reelURL={reelURL} />
        <WhatWeDo />
        <section className='min-h-screen'>1</section>
        <section>2</section>
        {/* {highlights ? <HighlightsComponent highlights={highlights} /> : null} */}
        {/* 
      {work ? <WorkPage work={work} /> : null}
    <Services /> */}
      </article>
    </React.Fragment>
  );
}

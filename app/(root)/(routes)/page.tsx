import { getAsset } from '@/lib/Contentful/Asset/get-asset';
import { getReelID } from '@/lib/Contentful/Hero/get-reel';

import MastHead from '@/components/hero/masthead';
import Tagline from '@/components/tagline/tagline';
import {
  getHighlights,
  getWork,
} from '@/lib/Contentful/Highlights/get-highlights';
import HighlightsComponent, {
  Highlights,
} from '@/components/highlights/highlights';
import { notFound } from 'next/navigation';
import { WorkData } from '@/components/work/work-page';

export default async function Home() {
  const reelID = await getReelID();
  if (!reelID) {
    return notFound();
  }
  const reelURL = await getAsset(reelID);
  const highlights = (await getHighlights()) as Highlights;
  const work = (await getWork()) as unknown as WorkData[];

  console.log('work', work);
  console.log('highlights', highlights);

  return (
    <div className='w-full'>
      <MastHead reelURL={reelURL} />
      <Tagline />
      {highlights ? <HighlightsComponent highlights={highlights} /> : null}
      <Tagline />
      <Tagline />
      {/* 
      {work ? <WorkPage work={work} /> : null}
    <Services /> */}
    </div>
  );
}

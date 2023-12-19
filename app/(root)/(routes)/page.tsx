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
import WorkPage, { WorkData } from '@/components/work/work-page';
import { notFound } from 'next/navigation';
import Services from '@/components/services/services';

export default async function Home() {
  const reelID = await getReelID();
  if (!reelID) {
    return notFound();
  }
  const reelURL = await getAsset(reelID);
  const highlights = (await getHighlights()) as Highlights;
  const work = (await getWork()) as unknown as WorkData[];
  return (
    <div>
      <MastHead reelURL={reelURL} />
      <Tagline />
      {highlights ? <HighlightsComponent highlights={highlights} /> : null}
      {work ? <WorkPage work={work} /> : null}
      <Services />
    </div>
  );
}

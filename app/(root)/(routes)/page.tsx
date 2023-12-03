import { getAsset } from '@/lib/Contentful/Asset/get-asset';
import { getReelID } from '@/lib/Contentful/Hero/get-reel';

import MastHead from '@/components/hero/masthead';
import Tagline from '@/components/tagline/tagline';
import { getHighlights } from '@/lib/Contentful/Highlights/get-highlights';
import HighlightsComponent, {
  Highlights,
} from '@/components/highlights/highlights';
import WorkPage from '@/components/work/work-page';
import { notFound } from 'next/navigation';

export default async function Home() {
  const reelID = await getReelID();
  if (!reelID) {
    return notFound();
  }
  const reelURL = await getAsset(reelID);
  console.log(reelURL);
  const highlights = (await getHighlights()) as Highlights;
  return (
    <div>
      <MastHead reelURL={reelURL} />
      <Tagline />
      {highlights ? <HighlightsComponent highlights={highlights} /> : null}
      <WorkPage />
    </div>
  );
}

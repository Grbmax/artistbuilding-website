import { getAsset } from '@/lib/Contentful/Asset/get-asset';
import { getReelID } from '@/lib/Contentful/Hero/get-reel';

import MastHead from '@/components/hero/masthead';
import Tagline from '@/components/tagline/tagline';

export default async function Home() {
  const reelID = await getReelID();
  const reelURL = await getAsset(reelID);
  return (
    <div>
      <MastHead reelURL={reelURL} />
      <Tagline />
    </div>
  );
}

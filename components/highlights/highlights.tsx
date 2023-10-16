'use client';

import HighlightCard from './card';

export interface HighlightsData {
  brand: string;
  brandHex: string;
  video: string;
  heading: string;
  paragraph: string;
}

export interface Highlights {
  data: HighlightsData[];
  total: number;
}

interface HighlightCardProps {
  highlights: Highlights;
}

const HighlightsComponent: React.FC<HighlightCardProps> = ({ highlights }) => {
  return (
    <div>
      {highlights.data.map((highlight) => (
        <HighlightCard
          key={highlight.video}
          brand={highlight.brand}
          brandHex={highlight.brandHex}
          heading={highlight.heading}
          paragraph={highlight.paragraph}
          video={highlight.video}
        />
      ))}
    </div>
  );
};

export default HighlightsComponent;

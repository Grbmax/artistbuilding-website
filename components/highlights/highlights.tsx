'use client';
import HighlightCard from './card';

export interface HighlightsData {
  brand: string;
  brandHex: string;
  video: string;
  heading: string;
  paragraph: string;
  className?: string;
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
    <div className=''>
      {highlights.data.map((highlight: HighlightsData) => {
        return (
          <HighlightCard
            key={highlight.video}
            brand={highlight.brand}
            brandHex={highlight.brandHex}
            heading={highlight.heading}
            paragraph={highlight.paragraph}
            video={highlight.video}
          />
        );
      })}
    </div>
  );
};

export default HighlightsComponent;

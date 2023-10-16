'use client';

import { useContext, useRef } from 'react';
import ThreePlusGrid from '../ui/three-plus-grid';
import TwoPlusGrid from '../ui/two-plus-grid';
import HighlightCard from './card';
import { ScrollContext } from '@/lib/scroll-observer';

export interface HighlightsData {
  brand: string;
  brandHex: string;
  video: string;
  heading: string;
  paragraph: string;
  className?: string;
  isLast?: boolean;
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
        let isLast = false;
        if (highlights.data.indexOf(highlight) === highlights.data.length - 1) {
          isLast = true;
        }
        return (
          <HighlightCard
            key={highlight.video}
            brand={highlight.brand}
            brandHex={highlight.brandHex}
            heading={highlight.heading}
            paragraph={highlight.paragraph}
            video={highlight.video}
            isLast={isLast}
          />
        );
      })}
    </div>
  );
};

export default HighlightsComponent;

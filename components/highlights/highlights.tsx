'use client';
import React from 'react';
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
    <React.Fragment>
      {highlights.data.map((highlight: HighlightsData, index) => {
        return (
          <section id={`highlight-${index}`} key={highlight.video}>
            <HighlightCard
              brand={highlight.brand}
              brandHex={highlight.brandHex}
              heading={highlight.heading}
              paragraph={highlight.paragraph}
              video={highlight.video}
            />
          </section>
        );
      })}
    </React.Fragment>
  );
};

export default HighlightsComponent;

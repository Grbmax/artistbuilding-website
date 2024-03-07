'use client';
import React from 'react';
import HighlightCard from './card';
import { cn } from '@/lib/utils';

export interface HighlightsData {
  brand: string;
  brandHex: string;
  video: string;
  heading: string;
  paragraph: string;
  className?: string;
  start?: boolean;
}

export interface Highlights {
  data: HighlightsData[];
  total: number;
}

interface HighlightCardProps {
  highlights: Highlights;
}

const HighlightsComponent: React.FC<HighlightCardProps> = ({ highlights }) => {
  const parentStyles = cn(
    `flex flex-col px-1 md:px-0 min-h-screen md:grid md:h-screen md:min-w-max md:grid-cols-5 gap-[5rem] md:gap-[12rem] overflow-visible bg-black pb-16 pt-20 text-white`
  );
  return (
    <section className={parentStyles}>
      {highlights.data.map((highlight: HighlightsData, index) => {
        return (
          <HighlightCard
            key={index}
            brand={highlight.brand}
            brandHex={highlight.brandHex}
            heading={highlight.heading}
            paragraph={highlight.paragraph}
            video={highlight.video}
            start={index % 2 === 0}
          />
        );
      })}
    </section>
  );
};

export default HighlightsComponent;

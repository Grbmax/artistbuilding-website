'use client';
import { useState } from 'react';
import VideoTile from './video-tile';

interface WorkPageProps {
  work: WorkData[] | undefined | null;
}

export interface WorkData {
  title: string;
  subtitle: string;
  videoId: string;
}

const WorkPage: React.FC<WorkPageProps> = ({ work }) => {
  const [hovered, setHovered] = useState(false);
  const [currentHoveredTile, setCurrentHoveredTile] = useState<number | null>(
    null
  );

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      id='projects'
      className='z-10 flex h-full w-full flex-col items-center justify-center p-16'
    >
      <div
        className='grid h-full w-full md:grid-cols-2'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {work
          ? work.map((data, index) => (
              <VideoTile
                key={index}
                videoID={data.videoId}
                title={data.title}
                subtitle={data.subtitle}
                parentHovered={hovered}
                index={index}
                currentHoveredTile={currentHoveredTile}
                setCurrentHoveredTile={setCurrentHoveredTile}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default WorkPage;

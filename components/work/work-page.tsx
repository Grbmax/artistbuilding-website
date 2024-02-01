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
  const [visibleCount, setVisibleCount] = useState(6);

  //Only show the first 6 videos
  const loadMore = () => {
    setVisibleCount(visibleCount + 6);
  };

  return (
    <div id='projects' className='  flex w-full flex-col border-b bg-black'>
      <div className='mx-6 pt-6'>
        <h1 className='z-10 flex w-full justify-start text-6xl text-white'>
          Our work
        </h1>
      </div>
      <div className='mx-6 grid py-6 md:grid-cols-3'>
        {work
          ?.slice(0, visibleCount)
          .map((data, index) => (
            <VideoTile
              key={index}
              videoID={data.videoId}
              title={data.title}
              subtitle={data.subtitle}
            />
          ))}
      </div>
      {work && visibleCount < work?.length ? (
        <div className='mx-6 flex pb-6'>
          <button
            onClick={loadMore}
            className='text-md max-w-max rounded bg-white px-4 text-black '
          >
            Load More
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default WorkPage;

'use client';
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
  return (
    <div
      id='projects'
      className='z-10 flex h-full w-full flex-col items-center justify-center p-16'
    >
      <div className='grid h-full w-full md:grid-cols-2'>
        {work
          ? work.map((data, index) => (
              <VideoTile
                key={index}
                videoID={data.videoId}
                title={data.title}
                subtitle={data.subtitle}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default WorkPage;

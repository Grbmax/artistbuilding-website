'use client';
import Image from 'next/image';
import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import { VideoOverlayContext } from '../overlay/video-overlay-context';

type VideoTileProps = {
  videoID: string;
  title: string;
  subtitle: string;
  parentHovered: boolean;
  index: number;
  setCurrentHoveredTile: React.Dispatch<React.SetStateAction<number | null>>;
  currentHoveredTile: number | null;
};

const VideoTile: React.FC<VideoTileProps> = ({
  videoID,
  title,
  subtitle,
  parentHovered,
  setCurrentHoveredTile,
  currentHoveredTile,
  index,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const { toggleOverlay, setSubtitle, setTitle, setVideoID, showOverlay } =
    useContext(VideoOverlayContext);

  const handlePlayClick = () => {
    setIsPlaying(true);
    setIsHovering(false);
    toggleOverlay();
    setSubtitle(subtitle);
    setTitle(title);
    setVideoID(videoID);
  };

  useEffect(() => {
    if (showOverlay === false) {
      setIsPlaying(false);
    }
  }, [showOverlay]);

  const handleMouseEnter = () => {
    setIsHovering(true);
    setCurrentHoveredTile(index);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    // This effect runs on the client after the initial render
    // It ensures that the state values match the server-rendered values
    setIsPlaying(false);
    setIsHovering(false);
  }, []);

  let tileClassName = `tile-normal-${index}`;
  if (isHovering) {
    tileClassName = `tile-grow-${index}`;
  }

  if (parentHovered && currentHoveredTile !== index) {
    tileClassName = `tile-shrink-${index}`;
  }

  if (parentHovered && currentHoveredTile === index) {
    tileClassName = `tile-grow-${index}`;
  }

  if (parentHovered && currentHoveredTile === null) {
    tileClassName = `tile-shrink-${index}`;
    if (index === 0) tileClassName = `tile-grow-0`;
  }

  if (!parentHovered && currentHoveredTile === index) {
    tileClassName = `tile-grow-normal-${index}`;
  }

  if (
    tileClassName === `tile-shrink-${index}` &&
    currentHoveredTile !== index
  ) {
  }

  return (
    <div
      key={videoID}
      className={`relative mb-3 h-full w-full cursor-pointer overflow-hidden bg-gray-700 md:mb-0 ${tileClassName}`}
      onClick={handlePlayClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        fill
        className='object-cover'
        quality={100}
        src={`https://i.ytimg.com/vi/${videoID}/maxresdefault.jpg`}
        alt=''
      />
      {isPlaying ? null : (
        <div className='absolute inset-0 flex flex-col items-center justify-center border-4 border-black bg-black bg-opacity-20'>
          {isHovering && (
            <div className='absolute flex h-full w-full flex-col justify-center bg-black bg-opacity-50 p-4 text-center'>
              <h3 className='text-2xl font-bold text-white'>{title}</h3>
              <p className='text-xl text-white'>{subtitle}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default VideoTile;

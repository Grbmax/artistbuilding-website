'use client';
import Image from 'next/image';
import React from 'react';
import { useState, useEffect } from 'react';

type VideoTileProps = {
  videoID: string;
  title: string;
  subtitle: string;
};

const VideoTile: React.FC<VideoTileProps> = ({ videoID, title, subtitle }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
    setIsHovering(false);
  };

  const handleCloseClick = () => {
    setIsPlaying(false);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
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

  return (
    <React.Fragment key={videoID}>
      <div
        className='relative h-80 w-full cursor-pointer overflow-hidden bg-gray-700 sm:mb-3'
        onClick={handlePlayClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          height={475}
          width={300}
          className='absolute inset-0 h-full w-full object-cover'
          src={`https://i.ytimg.com/vi/${videoID}/maxresdefault.jpg`}
          alt=''
        />
        {!isPlaying && (
          <div className='absolute inset-0 flex flex-col items-center justify-center border-4 border-black bg-black bg-opacity-20'>
            {isHovering && (
              <div className='absolute flex h-full w-full flex-col justify-center bg-black bg-opacity-50 p-4 text-center'>
                <h3 className='text-2xl font-bold text-white'>{title}</h3>
                <p className='text-xl text-white'>{subtitle}</p>
              </div>
            )}
            <div
              className={`text-white ${
                isHovering ? 'opacity-0' : 'opacity-90'
              }`}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-16 w-16 cursor-pointer transition-opacity duration-500 ease-in-out'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                onClick={handlePlayClick}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M5 3l14 9-14 9V3z'
                />
              </svg>
            </div>
          </div>
        )}
      </div>

      {isPlaying && (
        <div className='fixed left-0 top-0 z-50 flex h-screen w-screen flex-col items-center justify-center bg-black bg-opacity-90'>
          <button
            className='absolute right-5 top-5 mr-5 rounded-full p-2'
            onClick={handleCloseClick}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-8 w-8 text-white'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M2.293 3.293a1 1 0 011.414 0L10 8.586l6.293-6.293a1 1 0 011.414 1.414L11.414 10l6.293 6.293a1 1 0 01-1.414 1.414L10 11.414l-6.293 6.293a1 1 0 01-1.414-1.414L8.586 10 2.293 3.707a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </button>
          <div className='relative sm:h-2/5 sm:w-3/6 md:h-2/5 md:w-3/6 lg:h-4/5 lg:w-4/6'>
            <iframe
              src={`https://www.youtube.com/embed/${videoID}`}
              className='aspect-w-16 aspect-h-9 h-full w-full'
              allowFullScreen
            />
          </div>
          <div className='mt-2 flex flex-col justify-self-start text-center text-white'>
            <h1 className='text-5xl font-bold'>{title}</h1>
            <p className='text-3xl'>{subtitle}</p>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
export default VideoTile;

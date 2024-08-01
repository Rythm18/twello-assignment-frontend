import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const HeaderSkeleton = () => {
  return (
    <div className='w-full h-min'>
      <header className="p-5 flex items-center justify-between content-between mb-6">
        <Skeleton height={36} width={`60%`} />
        <div className='flex gap-3'>
          <Skeleton height={24} width={`100px`} />
          <Skeleton circle={true} height={24} width={24} />
        </div>
      </header>
      
      <div className='flex justify-evenly'>
        <div className='w-1/3 p-4'>
          <Skeleton height={200} width={`100%`} />
        </div>
        <div className='w-1/3 p-4'>
          <Skeleton height={200} width={`100%`} />
        </div>
        <div className='w-1/3 p-4'>
          <Skeleton height={200} width={`100%`} />
        </div>
      </div>
    </div>
  );
};

export default HeaderSkeleton;

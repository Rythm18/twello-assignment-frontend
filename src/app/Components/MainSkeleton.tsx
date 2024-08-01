import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const MainSkeleton = () => {
  return (
    <div className='mt-6 p-2'>
      <Skeleton height={36} width={`100%`} style={{ marginBottom: '1rem' }} />
      <div className='flex gap-5 justify-evenly w-full bg-white p-3 rounded-lg'>
        <div className='w-1/4'>
          <Skeleton height={36} width={`100%`} style={{ marginBottom: '1rem' }} />
          <Skeleton height={150} width={`100%`} />
          <Skeleton height={150} width={`100%`} />
          <Skeleton height={150} width={`100%`} />
        </div>
        <div className='w-1/4'>
          <Skeleton height={36} width={`100%`} style={{ marginBottom: '1rem' }} />
          <Skeleton height={150} width={`100%`} />
          <Skeleton height={150} width={`100%`} />
          <Skeleton height={150} width={`100%`} />
        </div>
        <div className='w-1/4'>
          <Skeleton height={36} width={`100%`} style={{ marginBottom: '1rem' }} />
          <Skeleton height={150} width={`100%`} />
          <Skeleton height={150} width={`100%`} />
          <Skeleton height={150} width={`100%`} />
        </div>
        <div className='w-1/4'>
          <Skeleton height={36} width={`100%`} style={{ marginBottom: '1rem' }} />
          <Skeleton height={150} width={`100%`} />
          <Skeleton height={150} width={`100%`} />
          <Skeleton height={150} width={`100%`} />
        </div>
      </div>
    </div>
  );
};

export default MainSkeleton;

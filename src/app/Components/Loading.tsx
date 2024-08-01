import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import HeaderSkeleton from './HeaderSkeleton';
import MainSkeleton from './MainSkeleton';

const Loading = () => {
  return (
    <div>
      {/* <div className="flex flex-col border-r bg-muted/40">
        <aside className="w-72 p-4 h-screen bg-white border-r">
          <div className="mb-6">
            <Skeleton circle={true} height={48} width={48} />
            <Skeleton height={24} width={`60%`} />
            <Skeleton height={36} width={`100%`} style={{ marginTop: '1rem' }} />
          </div>
          <nav className="space-y-2">
            <Skeleton height={36} width={`100%`} />
            <Skeleton height={36} width={`100%`} />
            <Skeleton height={36} width={`100%`} />
            <Skeleton height={36} width={`100%`} />
            <Skeleton height={36} width={`100%`} />
          </nav>
          <Skeleton height={48} width={`100%`} style={{ marginTop: '1rem' }} />
        </aside>
        <div className='h-screen content-end bg-white border-r p-3'>
          <Skeleton height={48} width={`100%`} />
        </div>
      </div> */}
      <HeaderSkeleton />
      <MainSkeleton />
    </div>
  )
}

export default Loading;

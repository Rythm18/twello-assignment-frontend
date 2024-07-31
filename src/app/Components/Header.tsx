import React from 'react'
import Feature from './Features'


const Header = ({ name }: { name: string }) => {
  return (
    <div className='w-full h-min'>
        <header className="p-5 flex items-center justify-between content-between mb-6">
          <h1 className="text-3xl font-bold">Good morning,<span className='text-4xl text-[#2F2188] '> {name}</span>!</h1>
          <div className='flex gap-3'>
          <button className="-mr-1">
            Help & feedback
          </button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
</svg>
          </div>
          
          
        </header>
        
        <div className='flex justify-evenly'>
            <Feature 
                image='/feature1.png' 
                title='Introducing tags' 
                description='Easily categorize and find your notes by adding tags. Keep your workspace clutter-free and efficient.' />
            <Feature 
                image='/feature2.png' 
                title='Share Notes Instantly' 
                description='Effortlessly share your notes with others via email or link. Enhance collaboration with quick sharing options.' />
            <Feature 
                image='/feature3.png' 
                title='Access Anywhere' 
                description='Sync your notes across all devices. Stay productive whether youre on your phone, tablet, or computer.' /> 
        </div>
          
    </div>
  )
}

export default Header
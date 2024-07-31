import React from 'react'
import Feature from './Features'


const Header = ({ name }: { name: string }) => {
  return (
    <div className='w-full h-min'>
        <header className="p-5 flex items-center justify-between content-between mb-6">
          <h1 className="text-3xl font-bold">Good morning, {name}</h1>
          <button className="">
            Help & feedback
          </button>
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
import React from 'react'
import Image from 'next/image';
export interface Props {
    image: string;
    title: string;
    description: string;      
}

const Feature = (props : Props) => {
  return (
    <div className='flex bg-white rounded-lg w-full mr-5 ml-3 p-5'>
        
         <Image src={props.image} width={75} height={75} alt='Logo' className='mr-5'/>
         <div>
                <h1 className='text-black/60 font-semibold'>{props.title}</h1>
                <p className='text-sm text-gray-400'>{props.description}</p>
         </div>
    </div>
  )
}

export default Feature
